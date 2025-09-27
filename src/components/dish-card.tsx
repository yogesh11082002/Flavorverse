"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Dish } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";

type DishCardProps = {
  dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Card className="overflow-hidden h-full flex flex-col group border-2 hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
          <div className="relative aspect-square overflow-hidden">
             <Image
                src={dish.image.imageUrl}
                alt={dish.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                data-ai-hint={dish.image.imageHint}
              />
          </div>
        <CardContent className="p-4 flex-grow flex flex-col">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-headline text-xl font-bold leading-tight">
              <Link href={`/dish/${dish.id}`} className="hover:text-primary transition-colors stretched-link">
                {dish.name}
              </Link>
            </h3>
            <div className="flex items-center gap-1 bg-primary/10 text-primary font-bold text-xs px-2 py-1 rounded-full">
              <Star className="h-3 w-3 fill-primary" />
              <span>4.6</span>
            </div>
          </div>
          <p className="text-muted-foreground text-sm line-clamp-2 mb-4 flex-grow">{dish.description}</p>
          <div className="flex justify-between items-center mt-auto">
            <div className="font-headline text-lg font-bold text-foreground">
              ${(dish.likes / 100).toFixed(2)}
            </div>
            <Button size="sm" className="font-bold rounded-full">Add +</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
