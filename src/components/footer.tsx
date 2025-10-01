// "use client";

// import Link from "next/link";
// import Logo from "./logo";
// import { Input } from "./ui/input";
// import { Button } from "./ui/button";
// import { Send, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
// import { motion } from "framer-motion";

// const footerLinks = {
//   company: [
//     { name: "About Us", href: "/contact" },
//     { name: "Store", href: "/feed" },
//     { name: "FAQ", href: "#" },
//   ],
//   services: [
//     { name: "Delivery", href: "#" },
//     { name: "Payments", href: "#" },
//     { name: "Contact", href: "/contact" },
//   ],
//   follow: [
//     { name: "Facebook", href: "https://www.facebook.com/yogesh.sengar.589/", icon: <Facebook /> },
//     { name: "Twitter", href: "https://twitter.com/YogeshT12554000", icon: <Twitter /> },
//     { name: "LinkedIn", href: "https://www.linkedin.com/in/yogesh-sengar-982465232/", icon: <Linkedin /> },
//     { name: "Instagram", href: "https://www.instagram.com/yogesh_thakur_1108", icon: <Instagram /> },
//   ],
// };

// export default function Footer() {
//   return (
//     <footer className="relative bg-gradient-to-t from-neutral-700 to-neutral-700 text-white overflow-hidden">
//       {/* Background subtle pattern */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1470&q=80"
//           alt="Delicious food"
//           className="w-full h-full object-cover opacity-10"
//         />
//         <div className="absolute inset-0 bg-black/60"></div>
//       </div>

//       <div className="container mx-auto px-6 py-20 relative z-10">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
//           {/* Logo & Info */}
//           <div className="lg:col-span-2 flex flex-col justify-between pr-4">
//             <Logo className="mb-6 animate-bounce" />
//             <p className="text-gray-300 text-base mt-5 mb-4">
//               Fresh meals delivered to your door. Pizzas, burgers, healthy meals — all at your fingertips.
//             </p>
//             <div className="text-gray-400 text-sm space-y-1">
//               <p>Eco Food Court</p>
//               <p>FlavorVerse Pvt Ltd</p>
//             </div>
//           </div>

//           {/* Links & Newsletter */}
//           <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
//             {/* Company & Services */}
//             {["company", "services"].map((section) => (
//               <div key={section}>
//                 <h3 className="text-lg font-semibold mb-4">
//                   {section.charAt(0).toUpperCase() + section.slice(1)}
//                 </h3>
//                 <ul className="space-y-2">
//                   {footerLinks[section].map((link) => (
//                     <motion.li
//                       key={link.name}
//                       whileHover={{ x: 5 }}
//                       className="transition-all duration-200"
//                     >
//                       <Link
//                         href={link.href}
//                         className="text-gray-300 hover:text-amber-400 text-sm transition-colors"
//                       >
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
//                 <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
//                 <div className="flex gap-4">
//                   {footerLinks.follow.map((link) => (
//                     <motion.a
//                       key={link.name}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       whileHover={{ scale: 1.2, rotate: 10 }}
//                       className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-400 transition-all duration-300 shadow-lg"
//                     >
//                       {link.icon}
//                     </motion.a>
//                   ))}
//                 </div>
//               </div>

//               {/* Newsletter */}
//               <div className=" hidden sm:block">
//                 <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
//                 <form className="flex flex-col sm:flex-row items-center gap-2">
//                   <Input
//                     type="email"
//                     placeholder="Your email"
//                     className="bg-neutral-700 rounded-l-lg sm:rounded-r-none flex-1 text-white placeholder-gray-400 focus:ring-amber-400 focus:border-amber-400 transition-all"
//                   />
//                   <motion.button
//                     type="submit"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     className="bg-amber-500  text-neutral-900 p-3 rounded-r-lg sm:rounded-l-none flex items-center justify-center hover:bg-amber-400 transition-colors"
//                   >
//                     <Send className="h-4 w-4" />
//                   </motion.button>
//                 </form>
//                 <p className="text-xs text-gray-400 mt-2">
//                   Subscribe for exclusive offers & updates!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom */}
//         <div className="mt-16 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between gap-4">
//           <p className="text-sm text-gray-100 text-center md:text-left">
//             &copy; {new Date().getFullYear()} FlavorVerse Pvt Ltd. All rights reserved.
//           </p>
//           <div className="text-sm flex flex-wrap gap-2 justify-center md:justify-end text-gray-100">
//             <Link href="#" className="hover:text-amber-400 transition-colors">
//               Terms & Conditions
//             </Link>
//             <span>|</span>
//             <Link href="#" className="hover:text-amber-400 transition-colors">
//               Privacy Policy
//             </Link>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import blacklogo from "./blacklogo.png"; // your PNG logo
import { Input } from "./ui/input";
import { Send, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { motion } from "framer-motion";

const footerLinks = {
  company: [
    { name: "About Us", href: "/contact" },
    { name: "Store", href: "/feed" },
    { name: "FAQ", href: "#" },
  ],
  services: [
    { name: "Delivery", href: "#" },
    { name: "Payments", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  follow: [
    { name: "Facebook", href: "https://www.facebook.com/yogesh.sengar.589/", icon: <Facebook /> },
    { name: "Twitter", href: "https://twitter.com/YogeshT12554000", icon: <Twitter /> },
    { name: "Instagram", href: "https://www.instagram.com/yogesh_thakur_1108", icon: <Instagram /> },
  ],
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
          <div className="lg:col-span-2 flex flex-col justify-between pr-4 -ml-5 -mt-36 sm:-mt-20">
            <Link href="/">
    
      <Image
        src={blacklogo}
        alt="FlavorVerse Logo"
        width={200}
        height={100}
        className="mb-6 cursor-pointer"
      />
   
  </Link>
            <p className="text-gray-300 text-base ml-5 -mt-20  sm:-mt-28 mb-4">
              Fresh meals delivered to your door. Pizzas, burgers, healthy meals — all at your fingertips.
            </p>
            <div className="text-gray-400 ml-5 text-sm space-y-1">
              <p>Eco Food Court</p>
              <p>FlavorVerse Pvt Ltd</p>
            </div>
          </div>

          {/* Links & Newsletter */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 lg:col-span-3">
            {/* Company & Services */}
            {["company", "services"].map((section) => (
              <div key={section}>
                <h3 className="text-lg font-semibold mb-4">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </h3>
                <ul className="space-y-2">
                  {footerLinks[section].map((link) => (
                    <motion.li
                      key={link.name}
                      whileHover={{ x: 5 }}
                      className="transition-all duration-200"
                    >
                      <Link
                        href={link.href}
                        className="text-gray-300 hover:text-amber-400 text-sm transition-colors"
                      >
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
                  {footerLinks.follow.map((link) => (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className="flex items-center justify-center w-12 h-12 rounded-full bg-amber-500 text-neutral-900 hover:bg-amber-400 transition-all duration-300 shadow-lg"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="hidden sm:block">
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
                <p className="text-xs text-gray-400 mt-2">
                  Subscribe for exclusive offers & updates!
                </p>
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
            <Link href="#" className="hover:text-amber-400 transition-colors">
              Terms & Conditions
            </Link>
            <span>|</span>
            <Link href="#" className="hover:text-amber-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
