import React, { useState } from 'react';
import { Clock, Users, ChefHat, Heart } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const dishes = [
  {
    id: 1,
    name: 'Chicken Tagine with Preserved Lemons',
    category: 'main',
    image: 'https://www.krumpli.co.uk/wp-content/uploads/2022/05/Chicken-Tagine-with-Preserved-Onions-04-540x720.jpg',
    description: 'A traditional slow-cooked stew featuring tender chicken with preserved lemons and olives.',
    cookTime: '2 hours',
    servings: '4-6 people',
    difficulty: 'Medium',
    region: 'Atlas Mountains',
    ingredients: [
      '1 whole chicken, cut into pieces',
      '2 preserved lemons, quartered',
      '1 cup green olives',
      '1 large onion, sliced',
      '3 cloves garlic, minced',
      '1 tsp ground ginger',
      '1 tsp ground cinnamon',
      '1 bunch fresh cilantro',
      'Saffron threads',
      'Olive oil',
    ],
    instructions: [
      'Heat olive oil in a tagine or heavy pot over medium heat.',
      'Season chicken pieces with salt, pepper, ginger, and cinnamon.',
      'Brown chicken pieces on all sides, then remove and set aside.',
      'Add onions and garlic to the pot, cook until soft.',
      'Return chicken to pot, add preserved lemons and olives.',
      'Add enough water to barely cover, bring to a simmer.',
      'Cover and cook for 1.5-2 hours until chicken is tender.',
      'Garnish with fresh cilantro and serve with bread.',
    ],
  },
  {
    id: 2,
    name: 'Traditional Mint Tea (Atay)',
    category: 'beverage',
    image: 'https://sakiproducts.com/cdn/shop/articles/20230331081541-moroccon-20mint-20tea-20recipe-20blog_1920x1080.webp?v=1680290803',
    description: 'Morocco\'s signature green tea with fresh mint leaves and sugar, served in ornate glasses.',
    cookTime: '15 minutes',
    servings: '4-6 glasses',
    difficulty: 'Easy',
    region: 'Throughout Morocco',
    ingredients: [
      '2 tbsp Chinese green tea',
      '1 large bunch fresh mint',
      '4-6 sugar cubes (to taste)',
      '4 cups water',
    ],
    instructions: [
      'Rinse the teapot with hot water to warm it.',
      'Add green tea to the pot and rinse with a small amount of hot water.',
      'Discard the first rinse water to remove bitterness.',
      'Add fresh mint leaves and sugar to the pot.',
      'Pour boiling water over tea and mint.',
      'Let steep for 3-5 minutes.',
      'Pour tea from height to create foam.',
      'Serve in small glasses, traditionally 3 rounds.',
    ],
  },
  {
    id: 3,
    name: 'Pastilla (B\'stilla)',
    category: 'appetizer',
    image: 'https://www.thrifty.ma/upload/stuff/images/cuisine%20pastilla%20pigeon%20location%20voiture%20maroc.webp',
    description: 'A delicate pastry pie with layers of phyllo dough filled with spiced pigeon or chicken.',
    cookTime: '3 hours',
    servings: '8-10 pieces',
    difficulty: 'Hard',
    region: 'Fes',
    ingredients: [
      '1 whole chicken',
      '8 sheets phyllo dough',
      '6 eggs',
      '1 cup almonds, blanched',
      '1 bunch parsley',
      '1 bunch cilantro',
      '2 tsp ground cinnamon',
      '1 tsp ground ginger',
      'Saffron',
      'Butter for brushing',
    ],
    instructions: [
      'Cook chicken with onions, spices, and herbs until tender.',
      'Shred chicken and reduce cooking liquid.',
      'Beat eggs and cook into scrambled mixture with chicken broth.',
      'Toast and crush almonds with cinnamon.',
      'Layer phyllo sheets in a round pan, brushing with butter.',
      'Add chicken mixture, then egg mixture, then almonds.',
      'Fold phyllo over filling and brush with butter.',
      'Bake at 375°F for 30-40 minutes until golden.',
    ],
  },
  {
    id: 4,
    name: 'Moroccan Couscous',
    category: 'main',
    image: 'https://www.shutterstock.com/image-photo/moroccan-couscous-260nw-640863061.jpg',
    description: 'Fluffy steamed semolina served with vegetables and meat in a flavorful broth.',
    cookTime: '2.5 hours',
    servings: '6-8 people',
    difficulty: 'Medium',
    region: 'Berber Tradition',
    ingredients: [
      '2 cups couscous',
      '1 lb lamb or beef, cubed',
      '2 carrots, chunked',
      '2 zucchini, chunked',
      '1 turnip, chunked',
      '1 cup chickpeas',
      '2 tomatoes',
      '1 bunch cilantro',
      'Ras el hanout spice blend',
      'Butter',
    ],
    instructions: [
      'Steam couscous in couscoussier or steamer for 20 minutes.',
      'Fluff with fork and add butter and salt.',
      'In bottom pot, brown meat with onions and spices.',
      'Add tomatoes and enough water to cover.',
      'Simmer for 1 hour, then add hard vegetables.',
      'Steam couscous again for 20 minutes.',
      'Add soft vegetables to stew in last 20 minutes.',
      'Serve couscous with stew and broth on the side.',
    ],
  },
];

