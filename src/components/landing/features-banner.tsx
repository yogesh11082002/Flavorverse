"use client";

import { Box, CreditCard, Headset, Truck } from "lucide-react";
import { Card } from "../ui/card";

const features = [
  {
    icon: <Truck className="w-8 h-8 text-primary" />,
    title: "Free Shipping",
    description: "Free Shipping On All IND",
  },
  {
    icon: <Box className="w-8 h-8 text-primary" />,
    title: "Money Returns",
    description: "Return It Within 30 Days",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-primary" />,
    title: "Secure Payments",
    description: "We Ensure Secure Payment",
  },
  {
    icon: <Headset className="w-8 h-8 text-primary" />,
    title: "Support 24/7",
    description: "Contact Us 24 Hours A Day",
  },
];

export function FeaturesBanner() {
  return (
    <section className="container mx-auto px-4 lg:px-8 py-12">
        <Card className="bg-amber-100/50 border-amber-200/80 p-8 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature) => (
                    <div key={feature.title} className="flex items-center gap-4">
                        <div className="text-primary">{feature.icon}</div>
                        <div>
                            <h3 className="font-headline font-semibold text-lg text-foreground">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Card>
    </section>
  );
}
