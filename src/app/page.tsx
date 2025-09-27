
import { HeroSection } from "@/components/landing/hero-section";
import { PopularBrands } from "@/components/landing/popular-brands";
import { CategoryGrid } from "@/components/landing/category-grid";
import { DiscountedGoods } from "@/components/landing/discounted-goods";
import { AboutUsSection } from "@/components/landing/about-us-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FreshDeliciousDelivered } from "@/components/landing/fresh-delicious-delivered";
import { PopularDishes } from "@/components/landing/popular-dishes";


export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PopularDishes />
      <FreshDeliciousDelivered />
      <HowItWorksSection />
      <PopularBrands />
      <CategoryGrid />
      <DiscountedGoods />
      <AboutUsSection />
    </div>
  );
}
