
// "use client";

// import Link from "next/link";
// import Logo from "./logo";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { Send, Instagram, Facebook, Twitter } from "lucide-react";
// import { motion } from "framer-motion";

// const footerLinks = {
//   company: [
//     { name: "About Us", href: "/contact" },
//     { name: "Store", href: "/feed" },
//     { name: "FAQ", href: "#" }
//   ],
//   services: [
//     { name: "Delivery", href: "#" },
//     { name: "Payments", href: "#" },
//     { name: "Contact", href: "/contact" }
//   ],
//   follow: [
//     { name: "Instagram", href: "#", icon: <Instagram /> },
//     { name: "Facebook", href: "#", icon: <Facebook /> },
//     { name: "Twitter", href: "#", icon: <Twitter /> }
//   ]
// };

// export default function Footer() {
//   return (
//     <footer className="relative border-t bg-gradient-to-t from-amber-50/90 to-white/90 overflow-hidden">
//       {/* Background image */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80"
//           alt="Delicious food"
//           className="w-full h-full object-cover opacity-20"
//         />
//       </div>

//       <div className="container mx-auto px-4 lg:px-8 py-16 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          
//           {/* Logo & Info */}
//           <div className="lg:col-span-2 flex flex-col justify-between pr-8">
//             <Logo className="mb-4 animate-bounce" />
//             <p className="text-muted-foreground text-sm mb-4">
//               Your favorite meals and snacks delivered to your door! Fresh pizzas, burgers, healthy meals — all in one place.
//             </p>
//             <div className="text-muted-foreground text-sm space-y-1">
//               <p>Eco Food Court</p>
//               <p>FlavorVerse Pvt Ltd</p>
//             </div>
//           </div>

//           {/* Links & Newsletter */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
            
//             {/* Company & Services */}
//             {["company", "services"].map(section => (
//               <div key={section}>
//                 <h3 className="font-headline font-bold text-foreground mb-4">{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
//                 <ul className="space-y-2">
//                   {footerLinks[section].map(link => (
//                     <motion.li
//                       key={link.name}
//                       whileHover={{ x: 5 }}
//                       className="transition-all duration-200"
//                     >
//                       <Link href={link.href} className="text-muted-foreground hover:text-primary text-sm transition-colors">
//                         {link.name}
//                       </Link>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>
//             ))}

//             {/* Social & Newsletter */}
//             <div className="sm:col-span-3 lg:col-span-1 flex flex-col gap-6">
              
//               {/* Social */}
//               <div>
//                 <h3 className="font-headline font-bold text-foreground mb-4">Follow Us</h3>
//                 <div className="flex gap-4">
//                   {footerLinks.follow.map(link => (
//                     <motion.a
//                       key={link.name}
//                       href={link.href}
//                       whileHover={{ scale: 1.2, rotate: 10 }}
//                       className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-primary transition-all duration-300 shadow-lg"
//                     >
//                       {link.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>

//               {/* Newsletter */}
//               <div>
//                 <h3 className="font-headline font-bold text-foreground mb-4">Newsletter</h3>
//                 <form className="flex flex-col sm:flex-row items-center gap-2">
//                   <Input 
//                     type="email" 
//                     placeholder="Your email" 
//                     className="bg-background rounded-r-none flex-1 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
//                   />
//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.9 }}
//                     className="rounded-l-none bg-primary text-white p-3 flex items-center justify-center"
//                   >
//                     <Send className="h-4 w-4" />
//                   </motion.button>
//                 </form>
//                 <p className="text-xs text-white/80 mt-2">Subscribe for exclusive offers & updates!</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-12 pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-white/70 text-center md:text-left">
//             &copy; {new Date().getFullYear()} FlavorVerse Pvt Ltd. All rights reserved.
//           </p>
//           <div className="text-sm flex flex-wrap gap-2 justify-center md:justify-end text-white/70">
//             <Link href="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
//             <span>|</span>
//             <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
//           </div>
//         </div>

//         {/* Yogesh Thakur Footer */}
//         <div className="mt-4 text-center text-sm text-gray-800">
//           Copyright @ Yogesh Thakur || All rights reserved
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import Logo from "./logo";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send, Instagram, Facebook, Twitter } from "lucide-react";
import { motion } from "framer-motion";

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
    { name: "Instagram", href: "#", icon: <Instagram /> },
    { name: "Facebook", href: "#", icon: <Facebook /> },
    { name: "Twitter", href: "#", icon: <Twitter /> }
  ]
};

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-t from-neutral-700 to-neutral-700 text-white overflow-hidden">
      
      {/* Background subtle pattern */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80"
          alt="Delicious food"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Logo & Info */}
          <div className="lg:col-span-2 flex flex-col justify-between pr-4">
            <Logo className="mb-6 animate-bounce" />
            <p className="text-gray-300 text-base mb-4">
              Fresh meals delivered to your door. Pizzas, burgers, healthy meals — all at your fingertips.
            </p>
            <div className="text-gray-400 text-sm space-y-1">
              <p>Eco Food Court</p>
              <p>FlavorVerse Pvt Ltd</p>
            </div>
          </div>

          {/* Links & Newsletter */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
            
            {/* Company & Services */}
            {["company", "services"].map(section => (
              <div key={section}>
                <h3 className="text-lg font-semibold mb-4">{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
                <ul className="space-y-2">
                  {footerLinks[section].map(link => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      className="transition-all duration-200"
                    >
                      <Link href={link.href} className="text-gray-300 hover:text-amber-400 text-sm transition-colors">
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social & Newsletter */}
            <div className="sm:col-span-3 lg:col-span-1 flex flex-col gap-6">
              
              {/* Social */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {footerLinks.follow.map(link => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-400 transition-all duration-300 shadow-lg"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                <form className="flex flex-col sm:flex-row items-center gap-2">
                  <Input 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-neutral-700 rounded-l-lg sm:rounded-r-none flex-1 text-white placeholder-gray-400 focus:ring-amber-400 focus:border-amber-400 transition-all"
                  />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-amber-500 text-neutral-900 p-3 rounded-r-lg sm:rounded-l-none flex items-center justify-center hover:bg-amber-400 transition-colors"
                  >
                    <Send className="h-4 w-4" />
                  </motion.button>
                </form>
                <p className="text-xs text-gray-400 mt-2">Subscribe for exclusive offers & updates!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-100 text-center md:text-left">
            &copy; {new Date().getFullYear()} FlavorVerse Pvt Ltd. All rights reserved.
          </p>
          <div className="text-sm flex flex-wrap gap-2 justify-center md:justify-end text-gray-100">
            <Link href="#" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            <span>|</span>
            <Link href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
          </div>
        </div>

        {/* Yogesh Thakur Footer */}
        <div className="mt-6 text-center text-sm text-gray-100">
          Copyright @ Yogesh Thakur || All rights reserved
        </div>
      </div>
    </footer>
  );
}
