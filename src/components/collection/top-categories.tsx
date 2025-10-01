// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { Card } from '@/components/ui/card';
// import { PlaceHolderImages } from '@/lib/placeholder-images';

// const categories = [
//     { name: 'Deserts', items: 7, imageId: 'cat-deserts', hint: 'dessert' },
//     { name: 'Cakes', items: 21, imageId: 'cat-cakes', hint: 'cake slice' },
//     { name: 'Brownies', items: 23, imageId: 'cat-brownies', hint: 'brownie' },
//     { name: 'Pizzas', items: 16, imageId: 'cat-pizzas', hint: 'pizza' },
//     { name: 'Burgers', items: 15, imageId: 'cat-burgers', hint: 'burger' },
//     { name: 'Drinks', items: 12, imageId: 'cat-drinks', hint: 'cocktail' },
//     { name: 'Wrap', items: 14, imageId: 'cat-wrap', hint: 'wrap sandwich' },
//     { name: 'Pasta', items: 17, imageId: 'cat-pasta', hint: 'pasta bowl' },
//     { name: 'Sandwich', items: 24, imageId: 'cat-sandwich', hint: 'sandwich' },
//     { name: 'Fruits', items: 30, imageId: 'cat-fruits', hint: 'fruit bowl' },
// ];

// export function TopCategories() {
//   return (
//     <div>
//         <div className="flex items-center gap-2 mb-6">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
//             <h2 className="font-headline text-3xl font-bold">Top Categories</h2>
//         </div>
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//             {categories.map(category => {
//                 const image = PlaceHolderImages.find(p => p.id === category.imageId);
//                 return (
//                     <Link href="/feed" key={category.name}>
//                         <Card className="p-3 flex flex-col items-center justify-center text-center hover:bg-accent transition-colors hover:shadow-lg">
//                             <div className="relative w-20 h-20 mb-2 rounded-full overflow-hidden border">
//                                 {image && (
//                                     <Image 
//                                         src={image.imageUrl} 
//                                         alt={category.name}
//                                         fill
//                                         className="object-cover"
//                                         data-ai-hint={category.hint}
//                                     />
//                                 )}
//                             </div>
//                             <h3 className="font-semibold text-sm">{category.name}</h3>
//                             <p className="text-xs text-muted-foreground">Items ({category.items})</p>
//                         </Card>
//                     </Link>
//                 )
//             })}
//         </div>
//     </div>
//   );
// }

// "use client";

// import Image from 'next/image';
// import Link from 'next/link';
// import { Card } from '@/components/ui/card';
// import { PlaceHolderImages } from '@/lib/placeholder-images';
// import { motion } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';

// const categories = [
//     { name: 'Deserts', items: 7, imageId: 'cat-deserts', hint: 'dessert' },
//     { name: 'Cakes', items: 21, imageId: 'cat-cakes', hint: 'cake slice' },
//     { name: 'Brownies', items: 23, imageId: 'cat-brownies', hint: 'brownie' },
//     { name: 'Pizzas', items: 16, imageId: 'cat-pizzas', hint: 'pizza' },
//     { name: 'Burgers', items: 15, imageId: 'cat-burgers', hint: 'burger' },
//     { name: 'Drinks', items: 12, imageId: 'cat-drinks', hint: 'cocktail' },
//     { name: 'Wrap', items: 14, imageId: 'cat-wrap', hint: 'wrap sandwich' },
//     { name: 'Pasta', items: 17, imageId: 'cat-pasta', hint: 'pasta bowl' },
//     { name: 'Sandwich', items: 24, imageId: 'cat-sandwich', hint: 'sandwich' },
//     { name: 'Fruits', items: 30, imageId: 'cat-fruits', hint: 'fruit bowl' },
// ];

// export function TopCategories() {
//   const cardsRef = useRef([]);

//   useEffect(() => {
//     // GSAP staggered entrance animation
//     gsap.from(cardsRef.current, {
//       opacity: 0,
//       y: 50,
//       scale: 0.8,
//       duration: 0.7,
//       stagger: 0.1,
//       ease: "power3.out"
//     });
//   }, []);

//   return (
//     <div>
//         <div className="flex items-center gap-2 mb-6">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
//             <h2 className="font-headline text-3xl font-bold">Top Categories</h2>
//         </div>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
//             {categories.map((category, index) => {
//                 const image = PlaceHolderImages.find(p => p.id === category.imageId);
//                 return (
//                     <motion.div
//                         key={category.name}
//                         ref={el => (cardsRef.current[index] = el)}
//                         whileHover={{ scale: 1.08, y: -5, boxShadow: "0px 15px 25px rgba(255, 184, 0, 0.4)" }}
//                         transition={{ type: "spring", stiffness: 150 }}
//                     >
//                         <Card className="p-4 flex flex-col items-center justify-center text-center bg-amber-400 rounded-xl cursor-pointer transition-all duration-300">
//                             <motion.div
//                                 whileHover={{ rotate: [0, 5, -5, 0], y: [0, -5, 0], transition: { duration: 0.6, repeat: Infinity } }}
//                                 className="relative w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-white/20"
//                             >
//                                 {image && (
//                                     <Image
//                                         src={image.imageUrl}
//                                         alt={category.name}
//                                         fill
//                                         className="object-cover"
//                                         data-ai-hint={category.hint}
//                                     />
//                                 )}
//                             </motion.div>
//                             <h3 className="font-semibold text-sm">{category.name}</h3>
//                             <p className="text-xs text-neutral-900">Items ({category.items})</p>
//                         </Card>
//                     </motion.div>
//                 )
//             })}
//         </div>
//     </div>
//   );
// }

"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { motion } from 'framer-motion';

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

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 150 } }
};

export function TopCategories() {
  return (
    <div>
      <div className="flex items-center gap-2 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
        </svg>
        <h2 className="font-headline text-3xl font-bold">Top Categories</h2>
      </div>

      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category) => {
          const image = PlaceHolderImages.find(p => p.id === category.imageId);
          return (
            <motion.div
              key={category.name}
              variants={cardVariants}
              whileHover={{ scale: 1.08, y: -5, boxShadow: "0px 15px 25px rgba(255, 184, 0, 0.4)" }}
              className="cursor-pointer"
            >
              <Card className="p-4 flex flex-col items-center justify-center text-center bg-amber-400 rounded-xl transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: [0, 5, -5, 0], y: [0, -5, 0], transition: { duration: 0.6, repeat: Infinity } }}
                  className="relative w-24 h-24 mb-3 rounded-full overflow-hidden border-2 border-white/20"
                >
                  {image && (
                    <Image
                      src={image.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover"
                      data-ai-hint={category.hint}
                    />
                  )}
                </motion.div>
                <h3 className="font-semibold text-sm">{category.name}</h3>
                <p className="text-xs text-neutral-900">Items ({category.items})</p>
              </Card>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  );
}
