
// import type { Metadata } from 'next';
// import './globals.css';
// import { cn } from '@/lib/utils';
// import { Toaster } from '@/components/ui/toaster';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import { CartProvider } from '@/context/cart-context';
// import { FirebaseClientProvider } from '@/firebase';

// export const metadata: Metadata = {
//   title: 'FlavorVerse - Share Your Culinary Creations',
//   description: 'A platform to share and discover homemade dishes from a community of food lovers.',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
//       </head>
//       <body className={cn('font-body antialiased', 'min-h-screen bg-[#f0f2f5] p-4')}>
//         <FirebaseClientProvider>
//           <CartProvider>
//             <div className="relative flex min-h-screen flex-col bg-card rounded-2xl shadow-lg">
//               <Header />
//               <main className="flex-grow">
//                 {children}
//               </main>
//               <Footer />
//             </div>
//             <Toaster />
//           </CartProvider>
//         </FirebaseClientProvider>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from 'next';
// import './globals.css';
// import { cn } from '@/lib/utils';
// import { Toaster } from '@/components/ui/toaster';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import { CartProvider } from '@/context/cart-context';
// import { FirebaseClientProvider } from '@/firebase';

// export const metadata: Metadata = {
//   title: 'FlavorVerse - Share Your Culinary Creations',
//   description: 'A platform to share and discover homemade dishes from a community of food lovers.',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className={cn('font-body antialiased min-h-screen bg-[#f0f2f5]')}>
//         <FirebaseClientProvider>
//           <CartProvider>
//             <div className="relative flex flex-col min-h-screen bg-card overflow-visible">
//               <Header />
//               <main className="flex-grow overflow-visible px-4 sm:px-6 md:px-8 lg:px-12">
//                 {children}
//               </main>
//               <Footer />
//             </div>
//             <Toaster />
//           </CartProvider>
//         </FirebaseClientProvider>
//       </body>
//     </html>
//   );
// }

// import type { Metadata } from 'next';
// import './globals.css';
// import { cn } from '@/lib/utils';
// import { Toaster } from '@/components/ui/toaster';
// import Header from '@/components/header';
// import Footer from '@/components/footer';
// import { CartProvider } from '@/context/cart-context';
// import { FirebaseClientProvider } from '@/firebase';

// export const metadata: Metadata = {
//   title: 'FlavorVerse - Share Your Culinary Creations',
//   description:
//     'A platform to share and discover homemade dishes from a community of food lovers.',
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <head>
//         <link rel="icon" href="/favicon.ico" sizes="any" />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@400;500;700&display=swap"
//           rel="stylesheet"
//         />
//       </head>
//       <body className={cn('font-body antialiased min-h-screen bg-[#f0f2f5] overflow-x-hidden')}>
//         <FirebaseClientProvider>
//           <CartProvider>
//             <div className="relative flex flex-col min-h-screen bg-card w-screen overflow-x-hidden">
//               <Header />
//               <main className="flex-grow w-screen overflow-x-hidden">
//                 {children}
//               </main>
//               <Footer />
//             </div>
//             <Toaster />
//           </CartProvider>
//         </FirebaseClientProvider>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider } from '@/context/cart-context';
import { FirebaseClientProvider } from '@/firebase';

export const metadata: Metadata = {
  title: 'FlavorVerse - Share Your Culinary Creations',
  description:
    'A platform to share and discover homemade dishes from a community of food lovers.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-[#f0f2f5] overflow-x-hidden')}>
        <FirebaseClientProvider>
          <CartProvider>
            <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden relative bg-card">
              <Header />
              <main className="flex-grow w-full max-w-full overflow-x-hidden">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </CartProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
