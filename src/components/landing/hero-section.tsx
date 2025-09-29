
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { PlaceHolderImages }from "@/lib/placeholder-images";

// export function HeroSection() {
//   const heroBurgerImage = PlaceHolderImages.find(p => p.id === 'dish-1');
//   const doubleMeetBurger = PlaceHolderImages.find(p => p.id === 'dish-3');
//   const pizzaSlice = PlaceHolderImages.find(p => p.id === 'dish-8');

//   return (
//     <section className="container mx-auto px-4 lg:px-8 py-12">
//       <div className="grid lg:grid-cols-3 gap-6">
//         <div className="lg:col-span-2 relative bg-primary rounded-lg shadow-lg flex items-center overflow-hidden min-h-[300px] md:min-h-[400px]">
//           <div className="p-8 md:p-12 text-primary-foreground z-10 w-full lg:w-3/5">
//             <motion.p
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               className="font-body font-semibold text-lg"
//             >
//               Fast Food
//             </motion.p>
//            <motion.h1 
//   initial={{ opacity: 0, y: 20 }}
//   animate={{ opacity: 1, y: 0 }}
//   transition={{ duration: 0.5 }}
//   className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide leading-tight text-white uppercase"
// >
//   Fresh & Tasty
// </motion.h1>

//             <motion.p 
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               className="mt-4 text-lg text-primary-foreground/90"
//             >
//               Sale 20% every Monday
//             </motion.p>
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.6 }} 
//               className="mt-8"
//             >
//               <Button asChild size="lg" variant="destructive" className="font-bold text-lg px-8 py-6 rounded-md">
//                 <Link href="/feed">
//                   Shop Now
//                 </Link>
//               </Button>
//             </motion.div>
//           </div>
//           <motion.div 
//               initial={{ opacity: 0, scale: 0.8, x: '50%' }}
//               animate={{ opacity: 1, scale: 1, x: '40%' }}
//               transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
//               className="absolute right-0 top-0 h-full w-4/5 hidden lg:block">
//             {heroBurgerImage && (
//               <Image
//                 src={heroBurgerImage.imageUrl}
//                 alt="Tasty Burger"
//                 fill
//                 className="object-contain"
//                 data-ai-hint="burger tasty"
//               />
//             )}
//           </motion.div>
//         </div>
//         <div className="flex flex-col gap-6">
//             <Card className="relative overflow-hidden rounded-lg shadow-lg h-full min-h-[150px]">
//               {doubleMeetBurger && (
//                  <Image src={doubleMeetBurger.imageUrl} alt="Beef Burger" fill className="object-cover" data-ai-hint="beef burger"/>
//               )}
//               <div className="absolute inset-0 bg-black/40"/>
//               <div className="relative p-4 h-full flex flex-col justify-end text-white">
//                 <p className="text-xs font-semibold">DOUBLE MEET</p>
//                 <h3 className="font-headline text-2xl font-bold">Beef Burger</h3>
//                 <p className="text-2xl font-bold text-primary mt-2">$13.50</p>
//               </div>
//             </Card>
//              <Card className="relative overflow-hidden rounded-lg shadow-lg h-full min-h-[150px]">
//               {pizzaSlice && (
//                  <Image src={pizzaSlice.imageUrl} alt="Pizza" fill className="object-cover" data-ai-hint="pizza slice"/>
//               )}
//               <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"/>
//               <div className="relative p-4 h-full flex items-end">
//                 <h3 className="font-headline text-3xl font-bold text-white">Fresh, Delicious, Delivered!</h3>
//               </div>
//             </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { PlaceHolderImages } from "@/lib/placeholder-images";
// import { useEffect, useState } from "react";

