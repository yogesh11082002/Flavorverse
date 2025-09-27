"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const categories = [
    { name: 'Deserts', items: 7, imageId: 'cat-deserts', hint: 'dessert' },
    { name: 'Cakes', items: 21, imageId: 'cat-cakes', hint: 'cake slice' },
    { name: 'Brownies', items: 23, imageId: 'cat-brownies', hint: 'brownie' },
    { name: 'Pizzas', items: 16, imageId: 'cat-pizzas', hint: 'pizza' },
    { name: 'Burgers', items: 15, imageId: 'cat-burgers', hint: 'burger' },
    { name: 'Drinks', items: 12, imageId: 'cat-drinks', hint: 'cocktail' },
    { name: 'Wrap', items: 14, imageId: 'cat-wrap', hint: 'wrap sandwich' },
    { name: 'Pasta', items: 17, imageId: 'cat-pasta', hint: 'pasta bowl' },
    { name: 'Sandwich', items: 24, imageId: 'cat-sandwich', hint: 'sandwich' },
    { name: 'Fruits', items: 30, imageId: 'cat-fruits', hint: 'fruit bowl' },
];

export function TopCategories() {
  return (
    <div>
        <div className="flex items-center gap-2 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
            <h2 className="font-headline text-3xl font-bold">Top Categories</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {categories.map(category => {
                const image = PlaceHolderImages.find(p => p.id === category.imageId);
                return (
                    <Link href="/feed" key={category.name}>
                        <Card className="p-3 flex flex-col items-center justify-center text-center hover:bg-accent transition-colors hover:shadow-lg">
                            <div className="relative w-20 h-20 mb-2 rounded-full overflow-hidden border">
                                {image && (
                                    <Image 
                                        src={image.imageUrl} 
                                        alt={category.name}
                                        fill
                                        className="object-cover"
                                        data-ai-hint={category.hint}
                                    />
                                )}
                            </div>
                            <h3 className="font-semibold text-sm">{category.name}</h3>
                            <p className="text-xs text-muted-foreground">Items ({category.items})</p>
                        </Card>
                    </Link>
                )
            })}
        </div>
    </div>
  );
}
