
"use client";

import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import DishCard from "@/components/dish-card";
import type { Dish } from "@/lib/types";
import { dishes as staticDishes } from "@/lib/data";
import { Skeleton } from "@/components/ui/skeleton";

type Filter = "All" | "Trending" | "Latest" | "Popular";

export default function FeedPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<Filter>("All");
  
  // Use static data for now
  const dishes = staticDishes;
  const isLoading = false;

  const filteredDishes = useMemo(() => {
    if (!dishes) return [];
    
    let results = dishes;

    if (activeFilter !== "All") {
        results = results.filter(dish => dish.category === activeFilter);
    }
    
    if (searchTerm) {
      results = results.filter(dish => 
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return results;
  }, [searchTerm, dishes, activeFilter]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl text-center">
          Explore All Dishes
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Find your next favorite meal. Search for specific dishes or filter by category.
        </p>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            placeholder="Search by name or ingredient..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          {(["All", "Trending", "Latest", "Popular"] as Filter[]).map(filter => (
             <Button 
                key={filter} 
                variant={activeFilter === filter ? 'default' : 'outline'}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </Button>
          ))}
        </div>
      </div>
      
      {isLoading ? (
         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => <Skeleton key={i} className="h-80 w-full" />)}
        </div>
      ) : filteredDishes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <p className="text-xl font-semibold text-foreground">No dishes found</p>
          <p className="text-muted-foreground mt-2">Try adjusting your search or filter.</p>
        </div>
      )}
    </div>
  );
}
