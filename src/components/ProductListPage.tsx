import { ArrowLeft } from 'lucide-react';
import { ProductCarousel } from './ProductCarousel';
import { getProductsByCategory, categoryNames } from '../data/products';
import { handlePurchase } from '../utils/purchaseHandler';

interface ProductListPageProps {
  categoryId: string;
  onBack: () => void;
}

export function ProductListPage({ categoryId, onBack }: ProductListPageProps) {
  const products = getProductsByCategory(categoryId);
  const categoryName = categoryNames[categoryId] || 'Products';

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Back Button */}
      <div className="bg-card px-4 py-4 border-b border-border flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-accent rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-primary" />
        </button>
        <h1 className="text-primary">{categoryName}</h1>
      </div>

      {/* Product List */}
      <div className="p-4 space-y-4 pb-20">
        {products.map((product) => (
          <div key={product.id} className="bg-card rounded-lg border border-border overflow-hidden shadow-sm">
            <div className="p-4">
              <ProductCarousel images={product.images} alt={product.name} />
              <h3 className="mb-2 mt-4">{product.name}</h3>
              <p className="text-muted-foreground mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary">{product.price}</span>
                <button 
                  onClick={() => handlePurchase({
                    productId: product.id,
                    productName: product.name,
                    price: product.price
                  })}
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}