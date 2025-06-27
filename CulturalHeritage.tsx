import React, { useState } from 'react';
import { Play, Pause, Music, Calendar, Users } from 'lucide-react';

const culturalElements = [
  {
    id: 1,
    title: 'Gnawa Music Tradition',
    category: 'music',
    image: 'https://media.gettyimages.com/id/85333965/photo/united-states-world-financial-centre-photo-of-gnawa-the-gnawa-master-musicians-of-morocco.jpg?s=612x612&w=0&k=20&c=iqiFqhaBAa-YEYo8J8fofVrLWuqMe4Ee8heDS_sdgdk=',
    description: 'Ancient spiritual music combining African rhythms with Islamic prayers, played with traditional instruments like the qraqeb and sintir.',
    origins: 'Sub-Saharan Africa, 16th century',
    significance: 'Healing ceremonies and cultural identity',
    audioUrl: '#', // Placeholder for audio
  },
  {
    id: 2,
    title: 'Henna Art (Mehndi)',
    category: 'art',
    image: 'https://www.brides.com/thmb/vXmVnart_K30vYvDC9L4Q935mZA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ToralandRajMarried-52-4a9951c8b3184422ae0ea15461ffb994.jpg',
    description: 'Intricate body art using natural henna paste, traditionally applied during weddings and celebrations.',
    origins: 'Ancient Egypt and India',
    significance: 'Blessing, protection, and beauty',
    tutorial: 'Basic patterns and application techniques',
  },
  {
    id: 3,
    title: 'Mawazine Festival',
    category: 'festival',
    image: 'https://viberate-upload.ams3.cdn.digitaloceanspaces.com/prod/entity/festival/mawazine-festival-czy34',
    description: 'One of the largest music festivals in the world, celebrating both international and Moroccan artists.',
    origins: 'Rabat, 2001',
    significance: 'Cultural bridge between Morocco and the world',
    dates: 'June-July annually',
  },
  {
    id: 4,
    title: 'Amazighe Traditions',
    category: 'culture',
    image: 'https://images-cdn.trtworld.com/trtafricafre/20159857_0-0-760-428.jpeg?width=1440&format=webp&quality=80',
    description: 'Ancient indigenous culture with unique languages, customs, and artistic expressions preserved for millennia.',
    origins: 'North Africa, prehistoric times',
    significance: 'Morocco\'s indigenous heritage',
    languages: 'Tamazight, Tarifit, Tashelhit',
  },
];

const CulturalHeritage: React.FC = () => {
  const [playingAudio, setPlayingAudio] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Heritage' },
    { id: 'music', name: 'Music' },
    { id: 'art', name: 'Traditional Arts' },
    { id: 'festival', name: 'Festivals' },
    { id: 'culture', name: 'Cultural Practices' },
  ];

  const filteredElements = selectedCategory === 'all' 
    ? culturalElements 
    : culturalElements.filter(element => element.category === selectedCategory);

  const toggleAudio = (id: number) => {
    setPlayingAudio(playingAudio === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Cultural Heritage
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Immerse yourself in the living traditions that have shaped Moroccan identity 
            for centuries, from ancient Berber customs to vibrant modern celebrations.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Heritage Elements Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredElements.map((element) => (
              <div
                key={element.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <img
                      src={element.image}
                      alt={element.title}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>
                  
                  <div className="md:w-1/2 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {element.title}
                      </h3>
                      {element.category === 'music' && (
                        <button
                          onClick={() => toggleAudio(element.id)}
                          className="p-3 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 transition-colors duration-300"
                        >
                          {playingAudio === element.id ? <Pause size={20} /> : <Play size={20} />}
                        </button>
                      )}
                    </div>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {element.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar size={16} />
                        <span><strong>Origins:</strong> {element.origins}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Users size={16} />
                        <span><strong>Significance:</strong> {element.significance}</span>
                      </div>
                      {element.languages && (
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Music size={16} />
                          <span><strong>Languages:</strong> {element.languages}</span>
                        </div>
                      )}
                      {element.dates && (
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar size={16} />
                          <span><strong>When:</strong> {element.dates}</span>
                        </div>
                      )}
                    </div>

                    <div className="mt-6">
                      <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Cultural Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Cultural Timeline
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-500 to-pink-500"></div>
            
            <div className="space-y-12">
              {[
                { year: '3000 BCE', event: 'Berber Civilization', description: 'Indigenous Berber tribes establish settlements across North Africa' },
                { year: '682 CE', event: 'Islamic Conquest', description: 'Arabs bring Islam and Arabic language to Morocco' },
                { year: '1062', event: 'Almoravid Dynasty', description: 'First major Islamic dynasty establishes Marrakech' },
                { year: '1269', event: 'Marinid Dynasty', description: 'Fes becomes center of Islamic learning and culture' },
                { year: '1912', event: 'French Protectorate', description: 'French influence introduces new cultural elements' },
                { year: '1956', event: 'Independence', description: 'Morocco regains independence and celebrates cultural renaissance' },
              ].map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg">
                      <h3 className="text-xl font-bold text-purple-800 mb-2">{item.year}</h3>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.event}</h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CulturalHeritage;