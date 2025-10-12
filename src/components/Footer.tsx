import { Home, Info, Flame, Phone } from 'lucide-react';

interface FooterProps {
  activePage: string;
  onNavigate: (page: 'home' | 'about' | 'trending' | 'contact') => void;
}

const navItems = [
  { id: 'home', icon: Home, label: 'Home' },
  { id: 'about', icon: Info, label: 'About' },
  { id: 'trending', icon: Flame, label: 'Trending' },
  { id: 'contact', icon: Phone, label: 'Contact' },
];

export function Footer({ activePage, onNavigate }: FooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-card border-t border-border shadow-t-lg z-50">
      <div className="flex justify-around items-center max-w-lg mx-auto px-2 py-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onNavigate(item.id as 'home' | 'about' | 'trending' | 'contact')}
            className={`flex flex-col items-center gap-1 p-2 rounded-md transition-colors ${
              activePage === item.id
                ? 'text-primary'
                : 'text-muted-foreground hover:text-primary'
            }`}
          >
            <item.icon className="w-6 h-6" />
          </button>
        ))}
      </div>
    </div>
  );
}