
"use client";

import { useParams } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import DishCard from '@/components/dish-card';
import { useUser, useCollection, useFirestore, useMemoFirebase, useDoc } from '@/firebase';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { collection, query, where, doc } from 'firebase/firestore';
import type { Dish, User as UserType } from '@/lib/types';
import Link from 'next/link';

export default function ProfilePage() {
  const params = useParams();
  const profileUserId = params.username as string;
  const { user: currentUser, isUserLoading } = useUser();
  const firestore = useFirestore();

  const isMyProfile = currentUser?.uid === profileUserId;

  const profileUserRef = useMemoFirebase(() => profileUserId ? doc(firestore, 'users', profileUserId) : null, [firestore, profileUserId]);
  const { data: profileUser, isLoading: isProfileUserLoading } = useDoc<UserType>(profileUserRef);

  const dishesQuery = useMemoFirebase(() => {
    if (!profileUserId) return null;
    return query(collection(firestore, 'dishes'), where('userId', '==', profileUserId));
  }, [firestore, profileUserId]);

  const { data: userDishes, isLoading: areDishesLoading } = useCollection<Dish>(dishesQuery);
  
  const isLoading = isUserLoading || isProfileUserLoading;

  if (isLoading) {
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

  const profileData = {
      name: profileUser?.displayName,
      bio: 'Lover of food and culinary adventures.',
      image: profileUser?.photoURL,
      email: profileUser?.email,
    };
  

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

      <div className="flex justify-between items-center mb-8">
        <h2 className="font-headline text-3xl font-bold">
            {isMyProfile ? "My Uploaded Dishes" : `${profileData.name}'s Dishes`} ({areDishesLoading ? '...' : userDishes?.length || 0})
        </h2>
        {isMyProfile && (
            <Button asChild>
                <Link href="/upload">Upload Dish</Link>
            </Button>
        )}
      </div>


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
        </div>
      )}
    </div>
  );
}