// const heroSlides = [
//   {
//     id: "slide-1",
//     title: "Fresh & Tasty",
//     subtitle: "Fast Food",
//     description: "Sale 20% every Monday",
//     cta: "Shop Now",
//     href: "/feed",
//     image: PlaceHolderImages.find((p) => p.id === "dish-1")?.imageUrl,
//   },
//   {
//     id: "slide-2",
//     title: "Hot & Spicy",
//     subtitle: "Mexican Special",
//     description: "Buy 1 Get 1 Free Tacos",
//     cta: "Order Now",
//     href: "/feed",
//     image: PlaceHolderImages.find((p) => p.id === "dish-2")?.imageUrl,
//   },
//   {
//     id: "slide-3",
//     title: "Fresh Pizza",
//     subtitle: "Italian Taste",
//     description: "Flat 30% off on weekends",
//     cta: "Grab Deal",
//     href: "/feed",
//     image: PlaceHolderImages.find((p) => p.id === "dish-8")?.imageUrl,
//   },
// ];

// export function HeroSection() {
//   const doubleMeetBurger = PlaceHolderImages.find((p) => p.id === "dish-3");
//   const pizzaSlice = PlaceHolderImages.find((p) => p.id === "dish-8");

//   const [currentSlide, setCurrentSlide] = useState(0);

//   // Auto slide every 5s
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="container mx-auto px-4 lg:px-8 py-12">
//       <div className="grid lg:grid-cols-3 gap-6">
//         {/* LEFT BIG SLIDER */}
//         <div className="lg:col-span-2 relative rounded-lg shadow-lg overflow-hidden min-h-[300px] md:min-h-[400px] bg-black">
//           <AnimatePresence mode="wait">
//             {heroSlides.map(
//               (slide, index) =>
//                 index === currentSlide && (
//                   <motion.div
//                     key={slide.id}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.8 }}
//                     className="absolute inset-0 w-full h-full"
//                   >
//                     {slide.image && (
//                       <Image
//                         src={slide.image}
//                         alt={slide.title}
//                         fill
//                         className="object-cover"
//                         priority
//                       />
//                     )}
//                     <div className="absolute inset-0 bg-black/50" />
//                     <div className="relative z-10 p-8 md:p-12 text-white max-w-lg">
//                       <motion.p
//                         initial={{ opacity: 0, x: -20 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="font-body font-semibold text-lg"
//                       >
//                         {slide.subtitle}
//                       </motion.p>
//                       <motion.h1
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                         className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight"
//                       >
//                         {slide.title}
//                       </motion.h1>
//                       <motion.p
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                         className="mt-4 text-lg text-gray-200"
//                       >
//                         {slide.description}
//                       </motion.p>
//                       <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.6 }}
//                         className="mt-8"
//                       >
//                         <Button
//                           asChild
//                           size="lg"
//                           variant="destructive"
//                           className="font-bold text-lg px-8 py-6 rounded-md"
//                         >
//                           <Link href={slide.href}>{slide.cta}</Link>
//                         </Button>
//                       </motion.div>
//                     </div>
//                   </motion.div>
//                 )
//             )}
//           </AnimatePresence>

//           {/* SLIDER DOTS */}
//           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
//             {heroSlides.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrentSlide(index)}
//                 className={`h-3 w-3 rounded-full ${
//                   index === currentSlide ? "bg-white" : "bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT SMALL CARDS */}
//         <div className="flex flex-col gap-6">
//           <Card className="relative overflow-hidden rounded-lg shadow-lg h-full min-h-[150px]">
//             {doubleMeetBurger && (
//               <Image
//                 src={doubleMeetBurger.imageUrl}
//                 alt="Beef Burger"
//                 fill
//                 className="object-cover"
//               />
//             )}
//             <div className="absolute inset-0 bg-black/40" />
//             <div className="relative p-4 h-full flex flex-col justify-end text-white">
//               <p className="text-xs font-semibold">DOUBLE MEET</p>
//               <h3 className="font-headline text-2xl font-bold">Beef Burger</h3>
//               <p className="text-2xl font-bold text-primary mt-2">$13.50</p>
//             </div>
//           </Card>
//           <Card className="relative overflow-hidden rounded-lg shadow-lg h-full min-h-[150px]">
//             {pizzaSlice && (
//               <Image
//                 src={pizzaSlice.imageUrl}
//                 alt="Pizza"
//                 fill
//                 className="object-cover"
//               />
//             )}
//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
//             <div className="relative p-4 h-full flex items-end">
//               <h3 className="font-headline text-3xl font-bold text-white">
//                 Fresh, Delicious, Delivered!
//               </h3>
//             </div>
//           </Card>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useEffect, useState } from "react";

