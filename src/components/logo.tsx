
// import Link from "next/link";
// import { ChefHat } from "lucide-react";

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-2 group">
//       <div className="bg-primary p-2.5 rounded-lg group-hover:bg-primary/90 transition-colors">
//         <ChefHat className="h-6 w-6 text-primary-foreground" />
//       </div>
//       <span className="text-2xl font-bold font-headline  tracking-tighter text-foreground group-hover:text-primary transition-colors">
//         FlavorVerse
//       </span>
//     </Link>
//   );
// }

// import Link from "next/link";
// import { ChefHat } from "lucide-react";

// export default function Logo() {
//   return (
//     <Link href="/" className="flex items-center gap-3 group">
//       {/* Icon */}
//       <div className="bg-gradient-to-tr from-orange-500 to-red-500 p-2.5 rounded-xl shadow-md group-hover:scale-105 transition-transform">
//         <ChefHat className="h-7 w-7 text-white" />
//       </div>

//       {/* Text */}
//       <div className="flex flex-col leading-tight">
//         <span className="text-2xl font-extrabold font-Ovo tracking-wide text-foreground group-hover:text-orange-600 transition-colors">
//           FlavorVerse
//         </span>
        
//       </div>
//     </Link>
//   );
// }

// import Image from "next/image";
// import logo from "./logo.png"; // import the PNG

// export default function Logo() {
//   return (
//     <div className="flex items-center gap-2">
//       <Image 
//         src={logo} 
//         alt="FlavorVerse Logo" 
//         width={170} 
//         height={80} 
//         priority
//       />
     
//     </div>
//   );
// }
import Image from "next/image";
import Link from "next/link";
import logo from "./logo.png"; // import the PNG

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href="/">
        <Image 
          src={logo} 
          alt="FlavorVerse Logo" 
          width={170} 
          height={80} 
          priority
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
}

