
import Link from "next/link";
import { ChefHat } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <div className="bg-primary p-2.5 rounded-lg group-hover:bg-primary/90 transition-colors">
        <ChefHat className="h-6 w-6 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold font-headline tracking-tighter text-foreground group-hover:text-primary transition-colors">
        FlavorVerse
      </span>
    </Link>
  );
}
