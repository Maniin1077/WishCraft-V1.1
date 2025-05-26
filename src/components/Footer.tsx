
import { Heart, Calendar } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <Heart className="text-wishcraft-pink mr-2" size={24} />
              <h3 className="text-2xl font-vibes">WishCraft</h3>
            </div>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Let's make emotions unforgettable — one website at a time. 
              Not just a wish... A memory.
            </p>
            <p className="text-sm text-gray-400">
              🎁 Creating magical moments through technology and emotion
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#occasions" className="hover:text-wishcraft-pink transition-colors">Choose Occasion</a></li>
              <li><a href="#pricing" className="hover:text-wishcraft-pink transition-colors">Pricing</a></li>
              <li><a href="#demos" className="hover:text-wishcraft-pink transition-colors">View Demos</a></li>
              <li><a href="#custom" className="hover:text-wishcraft-pink transition-colors">Custom Wishes</a></li>
              <li><a href="#voice" className="hover:text-wishcraft-pink transition-colors">Voice Features</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p>📧 wishcraft@example.com</p>
              <p>📸 @wishcraft</p>
              <p>📱 +91 98765 43210</p>
              <p className="text-sm text-gray-400 mt-4">
                Available 9 AM - 9 PM IST
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WishCraft. Made with ❤️ for creating memories.
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>•</span>
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
              <span>•</span>
              <a href="#support" className="hover:text-white transition-colors">Support</a>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <p className="text-gray-500 text-sm italic font-dancing">
              "Every emotion deserves to be unforgettable"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
