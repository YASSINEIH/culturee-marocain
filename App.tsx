import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArtGallery from './pages/ArtGallery';
import CulturalHeritage from './pages/CulturalHeritage';
import HistoricalLandmarks from './pages/HistoricalLandmarks';
import Cuisine from './pages/Cuisine';
import Blog from './pages/Blog';
import { LanguageProvider } from './hooks/useLanguage';

type PageType = 'home' | 'gallery' | 'heritage' | 'landmarks' | 'cuisine' | 'blog';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'gallery':
        return <ArtGallery />;
      case 'heritage':
        return <CulturalHeritage />;
      case 'landmarks':
        return <HistoricalLandmarks />;
      case 'cuisine':
        return <Cuisine />;
      case 'blog':
        return <Blog />;
      default:
        return <Home />;
    }
  };

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main className="pt-20">
          {renderPage()}
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;