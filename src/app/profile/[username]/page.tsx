
"use client";

import { notFound, useParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import DishCard from '@/components/dish-card';
import { useUser, useCollection, useFirestore, useMemoFirebase } from '@/firebase';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collection, query, where } from 'firebase/firestore';
import type { Dish } from '@/lib/types';
import Link from 'next/link';

export default function ProfilePage() {
  const params = useParams();
  const usernameParam = params.username as string; // This is the userId from the URL
  const { user, isUserLoading } = useUser();
  const firestore = useFirestore();

  const isMyProfile = user?.uid === usernameParam || (usernameParam === 'user' && user);
  const profileUserId = isMyProfile ? user?.uid : usernameParam;
  
  // This part would be enhanced by fetching user profile data from a 'users' collection
  // For now, we simulate it based on auth state and dishes
  const dishesQuery = useMemoFirebase(() => {
    if (!profileUserId) return null;
    return query(collection(firestore, 'dishes'), where('userId', '==', profileUserId));
  }, [firestore, profileUserId]);

  const { data: userDishes, isLoading: areDishesLoading } = useCollection<Dish>(dishesQuery);
  
  const profileData = {
      name: isMyProfile ? (user?.displayName || user?.email?.split('@')[0]) : (userDishes?.[0]?.author || 'User'),
      bio: 'Lover of food and culinary adventures.',
      image: isMyProfile ? user?.photoURL : userDishes?.[0]?.authorImage.imageUrl,
      email: isMyProfile ? user?.email : null,
    };
  

  if (isUserLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <Card className="mb-12 p-8">
          <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
            <Skeleton className="h-32 w-32 rounded-full border-4 border-primary" />
            <div className="w-full">
              <Skeleton className="h-10 w-1/2 mx-auto md:mx-0" />
              <Skeleton className="h-6 w-3/4 mt-4 mx-auto md:mx-0" />
            </div>
          </div>
        </Card>
        <Skeleton className="h-8 w-1/4 mb-8" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-80 w-full" />)}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="mb-12 p-8 bg-card">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary shrink-0">
            {profileData.image && <AvatarImage src={profileData.image} alt={profileData.name} data-ai-hint="person face" />}
            <AvatarFallback>{profileData.name?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-headline text-4xl font-bold">{profileData.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{profileData.bio}</p>
            {profileData.email && (
              <div className="mt-4 flex items-center justify-center md:justify-start gap-2 text-muted-foreground">
                <Mail className="h-5 w-5" />
                <span>{profileData.email}</span>
              </div>
            )}
          </div>
        </div>
      </Card>

      <h2 className="font-headline text-3xl font-bold mb-8">
        {isMyProfile ? "My Uploaded Dishes" : `${profileData.name}'s Dishes`} ({areDishesLoading ? '...' : userDishes?.length || 0})
      </h2>

      {areDishesLoading ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(4)].map((_, i) => <Skeleton key={i} className="h-80 w-full" />)}
        </div>
      ) : userDishes && userDishes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted rounded-lg">
          <p className="text-xl font-semibold text-foreground">No dishes yet</p>
          <p className="text-muted-foreground mt-2">{isMyProfile ? 'You haven\'t uploaded any dishes yet.' : 'This user hasn\'t shared any dishes.'}</p>
          {isMyProfile && (
            <Button asChild className="mt-6">
                <Link href="/upload">Upload Your First Dish</Link>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
