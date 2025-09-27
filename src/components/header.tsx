"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Search, ShoppingCart } from "lucide-react";
import { Badge } from "./ui/badge";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/feed", label: "Menu" },
  { href: "#", label: "Brand", isNew: true },
  { href: "#", label: "Shop", isHot: true },
  { href: "#", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="ml-10 hidden items-center space-x-6 text-sm font-medium md:flex">
          {navLinks.map((link) => (
            <div key={link.href} className="relative">
              <Link
                href={link.href}
                className={cn(
                  "transition-colors hover:text-primary font-semibold",
                  pathname === link.href ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
              {link.isNew && <Badge variant="outline" className="absolute -top-4 -right-4 bg-blue-500 text-white border-none text-xs px-1.5 py-0.5 h-auto">NEW</Badge>}
              {link.isHot && <Badge variant="destructive" className="absolute -top-4 -right-4 border-none text-xs px-1.5 py-0.5 h-auto">HOT</Badge>}
            </div>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
           <Button variant="ghost" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="font-bold rounded-full px-6">Login</Button>
        </div>
      </div>
    </header>
  );
}
