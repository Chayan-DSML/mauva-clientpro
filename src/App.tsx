import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ProductListPage } from './components/ProductListPage';
import { AboutPage } from './components/AboutPage';
import { TrendingReelsPage } from './components/TrendingReelsPage';
import { ContactPage } from './components/ContactPage';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'about' | 'trending' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setCurrentView('products');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCategory('');
  };

  const handleNavigate = (page: 'home' | 'about' | 'trending' | 'contact') => {
    setCurrentView(page);
  };

  return (
    <div className="min-h-screen bg-background">
      {currentView === 'home' && (
        <HomePage 
          onCategorySelect={handleCategorySelect}
          onNavigate={handleNavigate}
        />
      )}
      {currentView === 'products' && (
        <ProductListPage 
          categoryId={selectedCategory} 
          onBack={handleBackToHome} 
        />
      )}
      {currentView === 'about' && (
        <AboutPage onBack={handleBackToHome} />
      )}
      {currentView === 'trending' && (
        <TrendingReelsPage onBack={handleBackToHome} />
      )}
      {currentView === 'contact' && (
        <ContactPage onBack={handleBackToHome} />
      )}
    </div>
  );
}