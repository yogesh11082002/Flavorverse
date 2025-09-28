
"use client";

import { notFound, useParams } from 'next/navigation';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import React, { useState } from 'react';
import { useDoc, useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import type { Dish, Comment as CommentType } from '@/lib/types';
import { doc, collection, addDoc, serverTimestamp, deleteDoc, setDoc } from 'firebase/firestore';
import { Skeleton } from '@/components/ui/skeleton';

export default function DishDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const firestore = useFirestore();
  const { user } = useUser();

  const dishRef = useMemoFirebase(() => doc(firestore, 'dishes', id), [firestore, id]);
  const { data: dish, isLoading: isDishLoading } = useDoc<Dish>(dishRef);

  const commentsQuery = useMemoFirebase(() => collection(firestore, 'dishes', id, 'comments'), [firestore, id]);
  const { data: comments, isLoading: areCommentsLoading } = useCollection<CommentType>(commentsQuery);

  const likesRef = useMemoFirebase(() => collection(firestore, 'dishes', id, 'likes'), [firestore, id]);
  const { data: likes, isLoading: areLikesLoading } = useCollection(likesRef);
  
  const [newComment, setNewComment] = useState("");

  const isLiked = user && likes ? likes.some(like => like.id === user.uid) : false;
  const likesCount = likes?.length ?? 0;

  const handleLike = async () => {
    if (!user || !dish) return;
    const likeRef = doc(firestore, 'dishes', id, 'likes', user.uid);
    if (isLiked) {
      await deleteDoc(likeRef);
    } else {
      await setDoc(likeRef, { createdAt: serverTimestamp() });
    }
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
            <h1 className="font-headline text-3xl md:text-4xl font-bold mb-4">{dish.name}</h1>
            <p className="text-muted-foreground mb-6 flex-grow">{dish.description}</p>
            
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleLike} disabled={!user || areLikesLoading}>
                <Heart className={`h-4 w-4 text-red-500 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likesCount} Likes</span>
              </Button>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>{comments?.length ?? 0} Comments</span>
              </div>
            </div>
            
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
