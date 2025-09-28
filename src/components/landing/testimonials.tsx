"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Testimonials() {
  const bgImage = PlaceHolderImages.find(p => p.id === 'testimonial-bg');
  const authorImage = PlaceHolderImages.find(p => p.id === 'testimonial-author');
  
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="text-center">
        <Badge variant="outline" className="text-primary border-primary">Feedbacks</Badge>
        <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl mt-2">
          What Our Customers Says
        </h2>
      </div>
      <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
        <div className="relative rounded-lg overflow-hidden aspect-square lg:aspect-auto h-full min-h-[400px]">
          {bgImage && <Image src={bgImage.imageUrl} alt="Happy customers eating" fill className="object-cover" data-ai-hint={bgImage.imageHint} />}
        </div>
        <div className="bg-destructive/90 rounded-lg p-8 text-destructive-foreground relative">
          <span className="font-headline text-8xl text-white/20 absolute -top-4 left-4">“</span>
          <div className="relative bg-background text-foreground p-6 rounded-md shadow-lg">
            <h3 className="font-headline font-bold text-xl text-primary">Fantastic Experience!</h3>
            <p className="text-muted-foreground mt-2 text-sm">"This site has transformed the way I enjoy my meals. The convenience and quality are outstanding. Highly impressed!"</p>
            <div className="flex items-center mt-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
            </div>
            <div className="flex items-center gap-4 mt-6">
              {authorImage && (
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image src={authorImage.imageUrl} alt="Rohit Sharma" fill className="object-cover" data-ai-hint={authorImage.imageHint}/>
                </div>
              )}
              <div>
                <p className="font-semibold">Rohit Sharma</p>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white hover:bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"></button>
            <button className="w-3 h-3 rounded-full bg-white/50 hover:bg-white"></button>
          </div>
        </div>
      </div>
    </section>
  );
}
