"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PromoBanner() {
    const promoImage = PlaceHolderImages.find(p => p.id === 'promo-banner');

    return (
        <Card className="relative rounded-lg overflow-hidden w-full h-full min-h-[500px]">
             {promoImage && <Image 
                src={promoImage.imageUrl} 
                alt="National Pizza Week" 
                fill 
                className="object-cover" 
                data-ai-hint="pizza ingredients"
             />}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white p-8">
                <h2 className="font-headline text-5xl font-bold uppercase leading-tight">National Pizza Week</h2>
                <p className="my-4 text-lg">Get 50% Off on Combo Product</p>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">SHOP NOW</Button>
            </div>
        </Card>
    );
}
