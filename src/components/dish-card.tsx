
// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Heart } from "lucide-react";
// import type { Dish } from "@/lib/types";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { useCart } from "@/context/cart-context";
// import { useToast } from "@/hooks/use-toast";
// import { useUser } from "@/firebase";
// import { useRouter } from "next/navigation";
// import React from "react";

// type DishCardProps = {
//   dish: Dish;
// };

// export default function DishCard({ dish }: DishCardProps) {
//   const { addToCart } = useCart();
//   const { toast } = useToast();
//   const { user } = useUser();
//   const router = useRouter();

//   const likesCount = dish.likesCount ?? 0;
//   const price = dish.price ?? 0;
//   const discount = dish.discount ?? 0;

//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;
  
//   const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault(); // Stop the link from navigating
//     e.stopPropagation(); // Stop the event from bubbling up to the link

//     if (!user) {
//         toast({
//             title: "Please log in",
//             description: "You need to be logged in to add items to your cart.",
//             variant: "destructive",
//         });
//         router.push("/login");
//         return;
//     }
//     // We pass the final price to the cart.
//     addToCart({ ...dish, price: discountedPrice });
//     toast({
//       title: "Added to Cart",
//       description: `${dish.name} has been added to your cart.`,
//     });
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="h-full"
//     >
//       <Link href={`/dish/${dish.id}`} className="block h-full group">
//         <Card className="overflow-hidden h-full flex flex-col border group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl">
//           <div className="block relative aspect-video overflow-hidden">
//             <Image
//                 src={dish.image.imageUrl}
//                 alt={dish.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 data-ai-hint={dish.image.imageHint}
//             />
//              <div className="absolute top-2 right-2 flex items-center gap-1">
//                 {dish.category === 'Popular' && <Badge variant="destructive">HOT</Badge>}
//                 {discount > 0 && <Badge variant="secondary">{discount}% OFF</Badge>}
//                 <Badge variant="outline" className="bg-background/80 backdrop-blur-sm flex items-center">
//                     <Heart className="h-3 w-3 fill-red-500 text-red-500 mr-1" />
//                     <span className="font-bold">{likesCount}</span>
//                 </Badge>
//             </div>
//           </div>
//           <CardContent className="p-3 flex-grow flex flex-col">
//             <h3 className="font-bold leading-tight text-md group-hover:text-primary transition-colors">
//               {dish.name}
//             </h3>
//             <p className="text-muted-foreground text-xs line-clamp-2 mt-1 mb-2 flex-grow">{dish.description}</p>
//             <div className="flex justify-between items-end mt-auto">
//               <div className="flex items-baseline gap-2">
//                   <div className="font-headline text-lg font-bold text-foreground">
//                       ${discountedPrice.toFixed(2)}
//                   </div>
//                   {discount > 0 && (
//                     <div className="text-sm text-muted-foreground line-through">
//                         ${price.toFixed(2)}
//                     </div>
//                   )}
//               </div>
//               <Button size="sm" className="font-bold rounded-md text-lg w-10 h-10 p-0" onClick={handleAddToCart}>+</Button>
//             </div>
//           </CardContent>
//         </Card>
//       </Link>
//     </motion.div>
//   );
// }


// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Heart } from "lucide-react";
// import type { Dish } from "@/lib/types";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { useCart } from "@/context/cart-context";
// import { useToast } from "@/hooks/use-toast";
// import { useUser } from "@/firebase";
// import { useRouter } from "next/navigation";
// import React from "react";

// type DishCardProps = {
//   dish: Dish;
// };

// export default function DishCard({ dish }: DishCardProps) {
//   const { addToCart } = useCart();
//   const { toast } = useToast();
//   const { user } = useUser();
//   const router = useRouter();

//   const likesCount = dish.likesCount ?? 0;
//   const price = dish.price ?? 0;
//   const discount = dish.discount ?? 0;

//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!user) {
//       toast({
//         title: "Please log in",
//         description: "You need to be logged in to add items to your cart.",
//         variant: "destructive",
//       });
//       router.push("/login");
//       return;
//     }

