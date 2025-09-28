
"use client";

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { dishes } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Send } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Comment = {
  author: string;
  authorImage: string;
  text: string;
};

// This function needs to be outside the component to be used in generateStaticParams
export function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default function DishDetailPage({ params }: { params: { id: string } }) {
  // `find` can return undefined, so we need to handle that case.
  const dish = dishes.find((d) => d.id === params.id);
  
  // States should be initialized inside the component.
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  // Defer state initialization that depends on props to useEffect.
  useEffect(() => {
    if (dish) {
      setLikes(dish.likes);
    }
  }, [dish]);


  if (!dish) {
    // This will show the 404 page if a dish with the given ID is not found.
    return notFound();
  }

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  
  const handleCommentSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.trim()) {
      const comment: Comment = {
        author: "User Name",
        authorImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODg2Nzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080",
        text: newComment,
      };
      setComments([comment, ...comments]);
      setNewComment("");
    }
  };

  const authorUsername = dish.author.toLowerCase().replace(' ', '');

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
               <Link href={`/profile/${authorUsername}`} className="flex items-center gap-3 group">
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
              <Button variant="outline" size="sm" className="flex items-center gap-2" onClick={handleLike}>
                <Heart className={`h-4 w-4 text-red-500 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes} Likes</span>
              </Button>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>{dish.commentsCount + comments.length} Comments</span>
              </div>
            </div>
            
            <Separator className="my-6" />

            <div className="flex-grow flex flex-col">
              <h2 className="text-xl font-bold font-headline mb-4">Comments</h2>
              <div className="space-y-4 flex-grow max-h-60 overflow-y-auto pr-2">
                {comments.length === 0 ? (
                  <div className="text-sm text-muted-foreground">No comments yet.</div>
                ) : (
                  comments.map((comment, index) => (
                    <div key={index} className="flex items-start gap-3">
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
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
