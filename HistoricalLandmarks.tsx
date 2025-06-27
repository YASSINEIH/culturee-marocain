import React, { useState } from 'react';
import { MapPin, Clock, Star, Camera } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const landmarks = [
  {
    id: 1,
    name: 'Ait Ben Haddou',
    type: 'UNESCO World Heritage Site',
    image: 'https://40fc3e72.delivery.rocketcdn.me/wp-content/uploads/2020/04/DSCF1492.jpg',
    description: 'A spectacular fortified village (ksar) along the former caravan route between the Sahara and Marrakech.',
    location: 'Ouarzazate Province',
    established: '11th century',
    significance: 'Traditional Moroccan earthen clay architecture',
    rating: 4.8,
    coordinates: { lat: 31.047, lng: -7.1318 },
    facts: ['Featured in Game of Thrones', 'Made entirely of clay bricks', 'Still inhabited by families'],
  },
  {
    id: 2,
    name: 'Fes el-Bali',
    type: 'UNESCO World Heritage Site',
    image: 'https://media.gettyimages.com/id/908568214/fr/photo/fez-morocco-the-chouara-tannery-in-fes-el-bali-or-old-fes-on-december-31-2017-in-fes-morocco.jpg?s=612x612&w=0&k=20&c=YGS0Ld1ZvVc7DIcTduuDTRatxOQJuQLnzvNMfylbHMQ=',
    description: 'The world\'s largest pedestrian zone and one of the best-preserved medieval Islamic cities.',
    location: 'Fes, Morocco',
    established: '789 CE',
    significance: 'Medieval Islamic architecture and culture',
    rating: 4.9,
    coordinates: { lat: 34.0181, lng: -5.0078 },
    facts: ['9,400 narrow lanes and alleys', 'Home to oldest university', '280,000 inhabitants'],
  },
  {
    id: 3,
    name: 'Meknes Historic City',
    type: 'UNESCO World Heritage Site',
    image: 'https://trekkingthedream.com/wp-content/uploads/2025/01/ait-ben-haddou-2.jpg',
    description: 'Imperial city founded in the 11th century, known for its impressive gates and palaces.',
    location: 'Meknes, Morocco',
    established: '11th century',
    significance: 'Alaouite dynasty imperial architecture',
    rating: 4.7,
    coordinates: { lat: 33.8935, lng: -5.5473 },
    facts: ['Bab Mansour gate masterpiece', 'Sultan Moulay Ismail\'s capital', 'Royal stables for 12,000 horses'],
  },
  {
    id: 4,
    name: 'Volubilis',
    type: 'Archaeological Site',
    image: 'https://media.gettyimages.com/id/520466906/es/foto/roman-ruins-at-volubilis-morrocco-africa.jpg?s=612x612&w=0&k=20&c=GNK2_F5UAYkJjUZBOzHGb-Br8WSBRf8TyKj3jQj2Ym0=',
    description: 'Partially excavated Roman city featuring the best-preserved Roman ruins in Morocco.',
    location: 'Near Meknes',
    established: '3rd century BCE',
    significance: 'Roman colonial architecture in Africa',
    rating: 4.6,
    coordinates: { lat: 34.0745, lng: -5.5534 },
    facts: ['Magnificent floor mosaics', 'Triumphal arch of Caracalla', 'Olive oil production center'],
  },
  {
    id: 5,
    name: 'Koutoubia Mosque',
    type: 'Religious Monument',
    image: 'https://media.istockphoto.com/id/874871584/photo/mosque-koutoubia-marrakech.jpg?s=612x612&w=0&k=20&c=gHmgSH75f7zRtSEHMNBCu_Nu-jfjT6FwSTgTeZc_q8I=',
    description: 'The largest mosque in Marrakech with its iconic minaret visible throughout the city.',
    location: 'Marrakech, Morocco',
    established: '1150 CE',
    significance: 'Almohad architecture masterpiece',
    rating: 4.8,
    coordinates: { lat: 31.6236, lng: -7.9928 },
    facts: ['77-meter tall minaret', 'Almohad architectural style', 'Books market nearby (Kutub)'],
  },
  {
    id: 6,
    name: 'Hassan II Mosque',
    type: 'Modern Religious Monument',
    image: 'https://t3.ftcdn.net/jpg/11/23/10/04/360_F_1123100474_aRdti9oucaI5tNwc9b8Et2QjlNfQ8K9V.jpg',
    description: 'One of the largest mosques in the world, partially built over the Atlantic Ocean.',
    location: 'Casablanca, Morocco',
    established: '1993 CE',
    significance: 'Modern Islamic architecture',
    rating: 4.9,
    coordinates: { lat: 33.6084, lng: -7.6326 },
    facts: ['210-meter tall minaret', 'Accommodates 105,000 worshippers', 'Retractable roof'],
  },
];

