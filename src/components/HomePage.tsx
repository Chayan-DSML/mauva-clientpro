import { ProductCarousel } from './ProductCarousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Home, Info, TrendingUp, Phone } from 'lucide-react';
import { allProducts } from '../data/products';
import { handlePurchase } from '../utils/purchaseHandler';

interface Category {
  id: string;
  name: string;
  image: string;
}

interface HomePageProps {
  onCategorySelect: (categoryId: string) => void;
  onNavigate: (page: 'home' | 'about' | 'trending' | 'contact') => void;
}

const categories: Category[] = [
  { id: 'bikes', name: 'Bikes', image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?w=400' },
  { id: 'cars', name: 'Cars', image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=400' },
  { id: 'cycle', name: 'Cycle', image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=400' },
  { id: 'truck', name: 'Truck', image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=400' },
  { id: 'buses', name: 'Buses', image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=400' }
];

export function HomePage({ onCategorySelect, onNavigate }: HomePageProps) {
  // Get first 6 products for home page display
  const featuredProducts = allProducts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card px-4 py-6 border-b border-border">
        <b><h1 className="text-center text-primary">mauva.by.mmd</h1></b>
      </div>

      {/* Stories/Categories */}
      <div className="bg-card px-4 py-4 border-b border-border">
        <div className="flex justify-between items-center gap-2">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2 flex-1">
              <button
                onClick={() => onCategorySelect(category.id)}
                className="w-16 h-16 rounded-full border-2 border-secondary/40 flex items-center justify-center overflow-hidden bg-accent hover:border-primary transition-colors p-0"
              >
                <ImageWithFallback 
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </button>
              <span className="text-xs text-muted-foreground">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area - Product Listings */}
      <div className="p-4 pb-24 space-y-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-card rounded-lg border border-border p-4 shadow-sm">
            <ProductCarousel images={product.images} alt={product.name} />
            <div className="mt-4">
              <h3 className="mb-2">{product.name}</h3>
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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border px-4 py-3 shadow-lg">
        <div className="flex justify-between items-center max-w-xs mx-auto">
          <button 
            onClick={() => onNavigate('home')}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <Home className="w-6 h-6 text-primary" />
          </button>
          <button 
            onClick={() => onNavigate('about')}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <Info className="w-6 h-6 text-primary" />
          </button>
          <button 
            onClick={() => onNavigate('trending')}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <TrendingUp className="w-6 h-6 text-primary" />
          </button>
          <button 
            onClick={() => onNavigate('contact')}
            className="p-2 hover:bg-accent rounded-lg transition-colors"
          >
            <Phone className="w-6 h-6 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
}