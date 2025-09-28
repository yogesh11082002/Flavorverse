
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CategoryGrid() {
    const categories = [
    { title: "Grilled Double Cheese Burger", image: PlaceHolderImages.find(p => p.id === 'dish-3'), color: 'from-purple-500 to-purple-700', hint: "cheese burger", href: "/dish/4" },
    { title: "Tasty Yummy Cheesy Pizza", image: PlaceHolderImages.find(p => p.id === 'dish-8'), color: 'from-yellow-400 to-yellow-600', hint: "cheese pizza", href: "/dish/1" },
    { title: "New Menu Galaxy Donuts Time!", image: PlaceHolderImages.find(p => p.id === 'dish-12'), color: 'from-pink-500 to-pink-700', hint: 'donuts', href: "/dish/12" },
    { title: "Fresh Delicious Veg Sandwich", image: PlaceHolderImages.find(p => p.id === 'dish-10'), color: 'from-green-400 to-green-600', hint: 'veg sandwich', href: "/dish/3" },
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
               <Link href={cat.href}>
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
