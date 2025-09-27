import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { dishes } from '@/lib/data';
import DishCard from '@/components/dish-card';

const users = {
  'janedoe': { name: 'Jane Doe', bio: 'Passionate home cook sharing my kitchen adventures.', image: 'author-1'},
  'johnsmith': { name: 'John Smith', bio: 'Grill master and comfort food enthusiast.', image: 'author-2'},
  'emilywhite': { name: 'Emily White', bio: 'Vegan foodie exploring plant-based goodness.', image: 'author-3'},
  'michaelbrown': { name: 'Michael Brown', bio: 'Baker by passion, engineer by trade.', image: 'author-4'},
  'username': { name: 'User Name', bio: 'Food lover exploring new tastes.', image: 'author-1' } // generic for dropdown
};

export default function ProfilePage({ params }: { params: { username: string } }) {
  const user = users[params.username.toLowerCase() as keyof typeof users];

  if (!user) {
    // For this mock, we only have one user for the dropdown link
    if(params.username !== 'username') notFound();
  }
  
  const userDishes = dishes.filter(d => d.author === user.name);

  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="mb-12 p-8">
        <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-8">
          <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-primary">
            <AvatarImage src={`https://picsum.photos/seed/${user.image}/200/200`} alt={user.name} data-ai-hint="person face" />
            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="font-headline text-4xl font-bold">{user.name}</h1>
            <p className="mt-2 text-lg text-muted-foreground">{user.bio}</p>
          </div>
        </div>
      </Card>

      <h2 className="font-headline text-3xl font-bold mb-8">
        {user.name}'s Dishes ({userDishes.length})
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
          <p className="text-muted-foreground mt-2">This user hasn't shared any dishes.</p>
        </div>
      )}
    </div>
  );
}
