"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PopularBrands() {
  const brands = [
    { name: 'Dominos', logo: PlaceHolderImages.find(p => p.id === 'brand-dominos') },
    { name: 'Pizza Hut', logo: PlaceHolderImages.find(p => p.id === 'brand-pizzahut') },
    { name: 'Fanta', logo: PlaceHolderImages.find(p => p.id === 'brand-fanta') },
    { name: 'Carls Jr', logo: PlaceHolderImages.find(p => p.id === 'brand-carlsjr') },
    { name: 'Folgers', logo: PlaceHolderImages.find(p => p.id === 'brand-folgers') },
    { name: 'Fritos', logo: PlaceHolderImages.find(p => p.id === 'brand-fritos') },
    { name: 'Hardees', logo: PlaceHolderImages.find(p => p.id === 'brand-hardees') },
   
  ];
  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4 lg:px-8">
         <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Popular Brands
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
          {brands.map(brand => (
            brand.logo && <div key={brand.name} className="p-4 bg-card rounded-lg shadow-md border hover:shadow-lg transition-shadow">
              <Image src={brand.logo.imageUrl} alt={brand.name} width={100} height={50} className="object-contain" data-ai-hint={`${brand.name} logo`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
