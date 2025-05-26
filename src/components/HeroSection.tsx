
import { Heart } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
        <div className="flex items-center justify-center mb-6">
          <Heart className="text-wishcraft-pink animate-pulse-heart mr-4" size={48} />
          <h1 className="text-5xl md:text-7xl font-vibes shimmer-text">
            WishCraft
          </h1>
          <Heart className="text-wishcraft-pink animate-pulse-heart ml-4" size={48} />
        </div>
        
        <h2 className="text-2xl md:text-4xl font-dancing text-gray-700 mb-6 leading-relaxed">
          Not just a wish... A memory.
        </h2>
        
        <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Surprise your loved ones with beautiful web-based wishes, crafted with love and music.
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/30">
          <p className="text-lg font-medium text-gray-700 mb-4">
            Say goodbye to boring texts.
          </p>
          <p className="text-base text-gray-600">
            Welcome to a new way of showing emotions — through websites full of animation, music, and magic.
          </p>
        </div>
        
        <div className="animate-bounce-gentle">
          <p className="text-sm text-gray-500 mb-2">Scroll down to create your magical wish</p>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
