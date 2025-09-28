// "use client";

// import { Star, ShoppingCart } from "lucide-react";
// import Image from "next/image";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { PlaceHolderImages } from "@/lib/placeholder-images";

// const products = [
//     {
//         id: "prod-1",
//         name: "Margarita Pizza",
//         image: PlaceHolderImages.find(p => p.id === 'collection-pizza'),
//         description: "Paneer, Mushroom, Sweet Corns, Mozzarilla, Kebab, Chicken Tikka, Chicken Salami, Onions &...",
//         price: "145.00",
//         rating: 5,
//         hint: "margarita pizza",
//     },
//     {
//         id: "prod-2",
//         name: "Special Sandwich",
//         image: PlaceHolderImages.find(p => p.id === 'collection-special-sandwich'),
//         description: "Onion, Capsicum, Jalapenos with Chicken Tikka, Onion Capsicum, Paneer, Mushroom, Sweet Corns,...",
//         price: "145.00",
//         rating: 5,
//         hint: "special sandwich"
//     },
//     {
//         id: "prod-3",
//         name: "Chicken Burger",
//         image: PlaceHolderImages.find(p => p.id === 'collection-burger'),
//         description: "Mushroom, Sweet Corns, Chicken Tikka, Paneer, Mozzarilla, Chicken Salami, Kebab, Onions &...",
//         price: "145.00",
//         rating: 5,
//         hint: "chicken burger"
//     },
//     {
//         id: "prod-4",
//         name: "Chicken Sandwich",
//         image: PlaceHolderImages.find(p => p.id === 'collection-chicken-sandwich'),
//         description: "Mushroom, Sweet Corns, Chicken Tikka, Paneer, Mozzarilla, Chicken Salami, Kebab, Onions &...",
//         price: "145.00",
//         rating: 5,
//         hint: "chicken sandwich"
//     }
// ];

// function ProductCard({ product }: { product: typeof products[0] }) {
//     return (
//         <Card className="flex items-center gap-4 p-4 overflow-hidden">
//             <div className="relative w-24 h-24 shrink-0">
//                 {product.image && (
//                     <Image 
//                         src={product.image.imageUrl} 
//                         alt={product.name} 
//                         fill 
//                         className="object-contain"
//                         data-ai-hint={product.hint}
//                     />
//                 )}
//             </div>
//             <div className="flex-grow">
//                 <h3 className="font-bold text-lg">{product.name}</h3>
//                 <div className="flex items-center my-1">
//                     {Array.from({ length: 5 }).map((_, i) => (
//                         <Star key={i} className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
//                     ))}
//                 </div>
//                 <p className="text-xs text-muted-foreground line-clamp-2">{product.description}</p>
//             </div>
//             <div className="flex flex-col items-end justify-between self-stretch shrink-0">
//                 <p className="font-bold text-lg">${product.price}</p>
//                 <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
//                     <ShoppingCart className="h-4 w-4 mr-2" />
//                     ADD TO CART
//                 </Button>
//             </div>
//         </Card>
//     );
// }


// export function NewProducts() {
//   return (
//     <div>
//         <div className="text-center mb-8">
//             <h3 className="text-muted-foreground font-semibold">Collection</h3>
//             <h2 className="font-headline text-4xl font-bold text-primary">New Products</h2>
//         </div>
//         <div className="grid grid-cols-1 gap-6">
//             {products.map(product => (
//                 <ProductCard key={product.id} product={product} />
//             ))}
//         </div>
//     </div>
//   );
// }


"use client";

import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const products = [
    {
        id: "prod-1",
        name: "Margarita Pizza",
        image: PlaceHolderImages.find(p => p.id === 'collection-pizza'),
        description: "Paneer, Mushroom, Sweet Corns, Mozzarilla, Kebab, Chicken Tikka, Chicken Salami, Onions &...",
        price: 145.00,
        rating: 5,
        hint: "margarita pizza",
    },
    {
        id: "prod-2",
        name: "Special Sandwich",
        image: PlaceHolderImages.find(p => p.id === 'collection-special-sandwich'),
        description: "Onion, Capsicum, Jalapenos with Chicken Tikka, Onion Capsicum, Paneer, Mushroom, Sweet Corns,...",
        price: 145.00,
        rating: 5,
        hint: "special sandwich"
    },
    {
        id: "prod-3",
        name: "Chicken Burger",
        image: PlaceHolderImages.find(p => p.id === 'collection-burger'),
        description: "Mushroom, Sweet Corns, Chicken Tikka, Paneer, Mozzarilla, Chicken Salami, Kebab, Onions &...",
        price: 145.00,
        rating: 5,
        hint: "chicken burger"
    },
    {
        id: "prod-4",
        name: "Chicken Sandwich",
        image: PlaceHolderImages.find(p => p.id === 'collection-chicken-sandwich'),
        description: "Mushroom, Sweet Corns, Chicken Tikka, Paneer, Mozzarilla, Chicken Salami, Kebab, Onions &...",
        price: 145.00,
        rating: 5,
        hint: "chicken sandwich"
    }
];

function ProductCard({ product }: { product: typeof products[0] }) {
    const { addToCart } = useCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        addToCart({ ...product, price: product.price });
        toast({
            title: "Added to Cart",
            description: `${product.name} has been added to your cart.`,
        });
    };

    return (
        <motion.div 
            whileHover={{ scale: 1.05 }} 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.3 }}
        >
            <Card className="bg-white shadow-xl rounded-3xl overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="relative w-full h-64">
                    {product.image ? (
                        <Image
                            src={product.image.imageUrl}
                            alt={product.name}
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
                            No Image
                        </div>
                    )}
                </div>
                <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                        <div className="flex items-center my-2">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Star 
                                    key={i} 
                                    className={`h-4 w-4 ${i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
                                />
                            ))}
                        </div>
                        <p className="text-gray-500 text-sm line-clamp-3">{product.description}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                        <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
                        <Button 
                            size="lg" 
                            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold flex items-center gap-2 px-5 py-3"
                            onClick={handleAddToCart}
                        >
                            <ShoppingCart className="h-5 w-5" />
                            Add to Cart
                        </Button>
                    </div>
                </div>
            </Card>
        </motion.div>
    );
}

export function NewProducts() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="text-center mb-12">
                    <h3 className="text-green-500 font-semibold tracking-wider">Collection</h3>
                    <h2 className="font-headline text-5xl font-extrabold text-gray-900 mt-2">New Arrivals</h2>
                    <p className="text-gray-500 mt-3 max-w-2xl mx-auto">Discover our latest delicious dishes curated to delight your taste buds. Fresh, hot, and ready to enjoy!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">
                    {products.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
}
