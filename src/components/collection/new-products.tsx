"use client";

import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const products = [
    {
        id: "prod-1",
        name: "Margarita Pizza",
        image: PlaceHolderImages.find(p => p.id === 'collection-pizza'),
        description: "Paneer, Mushroom, Sweet Corns, Mozzarilla, Kebab, Chicken Tikka, Chicken Salami, Onions &...",
        price: "145.00",
        rating: 5,
        hint: "margarita pizza",
    },
    {
        id: "prod-2",
        name: "Special Sandwich",
        image: PlaceHolderImages.find(p => p.id === 'collection-special-sandwich'),
        description: "Onion, Capsicum, Jalapenos with Chicken Tikka, Onion Capsicum, Paneer, Mushroom, Sweet Corns,...",
        price: "145.00",
        rating: 5,
        hint: "special sandwich"
    },
    {
        id: "prod-3",
        name: "Chicken Burger",
        image: PlaceHolderImages.find(p => p.id === 'collection-burger'),
        description: "Mushroom, Sweet Corns, Chicken Tikka, Paneer, Mozzarilla, Chicken Salami, Kebab, Onions &...",
        price: "145.00",
        rating: 5,
        hint: "chicken burger"
    },
    {
        id: "prod-4",
        name: "Chicken Sandwich",
        image: PlaceHolderImages.find(p => p.id === 'collection-chicken-sandwich'),
        description: "Mushroom, Sweet Corns, Chicken Tikka, Paneer, Mozzarilla, Chicken Salami, Kebab, Onions &...",
        price: "145.00",
        rating: 5,
        hint: "chicken sandwich"
    }
];

function ProductCard({ product }: { product: typeof products[0] }) {
    return (
        <Card className="flex items-center gap-4 p-4 overflow-hidden">
            <div className="relative w-24 h-24 shrink-0">
                {product.image && (
                    <Image 
                        src={product.image.imageUrl} 
                        alt={product.name} 
                        fill 
                        className="object-contain"
                        data-ai-hint={product.hint}
                    />
                )}
            </div>
            <div className="flex-grow">
                <h3 className="font-bold text-lg">{product.name}</h3>
                <div className="flex items-center my-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                    ))}
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
            </div>
            <div className="flex flex-col items-end justify-between self-stretch shrink-0">
                <p className="font-bold text-lg">${product.price}</p>
                <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    ADD TO CART
                </Button>
            </div>
        </Card>
    );
}


export function NewProducts() {
  return (
    <div>
        <div className="text-center mb-8">
            <h3 className="text-muted-foreground font-semibold">Collection</h3>
            <h2 className="font-headline text-4xl font-bold text-primary">New Products</h2>
        </div>
        <div className="grid grid-cols-1 gap-6">
            {products.map(product => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    </div>
  );
}