const HistoricalLandmarks: React.FC = () => {
  const [selectedLandmark, setSelectedLandmark] = useState<typeof landmarks[0] | null>(null);
  const [filterType, setFilterType] = useState('all');
  const { t } = useLanguage();

  const landmarkTypes = [
    { id: 'all', name: 'All Sites' },
    { id: 'UNESCO World Heritage Site', name: 'UNESCO Sites' },
    { id: 'Religious Monument', name: 'Religious Sites' },
    { id: 'Archaeological Site', name: 'Archaeological' },
  ];

  const filteredLandmarks = filterType === 'all' 
    ? landmarks 
    : landmarks.filter(landmark => landmark.type === filterType);

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-amber-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-stone-900 via-amber-900 to-orange-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('historicalLandmarks')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Journey through millennia of Moroccan history, from ancient Roman ruins 
            to magnificent Islamic architecture that tells the story of civilizations.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {landmarkTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setFilterType(type.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filterType === type.id
                    ? 'bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {type.name}
              </button>
            ))}
          </div>

          {/* Landmarks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredLandmarks.map((landmark) => (
              <div
                key={landmark.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => setSelectedLandmark(landmark)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={landmark.image}
                    alt={landmark.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {landmark.type}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4">
                    <button className="p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-300 opacity-0 group-hover:opacity-100">
                      <Camera size={16} />
                    </button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors duration-300">
                    {landmark.name}
                  </h3>
                  
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-gray-600 text-sm">{landmark.location}</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-3">
                    <Clock size={16} className="text-gray-500" />
                    <span className="text-gray-600 text-sm">{t('established')}: {landmark.established}</span>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="text-gray-700 font-semibold">{landmark.rating}</span>
                    <span className="text-gray-500 text-sm">/5.0</span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {landmark.description}
                  </p>

                  <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                    Explore Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landmark Detail Modal */}
      {selectedLandmark && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto shadow-2xl">
            <div className="relative">
              <img
                src={selectedLandmark.image}
                alt={selectedLandmark.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedLandmark(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-3xl font-bold text-gray-900">{selectedLandmark.name}</h2>
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedLandmark.type}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Details</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} className="text-gray-500" />
                      <span className="text-gray-700">{selectedLandmark.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-gray-700">{selectedLandmark.established}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Star size={16} className="text-yellow-500 fill-current" />
                      <span className="text-gray-700">{selectedLandmark.rating}/5.0</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Interesting Facts</h3>
                  <ul className="space-y-2">
                    {selectedLandmark.facts.map((fact, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-amber-500 mt-1">•</span>
                        <span className="text-gray-700 text-sm">{fact}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Description</h3>
                <p className="text-gray-600 leading-relaxed">{selectedLandmark.description}</p>
                <p className="text-gray-600 leading-relaxed mt-2">
                  <strong>Historical Significance:</strong> {selectedLandmark.significance}
                </p>
              </div>

              <div className="flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300">
                  {t('bookTour')}
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                  Virtual Tour
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Map Section */}
      <section className="py-16 bg-gradient-to-r from-amber-100 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Explore Interactive Map
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the geographical distribution of Morocco's historical treasures 
            and plan your cultural journey across ancient sites.
          </p>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-200 rounded-lg flex items-center justify-center">
              <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HistoricalLandmarks;