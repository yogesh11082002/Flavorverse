
"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { dishes } from "@/lib/data";
import DishCard from "@/components/dish-card";
import { ShoppingBag, Sprout, Truck, Box, Send } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

function HowItWorksSection() {
    const steps = [
        {
            title: "Gathering",
            description: "Making Fresh and Tastiest From all over the World.",
            icon: <Sprout className="w-8 h-8 text-primary" />,
        },
        {
            title: "Transportation",
            description: "Select the best and transport it to our bases.",
            icon: <Truck className="w-8 h-8 text-primary" />,
        },
        {
            title: "Packaging",
            description: "Carefully pack your order in ecological packaging.",
            icon: <Box className="w-8 h-8 text-primary" />,
        },
        {
            title: "Delivery",
            description: "We can drive any products within 2 hours in your hand.",
            icon: <Send className="w-8 h-8 text-primary" />,
        },
    ];

    return (
        <section className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
                        How We Work
                    </h2>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 top-8 h-full w-px bg-border -translate-x-1/2 hidden md:block"></div>
                     <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                 <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent border-2 border-primary/20 shrink-0">
                                    {step.icon}
                                </div>
                                <div className={`text-left ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                                    <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


function FreshDeliciousDelivered() {
  const chefImage = PlaceHolderImages.find(p => p.id === 'chef');

  return (
    <section className="w-full py-16 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
            <Card className="p-8 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-96 md:h-full">
                         {chefImage && <Image src={chefImage.imageUrl} alt="Chef" fill className="object-contain" data-ai-hint="chef mascot" />}
                    </div>
                    <div>
                        <h2 className="font-headline text-lg font-semibold">Savor the Flavor, Anytime, Anywhere</h2>
                        <h3 className="font-headline text-5xl font-extrabold tracking-tighter uppercase my-4 leading-none">
                            <span className="text-green-500">Fresh.</span> <span className="text-yellow-500">Delicious.</span> <span className="text-red-500">Delivered!</span>
                        </h3>
                        <p className="text-muted-foreground mb-6">
                            Welcome, your ultimate destination for mouthwatering meals and snacks delivered straight to your doorstep. We're passionate about bringing you the finest, freshest, and most delectable foods from around the globe. Whether you're craving pizzas, burgers, desserts, or healthy bites, we have something for everyone. With just a few clicks, you can explore, order, and enjoy the flavors you love, anytime, anywhere. Satisfy your hunger, hassle-free!
                        </p>
                        <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8">Explore More</Button>
                    </div>
                </div>
            </Card>
        </div>
    </section>
  )
}

export default function AboutPage() {
  const featuredDishes = dishes.slice(0, 8);

  return (
    <div className="flex flex-col">
        <section className="w-full py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center mb-8">
                    <ShoppingBag className="w-8 h-8 text-foreground mr-3" />
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Most Popular Dishes
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
                    {featuredDishes.map((dish) => (
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

        <FreshDeliciousDelivered />
        <HowItWorksSection />
    </div>
  );
}
