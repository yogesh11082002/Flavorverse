
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Search, ShoppingBag, Menu, ChevronDown, User } from "lucide-react";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navLinks = [
  { href: "/", label: "Home" },
  { 
    href: "/feed", 
    label: "Menu", 
    hasDropdown: true, 
    dropdownItems: [
      { href: "/feed", label: "All Dishes" },
      { href: "/feed?filter=Trending", label: "Trending" },
      { href: "/feed?filter=Popular", label: "Popular" },
      { href: "/feed?filter=Latest", label: "Latest" },
    ]
  },
  { href: "#", label: "Brand", isNew: true },
  { 
    href: "/upload", 
    label: "Shop", 
    isHot: true, 
    hasDropdown: true, 
    dropdownItems: [
        { href: "/upload", label: "Upload Dish" },
        { href: "/feed", label: "Browse Dishes" },
        { href: "/collection", label: "Collection" },
    ] 
  },
  { href: "/about", label: "About" },
];

function NavLinks({ isMobile, onLinkClick }: { isMobile?: boolean, onLinkClick?: () => void }) {
  const pathname = usePathname();
  const linkClass = cn(
    "transition-colors hover:text-primary font-semibold flex items-center gap-1",
    isMobile && "text-lg py-2 justify-between w-full"
  )

  return (
    <>
      {navLinks.map((link) => {
        if (link.hasDropdown && link.dropdownItems) {
          return (
             <DropdownMenu key={link.href}>
              <DropdownMenuTrigger className={cn(linkClass, pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground", "outline-none")}>
                {link.label} 
                {link.isNew && <Badge variant="outline" className="ml-1 bg-blue-100 text-blue-600 border-blue-300 text-xs px-1.5 py-0.5 h-auto">NEW</Badge>}
                {link.isHot && <Badge variant="destructive" className="ml-1 border-none text-xs px-1.5 py-0.5 h-auto">HOT</Badge>}
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {link.dropdownItems.map(item => (
                  <DropdownMenuItem key={item.href} asChild><Link href={item.href} onClick={onLinkClick}>{item.label}</Link></DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          )
        }
        
        return (
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
          </div>
        )
      })}
    </>
  );
}


export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center px-4 lg:px-8">
        <Logo />
        <nav className="ml-10 hidden items-center space-x-6 text-sm font-medium md:flex">
          <NavLinks />
        </nav>
        <div className="ml-auto flex items-center gap-2 sm:gap-4">
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Search className="h-5 w-5" />
          </Button>
           <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <ShoppingBag className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="font-bold rounded-lg px-6 hidden sm:inline-flex bg-blue-500 hover:bg-blue-600 text-white">
                <User className="h-4 w-4 mr-2"/>
                Login
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem asChild><Link href="/profile/user">My Profile</Link></DropdownMenuItem>
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card p-0">
              <div className="p-4 flex flex-col h-full">
                <Logo />
                <nav className="mt-8 flex flex-col space-y-4">
                  <NavLinks isMobile onLinkClick={() => setIsSheetOpen(false)} />
                </nav>
                 <div className="mt-auto flex flex-col gap-4">
                    <Button variant="outline">
                      <Search className="h-5 w-5 mr-2" />
                      Search
                    </Button>
                    <Button variant="outline">
                      <ShoppingBag className="h-5 w-5 mr-2" />
                      Cart
                    </Button>
                    <Button asChild className="font-bold rounded-lg w-full bg-blue-500 hover:bg-blue-600 text-white">
                        <Link href="/profile/user" onClick={() => setIsSheetOpen(false)}>
                            <User className="h-4 w-4 mr-2"/>
                            My Profile
                        </Link>
                    </Button>
                  </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
