"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, MessageSquare } from "lucide-react";
import type { Dish } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type DishCardProps = {
  dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden h-full flex flex-col">
        <Link href={`/dish/${dish.id}`} className="block">
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
             <Image
                src={dish.image.imageUrl}
                alt={dish.name}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={dish.image.imageHint}
              />
          </div>
        </Link>
        <CardHeader>
           <div className="flex items-center gap-3">
              <Avatar className="h-8 w-8">
                <AvatarImage src={dish.authorImage.imageUrl} alt={dish.author} data-ai-hint={dish.authorImage.imageHint} />
                <AvatarFallback>{dish.author.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="text-sm font-medium text-foreground">{dish.author}</div>
           </div>
          <CardTitle className="font-headline text-xl pt-2">
            <Link href={`/dish/${dish.id}`} className="hover:text-primary transition-colors">
              {dish.name}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-muted-foreground line-clamp-3">{dish.description}</p>
        </CardContent>
        <CardFooter className="flex items-center justify-end gap-4 text-muted-foreground">
          <div className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            <span className="text-sm">{dish.likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <MessageSquare className="h-4 w-4" />
            <span className="text-sm">{dish.commentsCount}</span>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
