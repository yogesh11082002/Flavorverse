// "use client";

// import { Sprout, Truck, Box, Send } from "lucide-react";

// export function HowItWorksSection() {
//     const steps = [
//         {
//             title: "Gathering",
//             description: "Making Fresh and Tastiest From all over the World.",
//             icon: <Sprout className="w-8 h-8 text-primary" />,
//         },
//         {
//             title: "Transportation",
//             description: "Select the best and transport it to our bases.",
//             icon: <Truck className="w-8 h-8 text-primary" />,
//         },
//         {
//             title: "Packaging",
//             description: "Carefully pack your order in ecological packaging.",
//             icon: <Box className="w-8 h-8 text-primary" />,
//         },
//         {
//             title: "Delivery",
//             description: "We can drive any products within 2 hours in your hand.",
//             icon: <Send className="w-8 h-8 text-primary" />,
//         },
//     ];

//     return (
//         <section className="w-full py-16 bg-background">
//             <div className="container mx-auto px-4 lg:px-8">
//                 <div className="flex items-center justify-center mb-12">
//                     <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
//                         How We Work
//                     </h2>
//                 </div>
//                 <div className="relative">
//                     <div className="absolute left-1/2 top-8 h-full w-px bg-border -translate-x-1/2 hidden md:block"></div>
//                      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
//                         {steps.map((step, index) => (
//                             <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
//                                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent border-2 border-primary/20 shrink-0">
//                                     {step.icon}
//                                 </div>
//                                 <div className={`text-left ${index % 2 === 1 ? 'md:text-right' : ''}`}>
//                                     <h3 className="text-xl font-bold font-headline">{step.title}</h3>
//                                     <p className="mt-2 text-muted-foreground">{step.description}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import { Sprout, Truck, Box, Send } from "lucide-react";
import { motion } from "framer-motion";

export function HowItWorksSection() {
    const steps = [
        {
            title: "Gathering",
            description: "Making Fresh and Tastiest From all over the World.",
            icon: <Sprout className="w-8 h-8 text-white" />,
            bg: "bg-green-500",
        },
        {
            title: "Transportation",
            description: "Select the best and transport it to our bases.",
            icon: <Truck className="w-8 h-8 text-white" />,
            bg: "bg-blue-500",
        },
        {
            title: "Packaging",
            description: "Carefully pack your order in ecological packaging.",
            icon: <Box className="w-8 h-8 text-white" />,
            bg: "bg-yellow-500",
        },
        {
            title: "Delivery",
            description: "We can drive any products within 2 hours in your hand.",
            icon: <Send className="w-8 h-8 text-white" />,
            bg: "bg-red-500",
        },
    ];

    return (
        <section className="w-full py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Heading */}
                <div className="flex items-center justify-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-center text-gray-900"
                    >
                        How We Work
                    </motion.h2>
                </div>

                <div className="relative">
                    {/* Vertical timeline line */}
                    <div className="absolute left-1/2 top-8 h-full w-px bg-gray-300 -translate-x-1/2 hidden md:block"></div>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                                className={`flex items-start gap-6 md:items-center ${
                                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                                }`}
                            >
                                {/* Icon circle */}
                                <div
                                    className={`relative z-10 flex h-16 w-16 items-center justify-center rounded-full ${step.bg} border-2 border-white shadow-lg flex-shrink-0 transition-transform duration-300 hover:scale-110`}
                                >
                                    {step.icon}
                                </div>

                                {/* Text */}
                                <div className={`text-left md:max-w-[300px] ${index % 2 === 1 ? "md:text-right" : ""}`}>
                                    <h3 className="text-xl font-bold font-headline mb-1">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
