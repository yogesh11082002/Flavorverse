
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
    <div className="flex flex-col">
      <HeroSection />
      <PopularDishes />
      <FreshDeliciousDelivered />
      <HowItWorksSection />
      <div className="container mx-auto px-4 py-8">
        <TopCategories />
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <NewProducts />
          </div>
          <div>
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
    </div>
  );
}
