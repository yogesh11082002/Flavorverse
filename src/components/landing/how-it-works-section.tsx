"use client";

import { Sprout, Truck, Box, Send } from "lucide-react";

export function HowItWorksSection() {
    const steps = [
        {
            title: "Gathering",
            description: "Making Fresh and Tastiest From all over the World.",
            icon: <Sprout className="w-8 h-8 text-primary" />,
        },
        {
            title: "Transportation",
            description: "Select the best and transport it to our bases.",
            icon: <Truck className="w-8 h-8 text-primary" />,
        },
        {
            title: "Packaging",
            description: "Carefully pack your order in ecological packaging.",
            icon: <Box className="w-8 h-8 text-primary" />,
        },
        {
            title: "Delivery",
            description: "We can drive any products within 2 hours in your hand.",
            icon: <Send className="w-8 h-8 text-primary" />,
        },
    ];

    return (
        <section className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="flex items-center justify-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-center">
                        How We Work
                    </h2>
                </div>
                <div className="relative">
                    <div className="absolute left-1/2 top-8 h-full w-px bg-border -translate-x-1/2 hidden md:block"></div>
                     <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex items-start gap-6 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                                 <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-accent border-2 border-primary/20 shrink-0">
                                    {step.icon}
                                </div>
                                <div className={`text-left ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                                    <h3 className="text-xl font-bold font-headline">{step.title}</h3>
                                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