//     addToCart({ ...dish, price: discountedPrice });
//     toast({
//       title: "Added to Cart",
//       description: `${dish.name} has been added to your cart.`,
//     });
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="h-full"
//     >
//       <Link href={`/dish/${dish.id}`} className="block h-full group">
//         <Card className="overflow-hidden h-full flex flex-col border group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl rounded-xl">
//           {/* IMAGE */}
//           <div className="block relative h-56 w-full overflow-hidden">
//             {dish.image?.imageUrl || dish.imageUrl ? (
//               <Image
//                 src={dish.image?.imageUrl ?? dish.imageUrl}
//                 alt={dish.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 data-ai-hint={dish.image?.imageHint ?? dish.name}
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
//                 No Image
//               </div>
//             )}

//             {/* BADGES */}
//             <div className="absolute top-2 right-2 flex flex-wrap gap-1">
//               {dish.category === "Popular" && (
//                 <Badge variant="destructive">HOT</Badge>
//               )}
//               {discount > 0 && (
//                 <Badge variant="secondary">{discount}% OFF</Badge>
//               )}
//               <Badge
//                 variant="outline"
//                 className="bg-background/80 backdrop-blur-sm flex items-center"
//               >
//                 <Heart className="h-3 w-3 fill-red-500 text-red-500 mr-1" />
//                 <span className="font-bold">{likesCount}</span>
//               </Badge>
//             </div>
//           </div>

//           {/* CONTENT */}
//           <CardContent className="p-4 flex-grow flex flex-col">
//             <h3 className="font-bold leading-tight text-lg group-hover:text-primary transition-colors">
//               {dish.name}
//             </h3>
//             <p className="text-muted-foreground text-sm line-clamp-2 mt-2 mb-3 flex-grow">
//               {dish.description}
//             </p>
//             <div className="flex justify-between items-end mt-auto">
//               <div className="flex items-baseline gap-2">
//                 <div className="font-headline text-xl font-bold text-foreground">
//                   ${discountedPrice.toFixed(2)}
//                 </div>
//                 {discount > 0 && (
//                   <div className="text-sm text-muted-foreground line-through">
//                     ${price.toFixed(2)}
//                   </div>
//                 )}
//               </div>
//               <Button
//                 size="sm"
//                 className="font-bold rounded-md text-lg w-10 h-10 p-0"
//                 onClick={handleAddToCart}
//               >
//                 +
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </Link>
//     </motion.div>
//   );
// }

// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Heart, Edit, Trash2 } from "lucide-react";
// import type { Dish } from "@/lib/types";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { useCart } from "@/context/cart-context";
// import { useToast } from "@/hooks/use-toast";
// import { useUser } from "@/firebase";
// import { useRouter } from "next/navigation";
// import React from "react";
// import axios from "axios";

// type DishCardProps = {
//   dish: Dish;
// };

// export default function DishCard({ dish }: DishCardProps) {
//   const { addToCart } = useCart();
//   const { toast } = useToast();
//   const { user } = useUser();
//   const router = useRouter();

//   const likesCount = dish.likesCount ?? 0;
//   const price = dish.price ?? 0;
//   const discount = dish.discount ?? 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!user) {
//       toast({
//         title: "Please log in",
//         description: "You need to be logged in to add items to your cart.",
//         variant: "destructive",
//       });
//       router.push("/login");
//       return;
//     }

//     addToCart({ ...dish, price: discountedPrice });
//     toast({
//       title: "Added to Cart",
//       description: `${dish.name} has been added to your cart.`,
//     });
//   };

//   const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!confirm("Are you sure you want to delete this dish?")) return;

//     try {
//       await axios.delete(`/api/dishes/${dish.id}`);
//       toast({
//         title: "Deleted",
//         description: `${dish.name} has been deleted.`,
//       });
//       router.refresh(); // Refresh page to remove dish
//     } catch (err) {
//       toast({
//         title: "Error",
//         description: "Failed to delete dish.",
//         variant: "destructive",
//       });
//     }
//   };

//   const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     router.push(`/dish/edit/${dish.id}`);
//   };

//   // Check if logged-in user is the owner of this dish
//   const isOwner = user?.uid === dish.userId;

