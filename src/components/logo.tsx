import { UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <UtensilsCrossed className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline tracking-tighter text-foreground">
        FlavorVerse
      </span>
    </Link>
  );
}
