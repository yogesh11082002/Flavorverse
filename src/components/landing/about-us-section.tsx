// "use client";

// import { Card } from "@/components/ui/card";
// import { Settings } from "lucide-react";

// export function AboutUsSection() {
//     return (
//         <section className="container mx-auto px-4 lg:px-8 py-12">
//             <div className="flex items-center mb-8">
//                  <Settings className="text-foreground mr-3 h-8 w-8"/>
//                 <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
//                     Little Bite About Us
//                 </h2>
//             </div>
//             <Card className="p-8 bg-accent/50">
//                  <h3 className="font-headline text-2xl font-bold">Savor the Flavor, Anytime, Anywhere</h3>
//                 <p className="mt-4 text-muted-foreground max-w-4xl">
//                     Welcome to FlavorVerse, your ultimate destination for culinary inspiration and home-cooked delights! We believe that food is more than just sustenance; it's an experience, a memory, and a way to connect with others. Our platform is a celebration of the diverse and delicious world of homemade food, created by passionate cooks like you.
//                 </p>
//             </Card>
//         </section>
//     );
// }


// "use client";

// import { Card } from "@/components/ui/card";
// import { Settings } from "lucide-react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// export function AboutUsSection() {
//   const chefImageUrl =
//     "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80";

//   return (
//     <section className="container mx-auto px-4 lg:px-8 py-16">
//       {/* Heading above both cards */}
//       <div className="flex flex-col items-center mb-12">
//         <Settings className="text-green-500 h-10 w-10 animate-pulse mb-2" />
//         <h2 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center">
//           Little Bite About Us
//         </h2>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//         {/* Image Card */}
//         <motion.div
//           className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <Image
//             src={chefImageUrl}
//             alt="Chef preparing food"
//             fill
//             className="object-cover"
//           />
//         </motion.div>

//         {/* Text Card */}
//         <motion.div
//           className="flex flex-col justify-center h-300 lg:h-[500px]"
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//         >
//           <Card className="p-6 lg:p-8 bg-gradient-to-r from-green-50 to-green-100 shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center h-full">
//             <h3 className="font-headline text-2xl font-bold mb-4 text-gray-800">
//               Savor the Flavor, Anytime, Anywhere
//             </h3>
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               Welcome to <strong>FlavorVerse</strong>, your ultimate destination for culinary inspiration and home-cooked delights! We believe that food is more than just sustenance; it's an experience, a memory, and a way to connect with others.
//             </p>
//             <p className="text-gray-600 mb-4 leading-relaxed">
//               Our platform celebrates the diverse and delicious world of homemade food, created by passionate cooks just like you. From appetizers to desserts, every dish tells a story, and we make it easy to share and explore those stories.
//             </p>
//             <p className="text-gray-600 mb-6 leading-relaxed">
//               Join our community to discover recipes, connect with chefs, and enjoy meals that bring people together. Whether you’re a seasoned cook or just starting, FlavorVerse is your gateway to flavor, creativity, and joy!
//             </p>
//             <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-bold w-full lg:w-auto">
//               Explore More
//             </Button>
//           </Card>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

"use client";

import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutUsSection() {
  const chefImageUrl =
    "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80";

  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      {/* Heading above both cards */}
      <div className="flex flex-col items-center mb-12">
        <Settings className="text-green-500 h-10 w-10 animate-pulse mb-2" />
        <h2 className="font-headline text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 text-center">
          Little Bite About Us
        </h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Card */}
        <motion.div
          className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={chefImageUrl}
            alt="Chef preparing food"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Text Card */}
        <motion.div
          className="flex flex-col justify-center h-300 lg:h-[500px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-6 lg:p-8 bg-gradient-to-r from-green-50 to-green-100 shadow-lg rounded-2xl hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-center h-full">
            <h3 className="font-headline text-2xl font-bold mb-4 text-gray-800">
              Savor the Flavor, Anytime, Anywhere
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Welcome to <strong>FlavorVerse</strong>, your ultimate destination
              for culinary inspiration and home-cooked delights! We believe that
              food is more than just sustenance; it's an experience, a memory,
              and a way to connect with others.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Our platform celebrates the diverse and delicious world of
              homemade food, created by passionate cooks just like you. From
              appetizers to desserts, every dish tells a story, and we make it
              easy to share and explore those stories.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Join our community to discover recipes, connect with chefs, and
              enjoy meals that bring people together. Whether you’re a seasoned
              cook or just starting, FlavorVerse is your gateway to flavor,
              creativity, and joy!
            </p>
            <Link href="/feed">
              <Button
                size="lg"
                className="bg-green-500 hover:bg-green-600 text-white font-bold w-full lg:w-auto"
              >
                Explore More
              </Button>
            </Link>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