//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="h-full"
//     >
//       <Link href={`/dish/${dish.id}`} className="block h-full group">
//         <Card className="overflow-hidden h-full flex flex-col border group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl rounded-xl relative">
//           {/* IMAGE */}
//           <div className="block relative h-56 w-full overflow-hidden">
//             {dish.image?.imageUrl || dish.imageUrl ? (
//               <Image
//                 src={dish.image?.imageUrl ?? dish.imageUrl}
//                 alt={dish.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 data-ai-hint={dish.image?.imageHint ?? dish.name}
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
//                 No Image
//               </div>
//             )}

//             {/* BADGES */}
//             <div className="absolute top-2 right-2 flex flex-wrap gap-1 z-20">
//               {dish.category === "Popular" && (
//                 <Badge variant="destructive">HOT</Badge>
//               )}
//               {discount > 0 && (
//                 <Badge variant="secondary">{discount}% OFF</Badge>
//               )}
//               <Badge
//                 variant="outline"
//                 className="bg-background/80 backdrop-blur-sm flex items-center"
//               >
//                 <Heart className="h-3 w-3 fill-red-500 text-red-500 mr-1" />
//                 <span className="font-bold">{likesCount}</span>
//               </Badge>
//             </div>

//             {/* OWNER ACTIONS */}
//             {isOwner && (
//               <div className="absolute top-2 left-2 flex gap-2 z-20">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="p-1 rounded-md hover:bg-indigo-50"
//                   onClick={handleEdit}
//                 >
//                   <Edit className="h-4 w-4" />
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   className="p-1 rounded-md hover:bg-red-100"
//                   onClick={handleDelete}
//                 >
//                   <Trash2 className="h-4 w-4" />
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <CardContent className="p-4 flex-grow flex flex-col">
//             <h3 className="font-bold leading-tight text-lg group-hover:text-primary transition-colors">
//               {dish.name}
//             </h3>
//             <p className="text-muted-foreground text-sm line-clamp-2 mt-2 mb-3 flex-grow">
//               {dish.description}
//             </p>
//             <div className="flex justify-between items-end mt-auto">
//               <div className="flex items-baseline gap-2">
//                 <div className="font-headline text-xl font-bold text-foreground">
//                   ${discountedPrice.toFixed(2)}
//                 </div>
//                 {discount > 0 && (
//                   <div className="text-sm text-muted-foreground line-through">
//                     ${price.toFixed(2)}
//                   </div>
//                 )}
//               </div>
//               <Button
//                 size="sm"
//                 className="font-bold rounded-md text-lg w-10 h-10 p-0"
//                 onClick={handleAddToCart}
//               >
//                 +
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </Link>
//     </motion.div>
//   );
// }

// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Heart, Edit, Trash2 } from "lucide-react";
// import type { Dish } from "@/lib/types";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { useCart } from "@/context/cart-context";
// import { useToast } from "@/hooks/use-toast";
// import { useUser, initializeFirebase } from "@/firebase";
// import { useRouter } from "next/navigation";
// import { doc, deleteDoc } from "firebase/firestore";
// import React from "react";

// type DishCardProps = {
//   dish: Dish;
// };

// export default function DishCard({ dish }: DishCardProps) {
//   const { firestore } = initializeFirebase(); // get Firestore instance
//   const { addToCart } = useCart();
//   const { toast } = useToast();
//   const { user } = useUser();
//   const router = useRouter();

//   const likesCount = dish.likesCount ?? 0;
//   const price = dish.price ?? 0;
//   const discount = dish.discount ?? 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   const isOwner = user?.uid === dish.userId;

//   const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!user) {
//       toast({
//         title: "Please log in",
//         description: "You need to be logged in to add items to your cart.",
//         variant: "destructive",
//       });
//       router.push("/login");
//       return;
//     }

//     addToCart({ ...dish, price: discountedPrice });
//     toast({
//       title: "Added to Cart",
//       description: `${dish.name} has been added to your cart.`,
//     });
//   };

//   const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();
//     router.push(`/dish/edit/${dish.id}`);
//   };

//   const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!isOwner) {
//       toast({
//         title: "Not allowed",
//         description: "You can only delete your own dishes.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!confirm("Are you sure you want to delete this dish?")) return;

