import { ArrowLeft, ChevronDown } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { Button } from './ui/button';
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

const mockReels: Reel[] = [
  {
    id: '1',
    productId: '1',
    url: 'https://www.instagram.com/reel/DPPEMdEEtz0/',
    embedUrl: 'https://www.instagram.com/reel/DPPEMdEEtz0/embed',
    productName: 'Sage Green Tunic Set',
    productDescription: 'A beautiful sage green tunic and dupatta set, perfect for any occasion.',
    price: '₹2,499',
  },
  {
    id: '2',
    productId: '2',
    url: 'https://www.instagram.com/reel/C8N_eZ6vJef/',
    embedUrl: 'https://www.instagram.com/reel/C8N_eZ6vJef/embed',
    productName: 'Elegant Pink Gown',
    productDescription: 'A stunning pink gown for special events, with intricate details.',
    price: '₹5,999',
  },
  {
    id: '3',
    productId: '3',
    url: 'https://www.instagram.com/reel/C8JQfX7v_qg/',
    embedUrl: 'https://www.instagram.com/reel/C8JQfX7v_qg/embed',
    productName: 'Classic Blue Lehenga',
    productDescription: 'A timeless blue lehenga choli with traditional embroidery.',
    price: '₹8,999',
  },
];

export function TrendingReelsPage({ onBack }: TrendingReelsPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      const isAtBottom = container.scrollHeight - container.scrollTop === container.clientHeight;
      setShowScrollIndicator(!isAtBottom);
      
      const reels = container.querySelectorAll('.reel-item');
      const halfway = container.scrollTop + container.clientHeight / 2;

      reels.forEach(reel => {
        const iframe = reel.querySelector('iframe');
        if (iframe) {
          if (reel.offsetTop <= halfway && reel.offsetTop + reel.clientHeight > halfway) {
            iframe.contentWindow?.postMessage('play', '*');
          } else {
            iframe.contentWindow?.postMessage('pause', '*');
          }
        }
      });
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    container?.addEventListener('scroll', handleScroll);
    return () => container?.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="h-screen bg-background text-foreground flex flex-col relative">
      <div className="absolute top-0 left-0 z-20 p-4">
        <button onClick={onBack} className="p-2 rounded-full bg-primary/20 hover:bg-primary/40 transition-colors">
          <ArrowLeft className="w-6 h-6" />
        </button>
      </div>

      <div ref={containerRef} className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth">
        {mockReels.map((reel) => (
          <div key={reel.id} className="h-full w-full snap-start flex items-center justify-center reel-item">
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full p-4 md:p-8 gap-8">
              <div className="w-full md:w-1/2 h-full flex items-center justify-center">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={reel.url}
                  data-instgrm-version="14"
                  style={{ width: '100%', height: '100%' }}
                ></blockquote>
              </div>

              <div className="w-full md:w-1/2 lg:w-1/3 bg-primary/90 text-primary-foreground p-6 rounded-2xl shadow-lg backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-2">{reel.productName}</h2>
                <p className="text-primary-foreground/80 mb-4">{reel.productDescription}</p>
                <div className="flex justify-between items-center">
                  <span className="text-3xl font-extrabold">{reel.price}</span>
                  <Button onClick={() => handlePurchase({ productId: reel.productId, productName: reel.productName, price: reel.price })}>Buy Now</Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showScrollIndicator && (
        <div className="absolute bottom-4 right-1/2 translate-x-1/2 z-20 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      )}
    </div>
  );
}
