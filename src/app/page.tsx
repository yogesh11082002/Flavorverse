"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { dishes } from "@/lib/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import DishCard from "@/components/dish-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { ArrowRight, ShoppingBag } from "lucide-react";

function HeroSection() {
  const heroBurgerImage = PlaceHolderImages.find(p => p.id === 'dish-1');
  const doubleMeetBurger = PlaceHolderImages.find(p => p.id === 'dish-3');
  const pizzaSlice = PlaceHolderImages.find(p => p.id === 'dish-8');

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative bg-primary rounded-lg shadow-lg flex items-center overflow-hidden min-h-[300px] md:min-h-[400px]">
          <div className="p-8 md:p-12 text-primary-foreground z-10 w-3/5">
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
              <Button asChild size="lg" variant="destructive" className="font-bold text-lg px-8 py-6 rounded-md">
                <Link href="/feed">
                  Shop Now
                </Link>
              </Button>
            </motion.div>
          </div>
          <motion.div 
              initial={{ opacity: 0, scale: 0.8, x: '50%' }}
              animate={{ opacity: 1, scale: 1, x: '40%' }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
              className="absolute right-0 top-0 h-full w-4/5">
            {heroBurgerImage && (
              <Image
                src={heroBurgerImage.imageUrl}
                alt="Tasty Burger"
                fill
                className="object-contain"
                data-ai-hint="burger tasty"
              />
            )}
          </motion.div>
        </div>
        <div className="flex flex-col gap-6">
            <Card className="relative overflow-hidden rounded-lg shadow-lg h-full">
              {doubleMeetBurger && (
                 <Image src={doubleMeetBurger.imageUrl} alt="Beef Burger" fill className="object-cover" data-ai-hint="beef burger"/>
              )}
              <div className="absolute inset-0 bg-black/40"/>
              <div className="relative p-4 h-full flex flex-col justify-end text-white">
                <p className="text-xs font-semibold">DOUBLE MEET</p>
                <h3 className="font-headline text-2xl font-bold">Beef Burger</h3>
                <p className="text-2xl font-bold text-primary mt-2">$13.50</p>
              </div>
            </Card>
             <Card className="relative overflow-hidden rounded-lg shadow-lg h-full">
              {pizzaSlice && (
                 <Image src={pizzaSlice.imageUrl} alt="Pizza" fill className="object-cover" data-ai-hint="pizza slice"/>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
              <div className="relative p-4 h-full flex items-end">
                <h3 className="font-headline text-3xl font-bold text-white">Fresh, Delicious, Delivered!</h3>
              </div>
            </Card>
        </div>
      </div>
    </section>
  );
}

function PopularBrands() {
  const brands = [
    { name: 'Dominos', logo: PlaceHolderImages.find(p => p.id === 'brand-dominos') },
    { name: 'Pizza Hut', logo: PlaceHolderImages.find(p => p.id === 'brand-pizzahut') },
    { name: 'Fanta', logo: PlaceHolderImages.find(p => p.id === 'brand-fanta') },
    { name: 'Carls Jr', logo: PlaceHolderImages.find(p => p.id === 'brand-carlsjr') },
    { name: 'Folgers', logo: PlaceHolderImages.find(p => p.id === 'brand-folgers') },
    { name: 'Fritos', logo: PlaceHolderImages.find(p => p.id === 'brand-fritos') },
    { name: 'Hardees', logo: PlaceHolderImages.find(p => p.id === 'brand-hardees') },
    { name: 'KFC', logo: PlaceHolderImages.find(p => p.id === 'brand-kfc') },
  ];
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 lg:px-8">
         <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Popular Brands
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {brands.map(brand => (
            brand.logo && <div key={brand.name} className="p-4 bg-card rounded-lg shadow-md border">
              <Image src={brand.logo.imageUrl} alt={brand.name} width={100} height={50} className="object-contain" data-ai-hint={`${brand.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CategoryGrid() {
    const categories = [
    { title: "Grilled Double Cheese Burger", image: PlaceHolderImages.find(p => p.id === 'dish-3'), color: 'from-purple-500 to-purple-700', hint: "cheese burger" },
    { title: "Tasty Yummy Cheesy Pizza", image: PlaceHolderImages.find(p => p.id === 'dish-8'), color: 'from-yellow-400 to-yellow-600', hint: "cheese pizza" },
    { title: "New Menu Galaxy Donuts Time!", image: PlaceHolderImages.find(p => p.id === 'dish-12'), color: 'from-pink-500 to-pink-700', hint: 'donuts' },
    { title: "Fresh Delicious Veg Sandwich", image: PlaceHolderImages.find(p => p.id === 'dish-10'), color: 'from-green-400 to-green-600', hint: 'veg sandwich' },
  ];

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((cat, index) => (
          <motion.div 
            key={index}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className={`relative rounded-lg overflow-hidden shadow-xl text-white p-6 flex flex-col justify-end min-h-[350px] bg-gradient-to-t ${cat.color}`}
          >
            {cat.image && <Image src={cat.image.imageUrl} alt={cat.title} fill className="object-cover object-center absolute inset-0 z-0 opacity-20" data-ai-hint={cat.hint} />}
            <div className="relative z-10">
              <h3 className="font-headline text-3xl font-bold">{cat.title}</h3>
               <Link href="/feed">
                <Button variant="link" className="p-0 h-auto text-white font-bold mt-4 flex items-center gap-2">
                  Order Now <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function DiscountedGoods() {
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
              <CarouselItem key={dish.id} className="md:basis-1/2 lg:basis-1/4 xl:basis-1/5 p-2">
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

function AboutUsSection() {
    return (
        <section className="container mx-auto px-4 lg:px-8 py-12">
            <div className="flex items-center mb-8">
                 <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-foreground mr-3"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 0 2l-.15.08a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1 0-2l.15-.08a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Little Bite About Us
                </h2>
            </div>
            <Card className="p-8 bg-accent/50">
                 <h3 className="font-headline text-2xl font-bold">Savor the Flavor, Anytime, Anywhere</h3>
                <p className="mt-4 text-muted-foreground max-w-4xl">
                    Welcome to FlavorVerse, your ultimate destination for culinary inspiration and home-cooked delights! We believe that food is more than just sustenance; it's an experience, a memory, and a way to connect with others. Our platform is a celebration of the diverse and delicious world of homemade food, created by passionate cooks like you.
                </p>
            </Card>
        </section>
    );
}

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PopularBrands />
      <CategoryGrid />
      <DiscountedGoods />
      <AboutUsSection />
    </div>
  );
}
