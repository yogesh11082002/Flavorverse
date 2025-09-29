
// import { HeroSection } from "@/components/landing/hero-section";
// import { PopularBrands } from "@/components/landing/popular-brands";
// import { CategoryGrid } from "@/components/landing/category-grid";
// import { DiscountedGoods } from "@/components/landing/discounted-goods";
// import { AboutUsSection } from "@/components/landing/about-us-section";
// import { HowItWorksSection } from "@/components/landing/how-it-works-section";
// import { FreshDeliciousDelivered } from "@/components/landing/fresh-delicious-delivered";
// import { PopularDishes } from "@/components/landing/popular-dishes";
// import { TopCategories } from "@/components/collection/top-categories";
// import { NewProducts } from "@/components/collection/new-products";
// import { PromoBanner } from "@/components/collection/promo-banner";
// import { Testimonials } from "@/components/landing/testimonials";
// import { FeaturesBanner } from "@/components/landing/features-banner";


// export default function Home() {
//   return (
//     <div className="flex flex-col">
//       <HeroSection />
//       <PopularDishes />
//       <FreshDeliciousDelivered />
      
//       <div className="container mx-auto px-4 py-8">
//         <TopCategories />
//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           <div className="lg:col-span-2">
//             <NewProducts />
//           </div>
//           <div>
//             <PromoBanner />
//           </div>
//         </div>
//       </div>
//       <PopularBrands />
//       <CategoryGrid />
//       <DiscountedGoods />
//       <AboutUsSection />
//       <Testimonials />
//       <FeaturesBanner />
//       <HowItWorksSection />
//     </div>
//   );
// }

// import { HeroSection } from "@/components/landing/hero-section";
// import { PopularBrands } from "@/components/landing/popular-brands";
// import { CategoryGrid } from "@/components/landing/category-grid";
// import { DiscountedGoods } from "@/components/landing/discounted-goods";
// import { AboutUsSection } from "@/components/landing/about-us-section";
// import { HowItWorksSection } from "@/components/landing/how-it-works-section";
// import { FreshDeliciousDelivered } from "@/components/landing/fresh-delicious-delivered";
// import { PopularDishes } from "@/components/landing/popular-dishes";
// import { TopCategories } from "@/components/collection/top-categories";
// import { NewProducts } from "@/components/collection/new-products";
// import { PromoBanner } from "@/components/collection/promo-banner";
// import { Testimonials } from "@/components/landing/testimonials";
// import { FeaturesBanner } from "@/components/landing/features-banner";

// export default function Home() {
//   return (
//     <div className="flex flex-col overflow-visible">
//       <HeroSection />
//       <PopularDishes />
//       <FreshDeliciousDelivered />

//       <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 overflow-visible">
//         <TopCategories />
//         <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
//           <div className="lg:col-span-2">
//             <NewProducts />
//           </div>
//           <div>
//             <PromoBanner />
//           </div>
//         </div>
//       </div>

//       <PopularBrands />
//       <CategoryGrid />
//       <DiscountedGoods />
//       <AboutUsSection />
//       <Testimonials />
//       <FeaturesBanner />
//       <HowItWorksSection />
//     </div>
//   );
// }

import { HeroSection } from "@/components/landing/hero-section";
import { PopularBrands } from "@/components/landing/popular-brands";
import { CategoryGrid } from "@/components/landing/category-grid";
import { DiscountedGoods } from "@/components/landing/discounted-goods";
import { AboutUsSection } from "@/components/landing/about-us-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FreshDeliciousDelivered } from "@/components/landing/fresh-delicious-delivered";
import { PopularDishes } from "@/components/landing/popular-dishes";
import { TopCategories } from "@/components/collection/top-categories";
import { NewProducts } from "@/components/collection/new-products";
import { PromoBanner } from "@/components/collection/promo-banner";
import { Testimonials } from "@/components/landing/testimonials";
import { FeaturesBanner } from "@/components/landing/features-banner";

export default function Home() {
  return (
    <div className="flex flex-col w-screen max-w-screen overflow-x-hidden">
      <HeroSection />
      <PopularDishes />
      <FreshDeliciousDelivered />

      <div className="container mx-auto max-w-screen px-4 sm:px-6 md:px-8 lg:px-12 py-8 overflow-x-hidden">
        <TopCategories />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 max-w-full">
            <NewProducts />
          </div>
          <div className="max-w-full">
            <PromoBanner />
          </div>
        </div>
      </div>

      <PopularBrands />
      <CategoryGrid />
      <DiscountedGoods />
      <AboutUsSection />
      <Testimonials />
      <FeaturesBanner />
      <HowItWorksSection />
    </div>
  );
}
