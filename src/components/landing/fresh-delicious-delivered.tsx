// // "use client";

// // import Image from "next/image";
// // import { Card } from "@/components/ui/card";
// // import { Button } from "@/components/ui/button";
// // import { PlaceHolderImages } from "@/lib/placeholder-images";

// // export function FreshDeliciousDelivered() {
// //   const chefImage = PlaceHolderImages.find(p => p.id === 'chef');

// //   return (
// //     <section className="w-full py-16 bg-accent/30">
// //         <div className="container mx-auto px-4 lg:px-8">
// //             <Card className="p-8 rounded-2xl shadow-lg overflow-hidden">
// //                 <div className="grid md:grid-cols-2 gap-8 items-center">
// //                     <div className="relative h-96 md:h-full">
// //                          {chefImage && <Image src={chefImage.imageUrl} alt={chefImage.description} fill className="object-contain" data-ai-hint={chefImage.imageHint} />}
// //                     </div>
// //                     <div>
// //                         <h2 className="font-headline text-lg font-semibold">Savor the Flavor, Anytime, Anywhere</h2>
// //                         <h3 className="font-headline text-5xl font-extrabold tracking-tighter uppercase my-4 leading-none">
// //                             <span className="text-green-500">Fresh.</span> <span className="text-yellow-500">Delicious.</span> <span className="text-red-500">Delivered!</span>
// //                         </h3>
// //                         <p className="text-muted-foreground mb-6">
// //                             Welcome, your ultimate destination for mouthwatering meals and snacks delivered straight to your doorstep. We're passionate about bringing you the finest, freshest, and most delectable foods from around the globe. Whether you're craving pizzas, burgers, desserts, or healthy bites, we have something for everyone. With just a few clicks, you can explore, order, and enjoy the flavors you love, anytime, anywhere. Satisfy your hunger, hassle-free!
// //                         </p>
// //                         <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold px-8">Explore More</Button>
// //                     </div>
// //                 </div>
// //             </Card>
// //         </div>
// //     </section>
// //   )
// // }

// "use client";

// import Image from "next/image";
// import { Card } from "@/components/ui/card";
// import { Button } from "@/components/ui/button";

// export function FreshDeliciousDelivered() {
//   // Unsplash chef image
//   const chefImageUrl = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80";

//   return (
//     <section className="w-full py-20 bg-gradient-to-r from-green-50 via-yellow-50 to-red-50">
//       <div className="container mx-auto px-4 lg:px-8">
//         <Card className="p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden bg-white">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             {/* Image */}
//             <div className="relative h-96 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
//               <Image
//                 src={chefImageUrl}
//                 alt="Chef cooking delicious meals"
//                 fill
//                 className="object-cover transition-transform duration-500 hover:scale-105"
//               />
//             </div>

//             {/* Text Content */}
//             <div>
//               <h2 className="font-headline text-xl font-semibold text-gray-700">
//                 Savor the Flavor, Anytime, Anywhere
//               </h2>
//               <h3 className="font-headline text-5xl md:text-6xl font-extrabold  uppercase tracking-wide my-4 leading-tight">
//                 <span className="text-green-500">Fresh.</span>{" "}
//                 <span className="text-yellow-500">Delicious.</span>{" "}
//                 <span className="text-red-500">Delivered!</span>
//               </h3>
//               <p className="text-gray-600 mb-6 text-lg leading-relaxed">
//                 Welcome to your ultimate destination for mouthwatering meals and snacks delivered straight to your doorstep. We're passionate about bringing you the finest, freshest, and most delectable foods from around the globe. Craving pizzas, burgers, desserts, or healthy bites? We have it all. With just a few clicks, explore, order, and enjoy the flavors you love—anytime, anywhere. Satisfy your hunger, hassle-free!
//               </p>
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 shadow-lg transition-all"
//               >
//                 Explore More
//               </Button>
//             </div>
//           </div>
//         </Card>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function FreshDeliciousDelivered() {
  // Unsplash chef image
  const chefImageUrl = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80";

  return (
    <section className="w-full py-20 bg-gradient-to-r from-green-50 via-yellow-50 to-red-50">
      <div className="container mx-auto px-4 lg:px-8">
        <Card className="p-8 md:p-12 rounded-3xl shadow-2xl overflow-hidden bg-white">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Image */}
            <div className="relative h-96 md:h-[400px] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={chefImageUrl}
                alt="Chef cooking delicious meals"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Text Content */}
            <div>
              <h2 className="font-headline text-xl font-semibold text-gray-700">
                Savor the Flavor, Anytime, Anywhere
              </h2>
              <h3 className="font-headline text-5xl md:text-6xl font-extrabold uppercase tracking-wide my-4 leading-tight">
                <span className="text-green-500">Fresh.</span>{" "}
                <span className="text-yellow-500">Delicious.</span>{" "}
                <span className="text-red-500">Delivered!</span>
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Welcome to your ultimate destination for mouthwatering meals and snacks delivered straight to your doorstep. We're passionate about bringing you the finest, freshest, and most delectable foods from around the globe. Craving pizzas, burgers, desserts, or healthy bites? We have it all. With just a few clicks, explore, order, and enjoy the flavors you love—anytime, anywhere. Satisfy your hunger, hassle-free!
              </p>

              {/* Explore More Button with Link */}
              <Link href="/feed">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-8 py-4 shadow-lg transition-all"
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
