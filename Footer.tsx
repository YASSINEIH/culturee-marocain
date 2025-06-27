import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Morocco Culture</h3>
            <p className="text-gray-300 leading-relaxed">
              Discover the rich tapestry of Moroccan art, culture, and heritage. 
              From ancient traditions to modern expressions, explore the beauty 
              that makes Morocco truly unique.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Art Galleries</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Cultural Tours</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Cooking Classes</a></li>
              <li><a href="#" className="text-gray-300 hover:text-amber-400 transition-colors">Artisan Workshops</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-amber-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-amber-400" />
                <span className="text-gray-300">Marrakech, Morocco</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-amber-400" />
                <span className="text-gray-300">info@moroccoculture.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-amber-400" />
                <span className="text-gray-300">+212 524 123 456</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" />
            <span>for Moroccan Heritage</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;