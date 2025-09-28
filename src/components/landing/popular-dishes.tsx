
"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import DishCard from "@/components/dish-card";
import { ShoppingBag } from "lucide-react";
import { useCollection, useFirestore, useMemoFirebase } from "@/firebase";
import type { Dish } from "@/lib/types";
import { collection, query, orderBy, limit } from "firebase/firestore";
import { Skeleton } from "../ui/skeleton";

export function PopularDishes() {
    const firestore = useFirestore();
    
    const dishesQuery = useMemoFirebase(() => {
        if (!firestore) return null;
        return query(collection(firestore, 'dishes'), orderBy("createdAt", "desc"), limit(8));
    }, [firestore]);

    const { data: featuredDishes, isLoading } = useCollection<Dish>(dishesQuery);

    return (
        <section className="w-full py-12">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center mb-8">
                    <ShoppingBag className="w-8 h-8 text-foreground mr-3" />
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Our Most Popular Dishes
                    </h2>
                </div>
                {isLoading ? (
                     <div className="flex -ml-2">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4 p-2">
                                <Skeleton className="h-80 w-full" />
                            </div>
                        ))}
                    </div>
                ) : featuredDishes && featuredDishes.length > 0 ? (
                    <Carousel
                    opts={{
                        align: "start",
                        loop: featuredDishes.length > 4,
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
                ) : (
                    <div className="text-center py-10 bg-muted rounded-lg">
                        <p className="text-lg font-semibold text-foreground">No dishes have been uploaded yet.</p>
                        <p className="text-muted-foreground mt-2">Be the first to share your creation!</p>
                    </div>
                )}
            </div>
        </section>
    );
}
