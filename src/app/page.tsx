"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { dishes } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DishCard from "@/components/dish-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function HeroSection() {
  const heroBurgerImage = PlaceHolderImages.find(p => p.id === 'dish-1');

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="bg-primary rounded-lg shadow-lg grid md:grid-cols-2 items-center overflow-hidden">
        <div className="p-8 md:p-12 text-primary-foreground">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="font-body font-semibold text-lg"
          >
            Fast Food
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-white uppercase"
          >
            Fresh, Bold & Tasty
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-4 text-lg text-primary-foreground/90"
          >
            Sale 20% every Monday
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }} 
            className="mt-8"
          >
            <Button asChild size="lg" variant="destructive" className="font-bold text-lg px-8 py-6 rounded-full">
              <Link href="/feed">
                Shop Now
              </Link>
            </Button>
          </motion.div>
        </div>
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            className="relative h-64 md:h-full">
          {heroBurgerImage && (
            <Image
              src={heroBurgerImage.imageUrl}
              alt="Tasty Burger"
              fill
              className="object-cover"
              data-ai-hint="burger tasty"
            />
          )}
        </motion.div>
      </div>
    </section>
  );
}

function TrendingDishes() {
  const trendingDishes = dishes.filter(d => d.category === 'Trending');

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Popular Dishes
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {trendingDishes.map((dish) => (
              <CarouselItem key={dish.id} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <DishCard dish={dish} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TrendingDishes />
    </div>
  );
}