const Cuisine: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<typeof dishes[0] | null>(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const [likedDishes, setLikedDishes] = useState<number[]>([]);
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: 'All Dishes' },
    { id: 'main', name: 'Main Courses' },
    { id: 'appetizer', name: 'Appetizers' },
    { id: 'beverage', name: 'Beverages' },
    { id: 'dessert', name: 'Desserts' },
  ];

  const filteredDishes = filterCategory === 'all' 
    ? dishes 
    : dishes.filter(dish => dish.category === filterCategory);

  const toggleLike = (id: number) => {
    setLikedDishes(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('cuisine')}
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Savor the rich flavors of Morocco through traditional recipes passed down 
            through generations, from aromatic tagines to delicate pastries.
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
                onClick={() => setFilterCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  filterCategory === category.id
                    ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDishes.map((dish) => (
              <div
                key={dish.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => setSelectedDish(dish)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLike(dish.id);
                      }}
                      className={`p-2 rounded-full transition-colors duration-300 ${
                        likedDishes.includes(dish.id)
                          ? 'bg-red-500 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart size={16} fill={likedDishes.includes(dish.id) ? 'currentColor' : 'none'} />
                    </button>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      dish.difficulty === 'Easy' ? 'bg-green-500 text-white' :
                      dish.difficulty === 'Medium' ? 'bg-yellow-500 text-white' :
                      'bg-red-500 text-white'
                    }`}>
                      {dish.difficulty}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors duration-300">
                    {dish.name}
                  </h3>
                  
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {dish.description}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={16} />
                      <span>{dish.cookTime}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={16} />
                      <span>{dish.servings}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <ChefHat size={16} />
                      <span>{dish.region}</span>
                    </div>
                  </div>

                  <button className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recipe Detail Modal */}
      {selectedDish && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto shadow-2xl">
            <div className="relative">
              <img
                src={selectedDish.image}
                alt={selectedDish.name}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedDish(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300"
              >
                ✕
              </button>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedDish.name}</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Clock size={16} className="text-gray-500" />
                  <span className="text-gray-700">{selectedDish.cookTime}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users size={16} className="text-gray-500" />
                  <span className="text-gray-700">{selectedDish.servings}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ChefHat size={16} className="text-gray-500" />
                  <span className="text-gray-700">{selectedDish.region}</span>
                </div>
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">{selectedDish.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('ingredients')}</h3>
                  <ul className="space-y-2">
                    {selectedDish.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <span className="text-red-500 mt-1">•</span>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{t('instructions')}</h3>
                  <ol className="space-y-3">
                    {selectedDish.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 text-sm leading-relaxed">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                  Start Cooking
                </button>
                <button className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300">
                  Save Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cooking Classes Section */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Learn to Cook Moroccan
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join our authentic cooking classes led by local chefs and learn the 
            secrets of traditional Moroccan cuisine in a hands-on environment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Beginner Classes', 'Advanced Techniques', 'Private Sessions'].map((option, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option}</h3>
                <p className="text-gray-600 mb-4">
                  Perfect for {index === 0 ? 'first-time cooks' : index === 1 ? 'experienced chefs' : 'personalized learning'}
                </p>
                <button className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-orange-700 transition-all duration-300">
                  {t('bookTour')}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cuisine;