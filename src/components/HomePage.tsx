import { ProductCarousel } from './ProductCarousel';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { allProducts } from '../data/products';
import { useEffect, useState } from 'react';

interface Category {
  id: string;
  name: string;
  image: string;
  startDate?: string;
  endDate?: string;
}

interface HomePageProps {
  onCategorySelect: (categoryId: string) => void;
  onNavigate: (page: 'home' | 'about' | 'trending' | 'contact') => void;
}

const allCategories: Category[] = [
    {
        id: 'diwali',
        name: 'Diwali',
        image: 'https://images.unsplash.com/photo-1542544224-45d6f2430062?w=400',
        startDate: '2025-10-10',
        endDate: '2025-10-24',
    },
    { id: 'sarees', name: 'Sarees', image: 'https://images.unsplash.com/photo-1610171337839-f62f33f6a61b?w=400' },
    {
      id: 'kurtas',
      name: 'Kurtas',
      image: 'https://images.unsplash.com/photo-1604176423011-b829370c7943?w=400',
      startDate: '2024-07-20',
      endDate: '2024-07-27',
    },
    {
      id: 'dresses',
      name: 'Dresses',
      image: 'https://images.unsplash.com/photo-1594653554497-642f3097?w=400',
      startDate: '2024-08-01',
      endDate: '2024-08-10',
    },
    { id: 'lehengas', name: 'Lehengas', image: 'https://images.unsplash.com/photo-1631721526435-f4d66827027e?w=400' },
    {
      id: 'gowns',
      name: 'Gowns',
      image: 'https://images.unsplash.com/photo-1595138130107-285d1885f67a?w=400',
      startDate: '2024-09-01',
      endDate: '2024-09-15',
    },
    { id: 'jewelry', name: 'Jewelry', image: 'https://images.unsplash.com/photo-1611652033923-a5b4f5a3a7b4?w=400', startDate: '2025-10-11', endDate: '2025-10-13' },
    { id: 'accessories', name: 'Accessories', image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400' },
    { id: 'accessories1', name: 'Accessories', image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400' },
    { id: 'accessories2', name: 'Accessories', image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400' },
    { id: 'accessories3', name: 'Accessories', image: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=400' },
];

export function HomePage({ onCategorySelect }: HomePageProps) {
  const [categories, setCategories] = useState<Category[]>([]);
  const featuredProducts = allProducts.slice(0, 6);

  useEffect(() => {
    const checkDates = () => {
      const now = new Date();
      const activeCategories = allCategories.filter(category => {
        if (category.startDate && category.endDate) {
          const start = new Date(category.startDate);
          const end = new Date(category.endDate);
          end.setHours(23, 59, 59, 999); // Include the entire end day
          return now >= start && now <= end;
        }
        return true; // Always show categories without dates
      });

      // Sort to show timed categories first
      const sortedCategories = activeCategories.sort((a, b) => {
        const aIsTimed = a.startDate && a.endDate;
        const bIsTimed = b.startDate && b.endDate;
        if (aIsTimed && !bIsTimed) return -1;
        if (!aIsTimed && bIsTimed) return 1;
        return 0;
      });

      setCategories(sortedCategories);
    };

    checkDates();
    const interval = setInterval(checkDates, 60 * 60 * 1000); // Check every hour

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="bg-card px-4 py-6 border-b border-border">
        <b><h1 className="text-center text-primary">mauva.by.mmd</h1></b>
      </div>

      <div className="bg-card py-4 border-b border-border overflow-hidden">
        <div className="flex overflow-x-auto space-x-4 -mb-4 pb-4 px-4">
          {categories.map((category) => (
            <div key={category.id} className="flex flex-col items-center gap-2 flex-shrink-0">
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

      <div className="p-4 pb-24 space-y-4">
        {featuredProducts.map((product) => (
          <div key={product.id} className="bg-card rounded-lg border border-border p-4 shadow-sm">
            <ProductCarousel images={product.images} alt={product.name} />
            <div className="mt-4">
              <h3 className="mb-2">{product.name}</h3>
              <p className="text-muted-foreground mb-3">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary">{product.price}</span>
                <a 
                  href={product.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                  Buy Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
