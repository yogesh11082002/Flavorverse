
"use client";

import { useCart } from "@/context/cart-context";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;

  const handleCheckout = () => {
    toast({
      title: "Checkout Initiated",
      description: "Thank you for your order! Your cart has been cleared.",
    });
    clearCart();
    // No longer redirects to home page
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <ShoppingCart className="mx-auto h-24 w-24 text-muted-foreground" />
        <h1 className="mt-8 font-headline text-4xl font-bold">Your Cart is Empty</h1>
        <p className="mt-4 text-lg text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild className="mt-8">
          <Link href="/feed">Start Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-headline text-4xl font-bold mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} className="flex items-center p-4">
                <div className="relative w-24 h-24 rounded-md overflow-hidden mr-4">
                  <Image
                    src={item.image.imageUrl}
                    alt={item.name}
                    fill
                    className="object-cover"
                    data-ai-hint={item.image.imageHint}
                  />
                </div>
                <div className="flex-grow">
                  <h2 className="font-bold text-lg">{item.name}</h2>
                  <p className="text-muted-foreground text-sm">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded-md">
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="font-bold w-16 text-right">${(item.price * item.quantity).toFixed(2)}</p>
                  <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)}>
                    <Trash2 className="h-5 w-5 text-destructive" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Tax (5%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-2">
              <Button className="w-full" onClick={handleCheckout}>Proceed to Checkout</Button>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/feed">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Continue Shopping
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
