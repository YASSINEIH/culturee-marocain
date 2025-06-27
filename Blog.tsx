import React, { useState } from 'react';
import { Calendar, User, Tag, ArrowRight } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';

const blogPosts = [
  {
    id: 1,
    title: 'Essential Cultural Etiquette for Visiting Morocco',
    excerpt: 'Navigate Moroccan customs with confidence and respect local traditions during your visit.',
    category: 'Cultural Tips',
    author: 'Amina Hassan',
    date: '2024-01-15',
    readTime: '8 min read',
    image: 'https://i0.wp.com/www.wandererscompass.com/wp-content/uploads/2023/05/IMG_7599-1024x768.jpeg?ssl=1',
    content: `
      Morocco is a land of rich traditions and deep-rooted customs. Understanding local etiquette will enhance your experience and show respect for the culture.

      ## Greeting Customs
      - Use "As-salamu alaykum" (peace be upon you) as a respectful greeting
      - Handshakes are common among men, but wait for women to extend their hand first
      - Close friends may exchange kisses on both cheeks

      ## Dress Code Guidelines
      - Dress modestly, especially when visiting religious sites
      - Cover shoulders and knees in public areas
      - Remove shoes when entering mosques or homes
      - Bring a scarf to cover your head when visiting mosques

      ## Dining Etiquette
      - Eat with your right hand, as the left is considered unclean
      - It's polite to try a little of everything offered
      - Accept mint tea graciously - it's a sign of hospitality
      - Leave a little food on your plate to show you're satisfied
    `,
  },
  {
    id: 2,
    title: 'Hidden Gems: Off-the-Beaten-Path Destinations',
    excerpt: 'Discover Morocco\'s secret treasures beyond the popular tourist routes.',
    category: 'Travel Guide',
    author: 'Omar Benali',
    date: '2024-01-12',
    readTime: '12 min read',
    image: 'https://images.pexels.com/photos/3935702/pexels-photo-3935702.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    content: `
      While Marrakech and Casablanca draw millions of visitors, Morocco's hidden gems offer authentic experiences away from the crowds.

      ## Akchour Waterfalls
      Located near Chefchaouen, these stunning waterfalls offer a refreshing escape into nature. The hike through the Rif Mountains provides breathtaking views and a chance to connect with local Berber communities.

      ## Legzira Beach
      Famous for its natural red stone arches carved by the Atlantic Ocean, this beach near Sidi Ifni offers spectacular sunsets and a peaceful atmosphere perfect for reflection.

      ## Bin el Ouidane
      This artificial lake in the Atlas Mountains is surrounded by dramatic landscapes and offers activities like kayaking, fishing, and hiking. The nearby Berber villages provide authentic cultural experiences.

      ## Tafraoute
      Known for its pink granite rocks and almond groves, this small town in the Anti-Atlas Mountains offers incredible rock formations and traditional Berber architecture.
    `,
  },
  {
    id: 3,
    title: 'Mastering the Art of Haggling in Moroccan Souks',
    excerpt: 'Learn the cultural dance of negotiation in traditional markets across Morocco.',
    category: 'Shopping Guide',
    author: 'Fatima Al-Zahra',
    date: '2024-01-10',
    readTime: '6 min read',
    image: 'https://media.gettyimages.com/id/982100522/fr/photo/rue-anim%C3%A9e-dans-les-souks-de-marrakech-maroc.jpg?s=612x612&w=0&k=20&c=FbBISlD6-9lA4PzQt7YDiOBk4jDZhQOexIJKPvbmoV8=',
    content: `
      Haggling in Moroccan souks is not just about getting a good price - it's a cultural tradition and social interaction that's been practiced for centuries.

      ## Understanding the Culture
      Haggling is expected and respected in Moroccan markets. Vendors often start with prices 3-4 times higher than what they're willing to accept. It's not personal - it's business and tradition.

      ## Basic Haggling Strategy
      1. **Show Interest but Not Desperation**: Examine items casually
      2. **Start Low**: Offer 25-30% of the asking price
      3. **Be Prepared to Walk Away**: This often brings the best offers
      4. **Stay Friendly**: Keep the conversation light and respectful
      5. **Know When to Stop**: Once you reach a fair price, accept it graciously

      ## What Not to Do
      - Don't haggle if you have no intention of buying
      - Avoid being aggressive or rude
      - Don't compare prices loudly between vendors
      - Never haggle for food or services with posted prices

      ## Best Items to Haggle For
      - Carpets and textiles
      - Leather goods
      - Jewelry and crafts
      - Antiques and decorative items
    `,
  },
  {
    id: 4,
    title: 'Artisan Workshop Experiences: Preserving Traditional Crafts',
    excerpt: 'Meet the skilled craftspeople keeping Morocco\'s artistic heritage alive through hands-on workshops.',
    category: 'Artisan Crafts',
    author: 'Youssef Idrissi',
    date: '2024-01-08',
    readTime: '10 min read',
    image: 'https://www.shutterstock.com/image-photo/moroccan-handicrafts-shop-260nw-671214439.jpg',
    content: `
      Morocco's artisan traditions have been passed down through generations, creating a living museum of skills and techniques that visitors can experience firsthand.

      ## Pottery Workshops in Safi
      Safi is Morocco's pottery capital, where you can learn the ancient art of ceramic making. Watch master potters shape clay on traditional wheels and learn about the unique glazing techniques that create Safi's distinctive blue and white patterns.

      ## Carpet Weaving in the Atlas Mountains
      Berber women in mountain villages continue the tradition of hand-weaving carpets using techniques unchanged for centuries. Participate in workshops where you'll learn about natural dyes, traditional patterns, and the cultural significance of different designs.

      ## Metalwork in Fes
      The copper and brass workers of Fes create intricate lanterns, trays, and decorative items using techniques dating back to medieval times. Learn hammering, engraving, and finishing techniques in workshops located in the ancient medina.

      ## Leather Tanning in Marrakech
      Visit the famous tanneries and learn about the traditional leather-making process. While you won't handle the tanning chemicals, you can participate in leather crafting workshops to create your own bags, belts, or decorative items.

      ## What to Expect
      - Small group sizes (usually 4-8 people)
      - 2-4 hour workshops
      - All materials provided
      - Take home your creations
      - Certificate of participation
    `,
  },
];

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);
  const [filterCategory, setFilterCategory] = useState('all');
  const { t } = useLanguage();

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'Cultural Tips', name: 'Cultural Tips' },
    { id: 'Travel Guide', name: 'Travel Guides' },
    { id: 'Shopping Guide', name: 'Shopping' },
    { id: 'Artisan Crafts', name: 'Artisan Crafts' },
  ];

  const filteredPosts = filterCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === filterCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Travel Tips & Cultural Insights
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Discover insider knowledge, cultural insights, and practical advice 
            to make your Moroccan adventure authentic and memorable.
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
                    ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User size={16} />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <span className="text-indigo-600 font-medium">{post.readTime}</span>
                  </div>

                  <button className="flex items-center space-x-2 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors duration-300 group">
                    <span>{t('readMore')}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-auto shadow-2xl">
            <div className="relative">
              <img
                src={selectedPost.image}
                alt={selectedPost.title}
                className="w-full h-64 object-cover"
              />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors duration-300"
              >
                ✕
              </button>
              <div className="absolute bottom-4 left-4">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedPost.category}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{selectedPost.title}</h1>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-2">
                  <User size={16} />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} />
                  <span>{new Date(selectedPost.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Tag size={16} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                        {paragraph.replace('##', '').trim()}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('-')) {
                    return (
                      <li key={index} className="text-gray-700 mb-2">
                        {paragraph.replace('-', '').trim()}
                      </li>
                    );
                  }
                  if (paragraph.match(/^\d+\./)) {
                    return (
                      <li key={index} className="text-gray-700 mb-2">
                        {paragraph.replace(/^\d+\./, '').trim()}
                      </li>
                    );
                  }
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    );
                  }
                  return null;
                })}
              </div>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
                      <User size={20} className="text-indigo-600" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{selectedPost.author}</p>
                      <p className="text-sm text-gray-500">Travel & Culture Writer</p>
                    </div>
                  </div>
                  <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300">
                    Follow Author
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with Moroccan Culture
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Get the latest travel tips, cultural insights, and exclusive content 
            delivered to your inbox every month.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;