const heroSlides = [
  {
    id: "slide-1",
    title: "Fresh & Tasty",
    subtitle: "Fast Food",
    description: "Sale 20% every Monday",
    cta: "Shop Now",
    href: "/feed",
    image: PlaceHolderImages.find((p) => p.id === "dish-1")?.imageUrl,
  },
  {
    id: "slide-2",
    title: "Hot & Spicy",
    subtitle: "Mexican Special",
    description: "Buy 1 Get 1 Free Tacos",
    cta: "Order Now",
    href: "/feed",
    image: PlaceHolderImages.find((p) => p.id === "dish-2")?.imageUrl,
  },
  {
    id: "slide-3",
    title: "Fresh Pizza",
    subtitle: "Italian Taste",
    description: "Flat 30% off on weekends",
    cta: "Grab Deal",
    href: "/feed",
    image: PlaceHolderImages.find((p) => p.id === "dish-8")?.imageUrl,
  },
];

export function HeroSection() {
  const doubleMeetBurger = PlaceHolderImages.find((p) => p.id === "dish-3");
  const pizzaSlice = PlaceHolderImages.find((p) => p.id === "dish-8");

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT BIG SLIDER */}
        <div className="lg:col-span-2 relative rounded-lg shadow-lg overflow-hidden min-h-[300px] md:min-h-[400px]">
          <AnimatePresence initial={false}>
            {heroSlides.map(
              (slide, index) =>
                index === currentSlide && (
                  <motion.div
                    key={slide.id}
                    className="absolute inset-0 w-full h-full"
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    {slide.image && (
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    )}
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="relative z-10 p-8 md:p-12 text-white max-w-lg">
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="font-body font-semibold text-lg"
                      >
                        {slide.subtitle}
                      </motion.p>
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-tight"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-4 text-lg text-gray-200"
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8"
                      >
                        <Button
                          asChild
                          size="lg"
                          variant="destructive"
                          className="font-bold text-lg px-8 py-6 rounded-md"
                        >
                          <Link href={slide.href}>{slide.cta}</Link>
                        </Button>
                      </motion.div>
                    </div>
                  </motion.div>
                )
            )}
          </AnimatePresence>

          {/* SLIDER DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 w-3 rounded-full ${
                  index === currentSlide ? "bg-white" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT SMALL CARDS */}
        <div className="flex flex-col gap-6">
          <Card className="relative overflow-hidden rounded-lg shadow-lg h-full min-h-[150px]">
            {doubleMeetBurger && (
              <Image
                src={doubleMeetBurger.imageUrl}
                alt="Beef Burger"
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative p-4 h-full flex flex-col justify-end text-white">
              <p className="text-xs font-semibold">DOUBLE MEET</p>
              <h3 className="font-headline text-2xl font-bold">Beef Burger</h3>
              <p className="text-2xl font-bold text-primary mt-2">$13.50</p>
            </div>
          </Card>
          <Card className="relative overflow-hidden rounded-lg shadow-lg h-full min-h-[150px]">
            {pizzaSlice && (
              <Image
                src={pizzaSlice.imageUrl}
                alt="Pizza"
                fill
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
            <div className="relative p-4 h-full flex items-end">
              <h3 className="font-headline text-3xl font-bold text-white">
                Fresh, Delicious, Delivered!
              </h3>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
