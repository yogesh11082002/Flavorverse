import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { dishes } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DishCard from "@/components/dish-card";

function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-20 text-center">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Welcome to <span className="text-primary">FlavorVerse</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
      >
        Discover, share, and savor homemade culinary creations from around the world. Your next favorite dish is just a click away.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }} 
        className="mt-10 flex justify-center gap-4"
      >
        <Button asChild size="lg" className="font-bold">
          <Link href="/feed">
            Explore Dishes <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </section>
  );
}

function TrendingDishes() {
  const trendingDishes = dishes.filter(d => d.category === 'Trending');

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Trending Now
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