//     try {
//       const dishRef = doc(firestore, "dishes", dish.id);
//       await deleteDoc(dishRef);

//       toast({
//         title: "Deleted",
//         description: `${dish.name} has been deleted.`,
//       });

//       router.refresh(); // Refresh page to remove deleted dish
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error",
//         description: "Failed to delete dish.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="h-full"
//     >
//       <Link href={`/dish/${dish.id}`} className="block h-full group">
//         <Card className="overflow-hidden h-full flex flex-col border group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl rounded-xl relative">
//           {/* IMAGE */}
//           <div className="block relative h-56 w-full overflow-hidden">
//             {dish.image?.imageUrl || dish.imageUrl ? (
//               <Image
//                 src={dish.image?.imageUrl ?? dish.imageUrl}
//                 alt={dish.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 data-ai-hint={dish.image?.imageHint ?? dish.name}
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
//                 No Image
//               </div>
//             )}

//             {/* BADGES */}
//             <div className="absolute top-2 right-2 flex flex-wrap gap-1 z-20">
//               {dish.category === "Popular" && <Badge variant="destructive">HOT</Badge>}
//               {discount > 0 && <Badge variant="secondary">{discount}% OFF</Badge>}
//               <Badge
//                 variant="outline"
//                 className="bg-background/80 backdrop-blur-sm flex items-center"
//               >
//                 <Heart className="h-3 w-3 fill-red-500 text-red-500 mr-1" />
//                 <span className="font-bold">{likesCount}</span>
//               </Badge>
//             </div>

//             {/* OWNER ACTIONS */}
//             {isOwner && (
//               <div className="absolute top-2 left-2 flex gap-2 z-20">
//                 <Button
//                   size="sm"
//                   variant="outline"
//                   className="p-1 rounded-md hover:bg-indigo-50"
//                   onClick={handleEdit}
//                 >
//                   <Edit className="h-4 w-4" />
//                 </Button>
//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   className="p-1 rounded-md hover:bg-red-100"
//                   onClick={handleDelete}
//                 >
//                   <Trash2 className="h-4 w-4" />
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <CardContent className="p-4 flex-grow flex flex-col">
//             <h3 className="font-bold leading-tight text-lg group-hover:text-primary transition-colors">
//               {dish.name}
//             </h3>
//             <p className="text-muted-foreground text-sm line-clamp-2 mt-2 mb-3 flex-grow">
//               {dish.description}
//             </p>
//             <div className="flex justify-between items-end mt-auto">
//               <div className="flex items-baseline gap-2">
//                 <div className="font-headline text-xl font-bold text-foreground">
//                   ${discountedPrice.toFixed(2)}
//                 </div>
//                 {discount > 0 && (
//                   <div className="text-sm text-muted-foreground line-through">
//                     ${price.toFixed(2)}
//                   </div>
//                 )}
//               </div>
//               <Button
//                 size="sm"
//                 className="font-bold rounded-md text-lg w-10 h-10 p-0"
//                 onClick={handleAddToCart}
//               >
//                 +
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </Link>
//     </motion.div>
//   );
// }

// 'use client';

// import Image from "next/image";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { Heart, Trash2 } from "lucide-react";
// import type { Dish } from "@/lib/types";
// import { Card, CardContent } from "@/components/ui/card";
// import { Button } from "./ui/button";
// import { Badge } from "./ui/badge";
// import { useCart } from "@/context/cart-context";
// import { useToast } from "@/hooks/use-toast";
// import { useUser, initializeFirebase } from "@/firebase";
// import { useRouter } from "next/navigation";
// import { doc, deleteDoc } from "firebase/firestore";
// import React from "react";

// type DishCardProps = {
//   dish: Dish;
// };

// export default function DishCard({ dish }: DishCardProps) {
//   const { firestore } = initializeFirebase(); // get Firestore instance
//   const { addToCart } = useCart();
//   const { toast } = useToast();
//   const { user } = useUser();
//   const router = useRouter();

//   const likesCount = dish.likesCount ?? 0;
//   const price = dish.price ?? 0;
//   const discount = dish.discount ?? 0;
//   const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

//   const isOwner = user?.uid === dish.userId;

