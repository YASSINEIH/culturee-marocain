import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const heroSlides = [
  {
    image: 'https://media.gettyimages.com/id/982105760/fr/photo/ait-benhaddou-ancienne-ville-dans-lafrique-du-nord-maroc.jpg?s=612x612&w=0&k=20&c=Spv0EVF35oIW5KyDszTi_k_7--u1hmkFO9kVD4P4xU4=',
    title: 'Sahara Desert',
    description: 'Experience the endless golden dunes of the Sahara',
  },
  {
    image: 'https://media.istockphoto.com/id/473695562/photo/medina-of-chefchaouen-morocco.jpg?s=612x612&w=0&k=20&c=sAluKknj5DEvPhxXiLcOb4A7VxOiS9kwsz0DCJw3kQk=',
    title: 'Chefchaouen',
    description: 'The Blue Pearl of Morocco\'s Atlas Mountains',
  },
  {
    image: 'https://media.gettyimages.com/id/2167587343/fr/photo/chouara-tannery-in-fez-morocco.jpg?s=612x612&w=0&k=20&c=fSEfkluugM2B1DORNpWaKqTSEBVJGV9XyAjNsKAds-Q=',
    title: 'Fes Medina',
    description: 'Ancient markets and traditional architecture',
  },
];

const highlights = [
  {
    icon: '🎨',
    title: 'Traditional Arts',
    description: 'Discover centuries-old crafts and artistic traditions',
  },
  {
    icon: '🏛️',
    title: 'Historic Architecture',
    description: 'Marvel at Islamic architecture and ancient buildings',
  },
  {
    icon: '🎵',
    title: 'Rich Music Heritage',
    description: 'Experience Gnawa, Andalusian, and Berber music',
  },
  {
    icon: '🍽️',
    title: 'Culinary Delights',
    description: 'Savor the flavors of authentic Moroccan cuisine',
  },
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div>
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              {t('discoverMorocco')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              {t('exploreRichCulture')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl">
                {t('exploreGallery')}
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2">
                <Play size={20} />
                <span>Virtual Tour</span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-black/30 text-white hover:bg-black/50 transition-all duration-300"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-amber-500 scale-125' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Culture Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cultural Treasures
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From ancient traditions to vibrant modern expressions, Morocco's cultural heritage 
              offers endless discoveries for the curious traveler.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Immerse Yourself in
                <span className="text-amber-400"> Moroccan Magic</span>
              </h2>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Join us for an authentic journey through Morocco's cultural landscape. 
                Experience traditional crafts, taste exotic flavors, and connect with 
                local artisans who keep centuries-old traditions alive.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-amber-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-600 transition-colors duration-300">
                  {t('bookTour')}
                </button>
                <button className="border border-gray-400 text-gray-200 px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                  {t('learnMore')}
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3889943/pexels-photo-3889943.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Moroccan Artisan"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-500 p-4 rounded-2xl shadow-xl">
                <div className="flex items-center space-x-2">
                  <Star className="text-white fill-white" size={20} />
                  <span className="text-white font-bold">4.9/5</span>
                </div>
                <p className="text-white text-sm">1000+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;