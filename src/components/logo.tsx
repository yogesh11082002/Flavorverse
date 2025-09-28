
import Link from "next/link";
import { Utensils } from "lucide-react";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="bg-primary p-2 rounded-md">
        <Utensils className="h-7 w-7 text-primary-foreground" />
      </div>
      <span className="text-2xl font-bold font-headline tracking-tighter text-foreground">
        FlavorVerse
      </span>
    </Link>
  );
}
