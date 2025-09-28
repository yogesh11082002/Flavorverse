"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function FreshDeliciousDelivered() {
  const chefImage = PlaceHolderImages.find(p => p.id === 'chef');

  return (
    <section className="w-full py-16 bg-accent/30">
        <div className="container mx-auto px-4 lg:px-8">
            <Card className="p-8 rounded-2xl shadow-lg overflow-hidden">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="relative h-96 md:h-full">
                         {chefImage && <Image src={chefImage.imageUrl} alt={chefImage.description} fill className="object-contain" data-ai-hint={chefImage.imageHint} />}
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