//   const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!user) {
//       toast({
//         title: "Please log in",
//         description: "You need to be logged in to add items to your cart.",
//         variant: "destructive",
//       });
//       router.push("/login");
//       return;
//     }

//     addToCart({ ...dish, price: discountedPrice });
//     toast({
//       title: "Added to Cart",
//       description: `${dish.name} has been added to your cart.`,
//     });
//   };

//   const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!isOwner) {
//       toast({
//         title: "Not allowed",
//         description: "You can only delete your own dishes.",
//         variant: "destructive",
//       });
//       return;
//     }

//     if (!confirm("Are you sure you want to delete this dish?")) return;

//     try {
//       const dishRef = doc(firestore, "dishes", dish.id);
//       await deleteDoc(dishRef);

//       toast({
//         title: "Deleted",
//         description: `${dish.name} has been deleted.`,
//       });

//       router.refresh(); // Refresh page to remove deleted dish
//     } catch (err) {
//       console.error(err);
//       toast({
//         title: "Error",
//         description: "Failed to delete dish.",
//         variant: "destructive",
//       });
//     }
//   };

//   return (
//     <motion.div
//       whileHover={{ y: -5, scale: 1.03 }}
//       transition={{ type: "spring", stiffness: 300, damping: 20 }}
//       className="h-full"
//     >
//       <Link href={`/dish/${dish.id}`} className="block h-full group">
//         <Card className="overflow-hidden h-full flex flex-col border group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl rounded-xl relative">
//           {/* IMAGE */}
//           <div className="block relative h-56 w-full overflow-hidden">
//             {dish.image?.imageUrl || dish.imageUrl ? (
//               <Image
//                 src={dish.image?.imageUrl ?? dish.imageUrl}
//                 alt={dish.name}
//                 fill
//                 className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 data-ai-hint={dish.image?.imageHint ?? dish.name}
//               />
//             ) : (
//               <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
//                 No Image
//               </div>
//             )}

//             {/* BADGES */}
//             <div className="absolute top-2 right-2 flex flex-wrap gap-1 z-20">
//               {dish.category === "Popular" && <Badge variant="destructive">HOT</Badge>}
//               {discount > 0 && <Badge variant="secondary">{discount}% OFF</Badge>}
//               <Badge
//                 variant="outline"
//                 className="bg-background/80 backdrop-blur-sm flex items-center"
//               >
//                 <Heart className="h-3 w-3 fill-red-500 text-red-500 mr-1" />
//                 <span className="font-bold">{likesCount}</span>
//               </Badge>
//             </div>

//             {/* OWNER ACTIONS - ONLY DELETE */}
//             {isOwner && (
//               <div className="absolute top-2 left-2 flex gap-2 z-20">
//                 <Button
//                   size="sm"
//                   variant="destructive"
//                   className="p-1 rounded-md hover:bg-red-100"
//                   onClick={handleDelete}
//                 >
//                   <Trash2 className="h-4 w-4" />
//                 </Button>
//               </div>
//             )}
//           </div>

//           {/* CONTENT */}
//           <CardContent className="p-4 flex-grow flex flex-col">
//             <h3 className="font-bold leading-tight text-lg group-hover:text-primary transition-colors">
//               {dish.name}
//             </h3>
//             <p className="text-muted-foreground text-sm line-clamp-2 mt-2 mb-3 flex-grow">
//               {dish.description}
//             </p>
//             <div className="flex justify-between items-end mt-auto">
//               <div className="flex items-baseline gap-2">
//                 <div className="font-headline text-xl font-bold text-foreground">
//                   ${discountedPrice.toFixed(2)}
//                 </div>
//                 {discount > 0 && (
//                   <div className="text-sm text-muted-foreground line-through">
//                     ${price.toFixed(2)}
//                   </div>
//                 )}
//               </div>
//               <Button
//                 size="sm"
//                 className="font-bold rounded-md text-lg w-10 h-10 p-0"
//                 onClick={handleAddToCart}
//               >
//                 +
//               </Button>
//             </div>
//           </CardContent>
//         </Card>
//       </Link>
//     </motion.div>
//   );
// }

