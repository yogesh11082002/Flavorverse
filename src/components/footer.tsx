
import Link from "next/link";
import Logo from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const footerLinks = {
    company: [
        { name: "About Us", href: "/contact" },
        { name: "Store", href: "/feed" },
        { name: "FAQ", href: "#" }
    ],
    services: [
        { name: "Delivery", href: "#" },
        { name: "Payments", href: "#" },
        { name: "Contact", href: "/contact" }
    ],
    follow: [
        { name: "Instagram", href: "#" },
        { name: "Facebook", href: "#" },
        { name: "Twitter", href: "#" }
    ]
}

export default function Footer() {
  return (
    <footer className="border-t mt-auto bg-amber-50/50">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 pr-8">
                <Logo />
                <p className="mt-4 text-muted-foreground text-sm">
                    Your favorite meals and snacks delivered to your door! From pizzas to healthy options, we have it all. Order easily and enjoy hassle-free!
                </p>
                <div className="mt-2 text-muted-foreground text-sm">
                    <p>Eco Food Court</p>
                    <p>FlavorVerse Pvt Ltd</p>
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
                <div>
                    <h3 className="font-headline font-semibold text-foreground">Company</h3>
                    <ul className="mt-4 space-y-2">
                        {footerLinks.company.map(link => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-headline font-semibold text-foreground">Services</h3>
                    <ul className="mt-4 space-y-2">
                        {footerLinks.services.map(link => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="font-headline font-semibold text-foreground">Follow Us</h3>
                    <ul className="mt-4 space-y-2">
                        {footerLinks.follow.map(link => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                 <div className="sm:col-span-3 lg:col-span-1 lg:col-start-auto sm:col-start-1">
                    <h3 className="font-headline font-semibold text-foreground">Get our Newsletter:</h3>
                    <form className="mt-4 flex items-center">
                        <Input type="email" placeholder="Your email" className="bg-background rounded-r-none focus:z-10"/>
                        <Button type="submit" size="icon" className="rounded-l-none">
                            <Send className="h-4 w-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} FlavorVerse Pvt Ltd. All rights reserved.
          </p>
          <div className="text-sm text-muted-foreground">
            <Link href="#" className="hover:text-primary">Terms & Conditions</Link>
            <span className="mx-2">|</span>
            <Link href="#" className="hover:text-primary">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
