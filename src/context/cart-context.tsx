
"use client";

import React, { createContext, useContext, ReactNode, useEffect } from 'react';
import type { CartItem } from '@/lib/types';
import { useCollection, useFirestore, useUser, useMemoFirebase } from '@/firebase';
import { collection, doc, setDoc, deleteDoc, runTransaction } from 'firebase/firestore';

interface CartContextType {
  cartItems: CartItem[];
  isLoading: boolean;
  addToCart: (item: Omit<CartItem, 'quantity' | 'price'> & { price: number }) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const firestore = useFirestore();

  const cartColRef = useMemoFirebase(
    () => (user ? collection(firestore, 'users', user.uid, 'cart') : null),
    [user, firestore]
  );
  
  const { data: cartItems, isLoading } = useCollection<CartItem>(cartColRef);

  const addToCart = async (item: Omit<CartItem, 'quantity'>) => {
    if (!user) return;
    const cartItemRef = doc(firestore, 'users', user.uid, 'cart', item.id);
    
    await runTransaction(firestore, async (transaction) => {
        const sfDoc = await transaction.get(cartItemRef);
        if (!sfDoc.exists()) {
            transaction.set(cartItemRef, { ...item, quantity: 1 });
        } else {
            const newQuantity = sfDoc.data().quantity + 1;
            transaction.update(cartItemRef, { quantity: newQuantity });
        }
    });
  };

  const removeFromCart = async (itemId: string) => {
    if (!user) return;
    const cartItemRef = doc(firestore, 'users', user.uid, 'cart', itemId);
    await deleteDoc(cartItemRef);
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    if (!user) return;
    const cartItemRef = doc(firestore, 'users', user.uid, 'cart', itemId);
    if (quantity <= 0) {
      await deleteDoc(cartItemRef);
    } else {
      await setDoc(cartItemRef, { quantity }, { merge: true });
    }
  };

  const clearCart = async () => {
    if (!user || !cartItems) return;
    // Firestore doesn't have a bulk delete for subcollections on the client.
    // We have to delete documents one by one.
    const deletePromises = cartItems.map(item => {
        const cartItemRef = doc(firestore, 'users', user.uid, 'cart', item.id);
        return deleteDoc(cartItemRef);
    });
    await Promise.all(deletePromises);
  };

  return (
    <CartContext.Provider value={{ cartItems: cartItems || [], isLoading, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
