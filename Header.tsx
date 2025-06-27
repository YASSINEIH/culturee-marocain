import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
  currentPage: string;
  setCurrentPage: (page: any) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ 
  currentPage, 
  setCurrentPage, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}) => {
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { id: 'home', label: t('home') },
    { id: 'gallery', label: t('artGallery') },
    { id: 'heritage', label: t('culturalHeritage') },
    { id: 'landmarks', label: t('historicalLandmarks') },
    { id: 'cuisine', label: t('cuisine') },
    { id: 'blog', label: t('blog') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">🇲🇦</span>
            </div>
            <h1 className="text-2xl font-bold text-white tracking-wide">
              Morocco<span className="text-amber-400">Culture</span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  currentPage === item.id
                    ? 'bg-amber-500 text-white shadow-lg'
                    : 'text-gray-200 hover:text-white hover:bg-blue-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value as any)}
                className="bg-blue-700 text-white px-3 py-2 rounded-lg border border-blue-600 focus:outline-none focus:ring-2 focus:ring-amber-400"
              >
                <option value="en">🇺🇸 EN</option>
                <option value="fr">🇫🇷 FR</option>
                <option value="ar">🇸🇦 AR</option>
              </select>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-blue-700 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-blue-900 border-t border-blue-700 shadow-xl">
            <nav className="py-4">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentPage(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-6 py-3 transition-colors ${
                    currentPage === item.id
                      ? 'bg-amber-500 text-white'
                      : 'text-gray-200 hover:bg-blue-700 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;