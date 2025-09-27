"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Search, ShoppingCart, Menu } from "lucide-react";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/feed", label: "Menu" },
  { href: "/upload", label: "Upload" },
  { href: "#", label: "Brand", isNew: true },
  { href: "#", label: "Shop", isHot: true },
  { href: "#", label: "Contact" },
];

function NavLinks({ isMobile, onLinkClick }: { isMobile?: boolean, onLinkClick?: () => void }) {
  const pathname = usePathname();
  const linkClass = cn(
    "transition-colors hover:text-primary font-semibold",
    isMobile && "text-lg py-2"
  )

  return (
    <>
      {navLinks.map((link) => (
        <div key={link.href} className="relative">
          <Link
            href={link.href}
            onClick={onLinkClick}
            className={cn(
              linkClass,
              pathname === link.href ? "text-primary" : "text-muted-foreground"
            )}
          >
            {link.label}
          </Link>
          {link.isNew && <Badge variant="outline" className="absolute top-0 -right-4 bg-blue-500 text-white border-none text-xs px-1.5 py-0.5 h-auto">NEW</Badge>}
          {link.isHot && <Badge variant="destructive" className="absolute top-0 -right-4 border-none text-xs px-1.5 py-0.5 h-auto">HOT</Badge>}
        </div>
      ))}
    </>
  );
}


export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center">
        <Logo />
        <nav className="ml-10 hidden items-center space-x-6 text-sm font-medium md:flex">
          <NavLinks />
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-5 w-5" />
          </Button>
           <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <ShoppingCart className="h-5 w-5" />
          </Button>
          <Button className="font-bold rounded-full px-6 hidden sm:inline-flex">Login</Button>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="p-4">
                <Logo />
                <nav className="mt-8 flex flex-col space-y-4">
                  <NavLinks isMobile onLinkClick={() => setIsSheetOpen(false)} />
                </nav>
                 <div className="mt-8 flex flex-col gap-4">
                    <Button variant="outline">
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </Button>
                    <Button variant="outline">
                      <ShoppingCart className="h-5 w-5 mr-2" />
                      Cart
                    </Button>
                    <Button className="font-bold rounded-full px-6">Login</Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
