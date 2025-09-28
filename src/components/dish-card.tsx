
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { Dish } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCart } from "@/context/cart-context";
import { useRouter } from "next/navigation";
import { useToast } from "@/hooks/use-toast";

type DishCardProps = {
  dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
  const { addToCart } = useCart();
  const router = useRouter();
  const { toast } = useToast();

  const handleAddToCart = () => {
    addToCart({ ...dish, price: dish.likes / 100 });
    toast({
      title: "Added to Cart",
      description: `${dish.name} has been added to your cart.`,
      action: (
        <Button variant="outline" size="sm" onClick={() => router.push('/cart')}>
          View Cart
        </Button>
      ),
    });
  };
  
  const originalPrice = (dish.likes / 100) * 1.5;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col group border hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
          <div className="relative aspect-video overflow-hidden">
             <Link href={`/dish/${dish.id}`} className="block w-full h-full">
                <Image
                    src={dish.image.imageUrl}
                    alt={dish.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    data-ai-hint={dish.image.imageHint}
                />
             </Link>
             <div className="absolute top-2 right-2 flex items-center gap-1">
                {dish.category === 'Popular' && <Badge variant="destructive">HOT</Badge>}
                <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-primary text-primary mr-1" />
                    <span className="font-bold">4.6</span>
                </Badge>
            </div>
          </div>
        <CardContent className="p-3 flex-grow flex flex-col">
          <h3 className="font-bold leading-tight text-md">
            <Link href={`/dish/${dish.id}`} className="hover:text-primary transition-colors">
              {dish.name}
            </Link>
          </h3>
          <p className="text-muted-foreground text-xs line-clamp-2 mt-1 mb-2 flex-grow">{dish.description}</p>
          <div className="flex justify-between items-end mt-auto">
            <div className="flex items-baseline gap-2">
                <div className="font-headline text-lg font-bold text-foreground">
                    ${(dish.likes / 100).toFixed(2)}
                </div>
                <div className="text-sm text-muted-foreground line-through">
                    ${originalPrice.toFixed(2)}
                </div>
            </div>
            <Button size="sm" className="font-bold rounded-md text-lg w-10 h-10 p-0" onClick={handleAddToCart}>+</Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
