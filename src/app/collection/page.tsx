import { TopCategories } from '@/components/collection/top-categories';
import { NewProducts } from '@/components/collection/new-products';
import { PromoBanner } from '@/components/collection/promo-banner';

export default function CollectionPage() {
  return (
    <div className="bg-muted/20">
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
    </div>
  );
}
