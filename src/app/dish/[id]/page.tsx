import { notFound } from 'next/navigation';
import Image from 'next/image';
import { dishes } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Heart, MessageSquare, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

export function generateStaticParams() {
  return dishes.map((dish) => ({
    id: dish.id,
  }));
}

export default function DishDetailPage({ params }: { params: { id: string } }) {
  const dish = dishes.find((d) => d.id === params.id);

  if (!dish) {
    notFound();
  }

  const authorUsername = dish.author.toLowerCase().replace(' ', '');

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <Card>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <Image
              src={dish.image.imageUrl}
              alt={dish.name}
              width={800}
              height={600}
              className="w-full rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover aspect-square"
              data-ai-hint={dish.image.imageHint}
            />
          </div>
          <div className="flex flex-col p-6">
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
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-red-500 fill-current" />
                <span>{dish.likes} Likes</span>
              </Button>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                <span>{dish.commentsCount} Comments</span>
              </div>
            </div>
            
            <Separator className="my-6" />

            <div>
              <h2 className="text-xl font-bold font-headline mb-4">Comments</h2>
              <div className="space-y-4">
                {/* Placeholder for comments */}
                <div className="text-sm text-muted-foreground">No comments yet.</div>
              </div>

              <form className="mt-6 flex gap-2">
                <Textarea placeholder="Add a comment..." className="resize-none" />
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
