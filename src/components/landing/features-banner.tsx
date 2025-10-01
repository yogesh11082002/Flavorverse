// "use client";

// import { Box, CreditCard, Headset, Truck } from "lucide-react";
// import { Card } from "../ui/card";

// const features = [
//   {
//     icon: <Truck className="w-8 h-8 text-primary" />,
//     title: "Free Shipping",
//     description: "Free Shipping On All IND",
//   },
//   {
//     icon: <Box className="w-8 h-8 text-primary" />,
//     title: "Money Returns",
//     description: "Return It Within 30 Days",
//   },
//   {
//     icon: <CreditCard className="w-8 h-8 text-primary" />,
//     title: "Secure Payments",
//     description: "We Ensure Secure Payment",
//   },
//   {
//     icon: <Headset className="w-8 h-8 text-primary" />,
//     title: "Support 24/7",
//     description: "Contact Us 24 Hours A Day",
//   },
// ];

// export function FeaturesBanner() {
//   return (
//     <section className="container mx-auto px-4 lg:px-8 py-12">
//         <Card className="bg-amber-100/50 border-amber-200/80 p-8 rounded-2xl">
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//                 {features.map((feature) => (
//                     <div key={feature.title} className="flex items-center gap-4">
//                         <div className="text-primary">{feature.icon}</div>
//                         <div>
//                             <h3 className="font-headline font-semibold text-lg text-foreground">{feature.title}</h3>
//                             <p className="text-sm text-muted-foreground">{feature.description}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </Card>
//     </section>
//   );
// }

"use client";

import { Box, CreditCard, Headset, Truck } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: <Truck className="w-10 h-10 text-white" />,
    title: "Free Shipping",
    description: "On all orders across India",
    bg: "from-yellow-400 to-yellow-300",
  },
  {
    icon: <Box className="w-10 h-10 text-white" />,
    title: "Money Returns",
    description: "Easy returns within 30 days",
    bg: "from-pink-400 to-pink-300",
  },
  {
    icon: <CreditCard className="w-10 h-10 text-white" />,
    title: "Secure Payments",
    description: "Safe & secure transactions",
    bg: "from-green-400 to-green-300",
  },
  {
    icon: <Headset className="w-10 h-10 text-white" />,
    title: "24/7 Support",
    description: "Always here to help you",
    bg: "from-purple-400 to-purple-300",
  },
];

export function FeaturesBanner() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              className={`p-8 rounded-3xl bg-gradient-to-tr ${feature.bg} shadow-2xl cursor-pointer transition-transform duration-300`}
            >
              <motion.div
                whileHover={{ y: -5, rotate: 10 }}
                className="flex items-center gap-4 mb-4"
              >
                <div className="flex-shrink-0">{feature.icon}</div>
                <h3 className="text-white font-bold text-lg">{feature.title}</h3>
              </motion.div>
              <p className="text-white/90 text-sm">{feature.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