'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Trash2 } from "lucide-react";
import type { Dish } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import { useUser, initializeFirebase } from "@/firebase";
import { useRouter } from "next/navigation";
import { doc, deleteDoc } from "firebase/firestore";
import React from "react";

type DishCardProps = {
  dish: Dish;
};

export default function DishCard({ dish }: DishCardProps) {
  const { firestore } = initializeFirebase();
  const { addToCart } = useCart();
  const { toast } = useToast();
  const { user } = useUser();
  const router = useRouter();

  const likesCount = dish.likesCount ?? 0;
  const price = dish.price ?? 0;
  const discount = dish.discount ?? 0;
  const discountedPrice = discount > 0 ? price * (1 - discount / 100) : price;

  const isOwner = user?.uid === dish.userId;

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      toast({
        title: "Please log in",
        description: "You need to be logged in to add items to your cart.",
        variant: "destructive",
      });
      router.push("/login");
      return;
    }

    addToCart({ ...dish, price: discountedPrice });
    toast({
      title: "Added to Cart",
      description: `${dish.name} has been added to your cart.`,
    });
  };

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();

    if (!isOwner) {
      toast({
        title: "Not allowed",
        description: "You can only delete your own dishes.",
        variant: "destructive",
      });
      return;
    }

    if (!confirm("Are you sure you want to delete this dish?")) return;

    try {
      const dishRef = doc(firestore, "dishes", dish.id);
      await deleteDoc(dishRef);

      toast({
        title: "Deleted",
        description: `${dish.name} has been deleted.`,
      });

      router.refresh();
    } catch (err) {
      console.error(err);
      toast({
        title: "Error",
        description: "Failed to delete dish.",
        variant: "destructive",
      });
    }
  };

  // Determine image URL
  const imageSrc =
    (dish.image && "imageUrl" in dish.image ? dish.image.imageUrl : null) ||
    dish.imageUrl ||
    `https://source.unsplash.com/800x600/?${encodeURIComponent(dish.name)}&sig=${Math.random()}`;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Link href={`/dish/${dish.id}`} className="block h-full group">
        <Card className="overflow-hidden h-full flex flex-col border group-hover:border-primary transition-all duration-300 shadow-sm hover:shadow-xl rounded-xl relative">
          
          {/* IMAGE */}
          <div className="block relative h-56 w-full overflow-hidden">
            {imageSrc ? (
              <Image
                src={imageSrc}
                alt={dish.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            ) : (
              <div className="flex items-center justify-center h-full bg-muted text-muted-foreground">
                No Image
              </div>
            )}

            {/* BADGES */}
            <div className="absolute top-2 right-2 flex flex-wrap gap-1 z-20">
              {dish.category === "Popular" && <Badge variant="destructive">HOT</Badge>}
              {discount > 0 && <Badge variant="secondary">{discount}% OFF</Badge>}
              <Badge
                variant="outline"
                className="bg-background/80 backdrop-blur-sm flex items-center"
              >
                <Heart className="h-3 w-3 fill-red-500 text-red-500 mr-1" />
                <span className="font-bold">{likesCount}</span>
              </Badge>
            </div>

            {/* OWNER ACTIONS - ONLY DELETE */}
            {isOwner && (
              <div className="absolute top-2 left-2 flex gap-2 z-20">
                <Button
                  size="sm"
                  variant="destructive"
                  className="p-1 rounded-md hover:bg-red-100"
                  onClick={handleDelete}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* CONTENT */}
          <CardContent className="p-4 flex-grow flex flex-col">
            <h3 className="font-bold leading-tight text-lg group-hover:text-primary transition-colors">
              {dish.name}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-2 mt-2 mb-3 flex-grow">
              {dish.description}
            </p>
            <div className="flex justify-between items-end mt-auto">
              <div className="flex items-baseline gap-2">
                <div className="font-headline text-xl font-bold text-foreground">
                  ${discountedPrice.toFixed(2)}
                </div>
                {discount > 0 && (
                  <div className="text-sm text-muted-foreground line-through">
                    ${price.toFixed(2)}
                  </div>
                )}
              </div>
              <Button
                size="sm"
                className="font-bold rounded-md text-lg w-10 h-10 p-0"
                onClick={handleAddToCart}
              >
                +
              </Button>
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
