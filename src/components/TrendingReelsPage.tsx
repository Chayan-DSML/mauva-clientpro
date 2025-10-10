import { ArrowLeft } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { handlePurchase } from '../utils/purchaseHandler';

interface TrendingReelsPageProps {
  onBack: () => void;
}

interface Reel {
  id: string;
  productId: string;
  url: string;
  embedUrl: string;
  productName: string;
  productDescription: string;
  price: string;
}

// Mock reels data with product information
const mockReels: Reel[] = [
  {
    id: '1',
    productId: '1',
    url: 'https://www.instagram.com/reel/DPPEMdEEtz0/',
    embedUrl: 'https://www.instagram.com/reel/DPPEMdEEtz0/embed',
    productName: 'Mountain Explorer Bike',
    productDescription: 'High-performance mountain bike perfect for trail adventures and challenging terrains.',
    price: '₹2,499'
  },
  {
    id: '2',
    productId: '3',
    url: 'https://www.instagram.com/reel/DPZD7DUgUta/',
    embedUrl: 'https://www.instagram.com/reel/DPZD7DUgUta/embed',
    productName: 'Luxury Sedan',
    productDescription: 'Premium luxury sedan with advanced features and exceptional comfort.',
    price: '₹45,999'
  },
  {
    id: '3',
    productId: '9',
    url: 'https://www.instagram.com/reel/DPl0YRvgecM/',
    embedUrl: 'https://www.instagram.com/reel/DPl0YRvgecM/embed',
    productName: 'City Transit Bus',
    productDescription: 'Modern public transportation bus with eco-friendly features and passenger comfort.',
    price: '₹125,999'
  }
];

export function TrendingReelsPage({ onBack }: TrendingReelsPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const windowHeight = window.innerHeight;
      const index = Math.round(scrollTop / windowHeight);
      setCurrentIndex(index);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  // Load Instagram embed script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="h-screen bg-background overflow-hidden">
      {/* Header with Back Button */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-primary/90 to-transparent px-4 py-4 flex items-center gap-3">
        <button
          onClick={onBack}
          className="p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-white">Trending Products</h1>
      </div>

      {/* Reels Container */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {mockReels.map((reel, index) => (
          <div
            key={reel.id}
            className="h-screen w-full snap-start snap-always flex items-center justify-center relative bg-background"
          >
            {/* Instagram Reel Embed */}
            <div className="w-full h-full flex items-center justify-center p-4 pt-20 pb-32">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink={reel.url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '3px',
                  boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                  margin: '1px',
                  maxWidth: '540px',
                  minWidth: '326px',
                  padding: 0,
                  width: 'calc(100% - 2px)'
                }}
              >
                <a href={reel.url} target="_blank" rel="noopener noreferrer">
                  View this post on Instagram
                </a>
              </blockquote>
            </div>

            {/* Product Information Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/95 via-primary/90 to-transparent p-6 pb-8">
              <div className="max-w-lg mx-auto space-y-3">
                <h2 className="text-white">{reel.productName}</h2>
                <p className="text-white/90 text-sm">{reel.productDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl text-white">{reel.price}</span>
                  <button 
                    onClick={() => handlePurchase({
                      productId: reel.productId,
                      productName: reel.productName,
                      price: reel.price
                    })}
                    className="px-6 py-3 bg-white text-primary rounded-md hover:bg-white/90 transition-colors shadow-lg"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-2">
        {mockReels.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentIndex ? 'bg-white h-8' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
