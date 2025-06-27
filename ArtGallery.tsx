import React, { useState } from 'react';
import { Eye, Heart, Share2 } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const artCategories = [
  { id: 'all', name: 'All Arts' },
  { id: 'pottery', name: 'Pottery' },
  { id: 'textiles', name: 'Textiles' },
  { id: 'metalwork', name: 'Metalwork' },
  { id: 'woodcraft', name: 'Woodcraft' },
];

const artworks = [
  {
    id: 1,
    title: 'Traditional Moroccan Pottery',
    category: 'pottery',
    image: 'https://moroccotravelblog.com/wp-content/uploads/2013/07/Fes-Moroccan-Traditional-Blue-White-Pottery-1-435x320.jpg',
    description: 'Hand-crafted ceramic pottery featuring traditional Berber patterns and vibrant glazes.',
    artist: 'Fatima Al-Fasi',
    location: 'Safi, Morocco',
    price: '$120 - $350',
  },
  {
    id: 2,
    title: 'Amazigh Carpet Weaving',
    category: 'textiles',
    image: 'https://media.istockphoto.com/id/181853520/photo/berber-woman-weaving-textiles-ouarzazate-morocco.jpg?s=612x612&w=0&k=20&c=06jNUXYJExPcdpzEebUAzhyPQCNXWUSn4mBQ_uKDyM0=',
    description: 'Intricate hand-woven carpets using ancient Berber techniques and natural dyes.',
    artist: 'Aicha Ouali',
    location: 'Atlas Mountains',
    price: '$200 - $800',
  },
  {
    id: 3,
    title: 'Brass Lanterns & Lighting',
    category: 'metalwork',
    image: 'https://atlaslightsmorocco.com/cdn/shop/products/LightsBrassMoroccanSuspensionHangingVintageCeilingChandelierFixture_800x.jpg?v=1608387628',
    description: 'Ornate brass lanterns with intricate geometric patterns and colored glass.',
    artist: 'Mohammed Benali',
    location: 'Fes, Morocco',
    price: '$80 - $250',
  },
  {
    id: 4,
    title: 'Carved Cedar Wood Boxes',
    category: 'woodcraft',
    image: 'https://i.etsystatic.com/26567818/c/2253/1790/0/828/il/de2bad/2965777276/il_340x270.2965777276_5bke.jpg',
    description: 'Beautifully carved cedar wood jewelry boxes with traditional Moroccan motifs.',
    artist: 'Youssef Idrissi',
    location: 'Essaouira, Morocco',
    price: '$60 - $180',
  },
  {
    id: 5,
    title: 'Leather Goods & Accessories',
    category: 'textiles',
    image: 'https://i0.wp.com/www.moroccoproducts.com/wp-content/uploads/2024/07/Local-Markets-Shops-while-Shopping-Tour-in-Morocco.webp?fit=450,266&ssl=1',
    description: 'Premium leather bags, belts, and accessories crafted using traditional techniques.',
    artist: 'Hassan Tazi',
    location: 'Marrakech, Morocco',
    price: '$40 - $200',
  },
  {
    id: 6,
    title: 'Silver Jewelry & Ornaments',
    category: 'metalwork',
    image: 'https://i.etsystatic.com/20405111/r/il/aec490/2016549623/il_600x600.2016549623_kcgk.jpg',
    description: 'Exquisite silver jewelry featuring traditional Berber and Arab designs.',
    artist: 'Zahra Berrada',
    location: 'Tiznit, Morocco',
    price: '$30 - $400',
  },
];

const ArtGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [likedItems, setLikedItems] = useState<number[]>([]);
  const { t } = useLanguage();

  const filteredArtworks = selectedCategory === 'all' 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  const toggleLike = (id: number) => {
    setLikedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('traditionalCrafts')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Explore the masterful artistry of Moroccan craftspeople, where centuries-old 
            techniques meet contemporary expression in every piece.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {artCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Art Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map((artwork) => (
              <div
                key={artwork.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      onClick={() => toggleLike(artwork.id)}
                      className={`p-2 rounded-full ${
                        likedItems.includes(artwork.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      } transition-colors duration-300`}
                    >
                      <Heart size={16} fill={likedItems.includes(artwork.id) ? 'currentColor' : 'none'} />
                    </button>
                    <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-300">
                      <Share2 size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {artwork.title}
                  </h3>
                  <p className="text-gray-600 mb-3 leading-relaxed">
                    {artwork.description}
                  </p>
                  
                  <div className="space-y-2 mb-4">
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Artist:</span> {artwork.artist}
                    </p>
                    <p className="text-sm text-gray-500">
                      <span className="font-semibold">Location:</span> {artwork.location}
                    </p>
                    <p className="text-lg font-bold text-amber-600">
                      {artwork.price}
                    </p>
                  </div>

                  <div className="flex space-x-3">
                    <button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2">
                      <Eye size={16} />
                      <span>{t('viewDetails')}</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Our Artisan Workshops
          </h2>
          <p className="text-xl mb-8 text-orange-100">
            Experience the creation process firsthand and meet the talented artists behind these masterpieces.
          </p>
          <button className="bg-white text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg">
            {t('bookTour')}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ArtGallery;