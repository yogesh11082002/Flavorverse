"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { dishes } from "@/lib/data";
import DishCard from "@/components/dish-card";
import { ShoppingBag } from "lucide-react";

export function DiscountedGoods() {
  const discountedDishes = dishes.filter(d => d.category === 'Trending' || d.category === 'Popular');

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center mb-8">
          <ShoppingBag className="w-8 h-8 text-foreground mr-3" />
          <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Discounted Goods
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2">
            {discountedDishes.map((dish) => (
              <CarouselItem key={dish.id} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2">
                <DishCard dish={dish} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex -left-4" />
          <CarouselNext className="hidden sm:flex -right-4" />
        </Carousel>
      </div>
    </section>
  );
}
