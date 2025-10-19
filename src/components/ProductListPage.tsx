import { getProductsByCategory, categoryNames } from '../data/products';
import { ProductCarousel } from './ProductCarousel';
import { Button } from './ui/button';
import { ChevronLeft } from 'lucide-react';
import { handlePurchase } from '../utils/purchaseHandler';

interface ProductListPageProps {
  categoryId: string;
  onBack: () => void;
  categoryPath: string[];
}

export function ProductListPage({ categoryId, onBack, categoryPath }: ProductListPageProps) {
  const products = getProductsByCategory(categoryId);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card px-4 py-6 border-b border-border flex items-center">
        <Button variant="ghost" size="icon" onClick={onBack} className="mr-2">
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <div>
          <h1 className="text-xl font-bold">Products</h1>
          <p className="text-sm text-muted-foreground">{categoryPath.join(' > ')}</p>
        </div>
      </div>

      <div className="p-4 pb-24 space-y-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="bg-card rounded-lg border border-border p-4 shadow-sm">
              <ProductCarousel images={product.images} alt={product.name} />
              <div className="mt-4">
                <h3 className="mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-3">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-primary">{product.price}</span>
                  <Button onClick={() => handlePurchase({ productId: product.id, productName: product.name, price: product.price })}>Buy Now</Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
