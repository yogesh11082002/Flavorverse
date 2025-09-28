

"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Logo from "./logo";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Search, ShoppingBag, Menu, ChevronDown, User, LogOut } from "lucide-react";
import { Badge } from "./ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import { useCart } from "@/context/cart-context";
import { useUser } from "@/firebase";
import { getAuth, signOut } from "firebase/auth";

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
  { 
    href: "/feed", 
    label: "Shop", 
    isHot: true, 
    hasDropdown: true, 
    dropdownItems: [
        { href: "/upload", label: "Upload Dish" },
        { href: "/feed", label: "Browse Dishes" },
    ] 
  },
  { href: "/contact", label: "Contact" },
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
        const key = `${link.label}-${link.href}`;
        if (link.hasDropdown && link.dropdownItems) {
          return (
             <DropdownMenu key={key}>
              <DropdownMenuTrigger className={cn(linkClass, pathname.startsWith(link.href) ? "text-primary" : "text-muted-foreground", "outline-none")}>
                {link.label} 
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
          <div key={key} className="relative">
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
  const { cartItems } = useCart();
  const { user, isUserLoading } = useUser();
  const router = useRouter();
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
    router.push('/');
  };


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
           <Button variant="ghost" size="icon" className="hidden sm:inline-flex relative" asChild>
            <Link href="/cart">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 justify-center p-0">{totalItems}</Badge>
              )}
            </Link>
          </Button>

          {!isUserLoading && (
            user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                     <Avatar className="h-8 w-8">
                        {user.photoURL ? <AvatarImage src={user.photoURL} alt={user.displayName ?? 'User'} /> : <AvatarFallback>{user.email?.charAt(0).toUpperCase()}</AvatarFallback>}
                     </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href="/profile/user">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
               <Button asChild className="font-bold rounded-lg px-6 hidden sm:inline-flex bg-blue-500 hover:bg-blue-600 text-white">
                <Link href="/login">
                  <User className="h-4 w-4 mr-2"/>
                  Login
                </Link>
              </Button>
            )
          )}
          

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
                    <Button variant="outline" asChild>
                       <Link href="/cart" onClick={() => setIsSheetOpen(false)}>
                        <ShoppingBag className="h-5 w-5 mr-2" />
                        Cart ({totalItems})
                      </Link>
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

// Added Avatar components for user profile picture
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
