import { useState } from 'react';
import { HomePage } from './components/HomePage';
import { ProductListPage } from './components/ProductListPage';
import { AboutPage } from './components/AboutPage';
import { TrendingReelsPage } from './components/TrendingReelsPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'products' | 'about' | 'trending' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [categoryPath, setCategoryPath] = useState<string[]>([]);

  const handleCategorySelect = (categoryId: string, path: string[]) => {
    setSelectedCategory(categoryId);
    setCategoryPath(path);
    setCurrentView('products');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedCategory('');
    setCategoryPath([]);
  };

  const handleNavigate = (page: 'home' | 'about' | 'trending' | 'contact') => {
    setCurrentView(page);
  };

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <HomePage onCategorySelect={handleCategorySelect} onNavigate={handleNavigate} />;
      case 'products':
        return <ProductListPage categoryId={selectedCategory} onBack={handleBackToHome} categoryPath={categoryPath} />;
      case 'about':
        return <AboutPage onBack={handleBackToHome} />;
      case 'trending':
        return <TrendingReelsPage onBack={handleBackToHome} />;
      case 'contact':
        return <ContactPage onBack={handleBackToHome} />;
      default:
        return <HomePage onCategorySelect={handleCategorySelect} onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background pb-20">
      {renderContent()}
      {currentView !== 'products' && 
        <Footer activePage={currentView} onNavigate={handleNavigate} />
      }
    </div>
  );
}