
import { HeroSection } from "@/components/landing/hero-section";
import { PopularBrands } from "@/components/landing/popular-brands";
import { CategoryGrid } from "@/components/landing/category-grid";
import { DiscountedGoods } from "@/components/landing/discounted-goods";
import { AboutUsSection } from "@/components/landing/about-us-section";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <PopularBrands />
      <CategoryGrid />
      <DiscountedGoods />
      <AboutUsSection />
    </div>
  );
}
