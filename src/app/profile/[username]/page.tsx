
"use client";

import { notFound, useRouter } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { dishes } from '@/lib/data';
import DishCard from '@/components/dish-card';
import { useUser } from '@/firebase';
import { useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Mail } from 'lucide-react';

export default function ProfilePage({ params: { username } }: { params: { username: string } }) {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    // If not loading and no user, redirect to login
    if (!isUserLoading && !user) {
      router.push('/login');
    }
  }, [user, isUserLoading, router]);

  // A different user's profile is being viewed
  const isViewingOtherProfile = user?.email && username !== 'user' && username.toLowerCase() !== user.email.split('@')[0];

  if (isUserLoading || (!user && !isViewingOtherProfile)) {
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

  if (!user && isViewingOtherProfile) {
    // This case would be for public profiles, which we can implement later.
    // For now, we require login to see any profile.
    notFound();
  }

  // Placeholder data for other users if we decide to have public profiles.
  const staticUsers: { [key: string]: { name: string, bio: string, image?: string } } = {
    'janedoe': { name: 'Jane Doe', bio: 'Passionate home cook sharing my kitchen adventures.', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHx3b21hbiUyMHBvcnRyYWl0fGVufDB8fHx8MTc1ODg2Nzc5Nnww&ixlib=rb-4.1.0&q=80&w=1080' },
    'johnsmith': { name: 'John Smith', bio: 'Grill master and comfort food enthusiast.', image: 'https://images.unsplash.com/photo-1624395213043-fa2e123b2656?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw2fHxtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NTg5NTE1NDl8MA&ixlibrb-4.1.0&q=80&w=1080' },
  };

  const profileData = isViewingOtherProfile 
    ? staticUsers[username.toLowerCase()]
    : {
      name: user?.displayName || user?.email?.split('@')[0] || 'User',
      bio: 'Lover of food and culinary adventures.',
      image: user?.photoURL,
      email: user?.email,
    };
  
  if (!profileData) {
    notFound();
  }
  
  // This filter is a placeholder. To be fully functional, dishes need to be associated with user IDs in Firestore.
  const userDishes = dishes.filter(d => profileData.name === 'User' ? true : d.author === profileData.name);

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="mb-12 p-8 bg-card">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary shrink-0">
            {profileData.image && <AvatarImage src={profileData.image} alt={profileData.name} data-ai-hint="person face" />}
            <AvatarFallback>{profileData.name.charAt(0).toUpperCase()}</AvatarFallback>
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
        {isViewingOtherProfile ? `${profileData.name}'s Dishes` : "My Uploaded Dishes"} ({userDishes.length})
      </h2>

      {userDishes.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {userDishes.map((dish) => (
            <DishCard key={dish.id} dish={dish} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-muted rounded-lg">
          <p className="text-xl font-semibold text-foreground">No dishes yet</p>
          <p className="text-muted-foreground mt-2">{isViewingOtherProfile ? 'This user hasn\'t shared any dishes.' : 'You haven\'t uploaded any dishes yet.'}</p>
          {!isViewingOtherProfile && (
            <Button asChild className="mt-6">
                <a href="/upload">Upload Your First Dish</a>
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
