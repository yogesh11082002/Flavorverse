"use client";

import { Card } from "@/components/ui/card";
import { Settings } from "lucide-react";

export function AboutUsSection() {
    return (
        <section className="container mx-auto px-4 lg:px-8 py-12">
            <div className="flex items-center mb-8">
                 <Settings className="text-foreground mr-3 h-8 w-8"/>
                <h2 className="font-headline text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                    Little Bite About Us
                </h2>
            </div>
            <Card className="p-8 bg-accent/50">
                 <h3 className="font-headline text-2xl font-bold">Savor the Flavor, Anytime, Anywhere</h3>
                <p className="mt-4 text-muted-foreground max-w-4xl">
                    Welcome to FlavorVerse, your ultimate destination for culinary inspiration and home-cooked delights! We believe that food is more than just sustenance; it's an experience, a memory, and a way to connect with others. Our platform is a celebration of the diverse and delicious world of homemade food, created by passionate cooks like you.
                </p>
            </Card>
        </section>
    );
}
