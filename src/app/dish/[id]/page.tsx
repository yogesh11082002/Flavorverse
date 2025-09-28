
"use client";

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Send, ShoppingCart } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDoc, useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import type { Dish, Comment as CommentType } from '@/lib/types';
import { doc, collection, addDoc, serverTimestamp, deleteDoc, setDoc, runTransaction, increment } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';
import { useCart } from '@/context/cart-context';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';

export default function DishDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const firestore = useFirestore();
  const { user } = useUser();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const dishRef = useMemoFirebase(() => doc(firestore, 'dishes', id), [firestore, id]);
  const { data: dish, isLoading: isDishLoading } = useDoc<Dish>(dishRef);

  const commentsQuery = useMemoFirebase(() => collection(firestore, 'dishes', id, 'comments'), [firestore, id]);
  const { data: comments, isLoading: areCommentsLoading } = useCollection<CommentType>(commentsQuery);

  const likesRef = useMemoFirebase(() => (user ? doc(firestore, 'dishes', id, 'likes', user.uid) : null), [firestore, id, user]);
  const { data: likeDoc, isLoading: isLikeLoading } = useDoc(likesRef);
  
  const [newComment, setNewComment] = useState("");

  const isLiked = !!likeDoc;
  const likesCount = dish?.likesCount ?? 0;

  const handleLike = async () => {
    if (!user || !dish) return;
    const likeRef = doc(firestore, 'dishes', id, 'likes', user.uid);
    const dishDocRef = doc(firestore, 'dishes', id);

    await runTransaction(firestore, async (transaction) => {
        const likeDoc = await transaction.get(likeRef);
        if (likeDoc.exists()) {
            transaction.delete(likeRef);
            transaction.update(dishDocRef, { likesCount: increment(-1) });
        } else {
            transaction.set(likeRef, { createdAt: serverTimestamp() });
            transaction.update(dishDocRef, { likesCount: increment(1) });
        }
    });
  };
  
  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim() && user && dish) {
      await addDoc(collection(firestore, 'dishes', id, 'comments'), {
        dishId: id,
        userId: user.uid,
        author: user.displayName || 'Anonymous',
        authorImage: user.photoURL || '',
        text: newComment,
        createdAt: serverTimestamp(),
      });
      setNewComment("");
    }
  };
  
  const handleAddToCart = () => {
    if (!user) {
        toast({
            title: "Please log in",
            description: "You need to be logged in to add items to your cart.",
            variant: "destructive",
        });
        router.push("/login");
        return;
    }
    if (!dish) return;
    
    const price = dish.discount ? dish.price * (1 - dish.discount / 100) : dish.price;
    addToCart({ ...dish, price });
    toast({
      title: "Added to Cart",
      description: `${dish.name} has been added to your cart.`,
    });
  };

  if (isDishLoading) {
    return (
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <Card className="overflow-hidden">
          <div className="grid md:grid-cols-2">
            <Skeleton className="aspect-square md:aspect-auto h-full w-full" />
            <div className="flex flex-col p-6 md:p-8">
              <div className="flex items-center gap-3 mb-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-6 w-32" />
              </div>
              <Skeleton className="h-10 w-3/4 mb-4" />
              <Skeleton className="h-20 w-full mb-6" />
              <div className="flex items-center gap-6 mb-6">
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-8 w-24" />
              </div>
              <Separator className="my-6" />
              <Skeleton className="h-8 w-1/3 mb-4" />
              <div className="space-y-4">
                <Skeleton className="h-16 w-full" />
                <Skeleton className="h-16 w-full" />
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  if (!dish) {
    return notFound();
  }

  const discountedPrice = dish.discount ? dish.price * (1 - dish.discount / 100) : dish.price;

  return (
    <div className="container mx-auto max-w-5xl px-4 py-12">
      <Card className="overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square md:aspect-auto">
            <Image
              src={dish.image.imageUrl}
              alt={dish.name}
              fill
              className="object-cover"
              data-ai-hint={dish.image.imageHint}
            />
          </div>
          <div className="flex flex-col p-6 md:p-8">
            <div className="flex items-center gap-3 mb-4">
               <Link href={`/profile/${dish.userId}`} className="flex items-center gap-3 group">
                <Avatar>
                  <AvatarImage src={dish.authorImage.imageUrl} alt={dish.author} data-ai-hint={dish.authorImage.imageHint} />
                  <AvatarFallback>{dish.author.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-semibold group-hover:text-primary transition-colors">{dish.author}</span>
              </Link>
            </div>
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-2">{dish.name}</h1>

            <div className="flex items-baseline gap-2 mb-4">
              <span className="font-headline text-3xl font-bold text-primary">${discountedPrice.toFixed(2)}</span>
              {dish.discount && dish.discount > 0 && (
                <span className="text-xl font-medium text-muted-foreground line-through">${dish.price.toFixed(2)}</span>
              )}
            </div>

            <p className="text-muted-foreground mb-6 flex-grow">{dish.description}</p>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleLike} disabled={!user || isLikeLoading}>
                <Heart className={`h-4 w-4 text-red-500 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likesCount} Likes</span>
              </Button>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>{comments?.length ?? 0} Comments</span>
              </div>
            </div>

            <Button size="lg" onClick={handleAddToCart} disabled={!user}>
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
            </Button>
            
            <Separator className="my-6" />

            <div className="flex-grow flex flex-col">
              <h2 className="text-xl font-bold font-headline mb-4">Comments</h2>
              <div className="space-y-4 flex-grow max-h-60 overflow-y-auto pr-2">
                {areCommentsLoading ? (
                    <div className="text-sm text-muted-foreground">Loading comments...</div>
                ) : comments && comments.length === 0 ? (
                  <div className="text-sm text-muted-foreground">No comments yet.</div>
                ) : (
                  comments?.map((comment) => (
                    <div key={comment.id} className="flex items-start gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={comment.authorImage} alt={comment.author} />
                        <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="bg-muted p-3 rounded-lg flex-grow">
                        <p className="font-semibold text-sm">{comment.author}</p>
                        <p className="text-sm text-foreground">{comment.text}</p>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {user ? (
                <form className="mt-6 flex gap-2" onSubmit={handleCommentSubmit}>
                  <Textarea 
                    placeholder="Add a comment..." 
                    className="resize-none"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                  />
                  <Button type="submit" size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              ): (
                <div className="mt-6 text-sm text-muted-foreground">
                    <Link href="/login" className="text-primary underline">Log in</Link> to add a comment.
                </div>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
