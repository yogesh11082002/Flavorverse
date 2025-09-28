// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { PlaceHolderImages } from "@/lib/placeholder-images";

// export function PromoBanner() {
//     const promoImage = PlaceHolderImages.find(p => p.id === 'promo-banner');

//     return (
//         <Card className="relative rounded-lg overflow-hidden w-full h-full min-h-[500px]">
//              {promoImage && <Image 
//                 src={promoImage.imageUrl} 
//                 alt="National Pizza Week" 
//                 fill 
//                 className="object-cover" 
//                 data-ai-hint="pizza ingredients"
//              />}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//             <div className="relative z-10 flex flex-col items-center justify-end h-full text-center text-white p-8">
//                 <h2 className="font-headline text-5xl font-bold uppercase leading-tight">National Pizza Week</h2>
//                 <p className="my-4 text-lg">Get 50% Off on Combo Product</p>
//                 <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">SHOP NOW</Button>
//             </div>
//         </Card>
//     );
// }


// "use client";

// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { PlaceHolderImages } from "@/lib/placeholder-images";

// export function PromoBanner() {
//     const promoImage = PlaceHolderImages.find(p => p.id === 'promo-banner');

//     return (
//         <section className="w-full mt-8 lg:mt-0">
            
//                 <Card className="relative rounded-3xl overflow-hidden flex-1 h-[400px] lg:h-auto lg:min-h-[1230px] shadow-xl">
//                     {promoImage ? (
//                         <Image
//                             src={promoImage.imageUrl}
//                             alt="National Pizza Week"
//                             fill
//                             className="object-cover"
//                             data-ai-hint="pizza ingredients"
//                         />
//                     ) : (
//                         <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
//                             Promo Image
//                         </div>
//                     )}

//                     {/* Gradient overlay */}
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

//                     {/* Content */}
//                     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-8">
//                         <h2 className="font-headline text-4xl md:text-5xl font-bold uppercase leading-tight">
//                             National Pizza Week
//                         </h2>
//                         <p className="my-4 text-lg md:text-xl">
//                             Get 50% Off on Combo Product
//                         </p>
//                         <Button
//                             size="lg"
//                             className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-3"
//                         >
//                             SHOP NOW
//                         </Button>
//                         <p className="mt-4 text-sm text-white/80">
//                             Limited time offer! Freshly baked pizzas, straight from the oven to your table.
//                         </p>
//                     </div>
//                 </Card>
            
//         </section>
//     );
// }

"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function PromoBanner() {
    const promoImage = PlaceHolderImages.find(p => p.id === 'promo-banner');

    return (
        <section className="w-full mt-8 lg:mt-0">
            <Card className="relative rounded-3xl overflow-hidden h-[400px] lg:h-[1230px] shadow-xl">
                {promoImage ? (
                    <Image
                        src={promoImage.imageUrl}
                        alt="National Pizza Week"
                        fill
                        className="object-cover"
                        data-ai-hint="pizza ingredients"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full bg-gray-200 text-gray-500">
                        Promo Image
                    </div>
                )}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* Centered Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 lg:px-12">
                    <h2 className="font-headline text-4xl md:text-5xl text-pink-500 font-extrabold uppercase leading-tight">
                        National Pizza Week
                    </h2>
                    <p className="mt-4 text-lg md:text-xl font-semibold">
                        Celebrate with our special offers and enjoy freshly baked pizzas at your doorstep!
                    </p>

                    <div className="mt-6 max-w-xl">
                        <p className="text-white/80 mb-4 text-sm md:text-base leading-relaxed">
                            Enjoy mouthwatering flavors from classic Margherita to loaded specials. 
                            Order now and get exclusive combo deals for a limited time. Perfect for family gatherings, parties, or a cozy night in. Fresh, hot, and irresistible!
                        </p>
                        <p className="text-white/80 mb-6 text-sm md:text-base leading-relaxed">
                            Don't miss out! Taste the best pizzas, crafted with love and the finest ingredients.
                        </p>
                    </div>

                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-10 py-3 mt-4"
                    >
                        SHOP NOW
                    </Button>
                </div>
            </Card>
        </section>
    );
}
