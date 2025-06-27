import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    home: 'Home',
    artGallery: 'Art Gallery',
    culturalHeritage: 'Cultural Heritage',
    historicalLandmarks: 'Historical Landmarks',
    cuisine: 'Cuisine',
    blog: 'Travel Tips',
    discoverMorocco: 'Discover Morocco',
    exploreRichCulture: 'Explore the Rich Culture and Artistry',
    learnMore: 'Learn More',
    exploreGallery: 'Explore Gallery',
    bookTour: 'Book a Tour',
    traditionalCrafts: 'Traditional Crafts',
    viewDetails: 'View Details',
    readMore: 'Read More',
    ingredients: 'Ingredients',
    instructions: 'Instructions',
    location: 'Location',
    established: 'Established',
  },
  fr: {
    home: 'Accueil',
    artGallery: 'Galerie d\'Art',
    culturalHeritage: 'Héritage Culturel',
    historicalLandmarks: 'Sites Historiques',
    cuisine: 'Cuisine',
    blog: 'Conseils de Voyage',
    discoverMorocco: 'Découvrir le Maroc',
    exploreRichCulture: 'Explorez la Riche Culture et l\'Art',
    learnMore: 'En Savoir Plus',
    exploreGallery: 'Explorer la Galerie',
    bookTour: 'Réserver une Visite',
    traditionalCrafts: 'Artisanat Traditionnel',
    viewDetails: 'Voir les Détails',
    readMore: 'Lire Plus',
    ingredients: 'Ingrédients',
    instructions: 'Instructions',
    location: 'Localisation',
    established: 'Établi',
  },
  ar: {
    home: 'الرئيسية',
    artGallery: 'معرض الفن',
    culturalHeritage: 'التراث الثقافي',
    historicalLandmarks: 'المعالم التاريخية',
    cuisine: 'المطبخ',
    blog: 'نصائح السفر',
    discoverMorocco: 'اكتشف المغرب',
    exploreRichCulture: 'استكشف الثقافة والفن الغني',
    learnMore: 'اعرف المزيد',
    exploreGallery: 'استكشف المعرض',
    bookTour: 'احجز جولة',
    traditionalCrafts: 'الحرف التقليدية',
    viewDetails: 'عرض التفاصيل',
    readMore: 'اقرأ المزيد',
    ingredients: 'المكونات',
    instructions: 'التعليمات',
    location: 'الموقع',
    established: 'تأسس',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[Language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};