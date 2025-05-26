
import { Heart, Calendar, PartyPopper, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-8">
          The Story Behind WishCraft
        </h2>
        
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            WishCraft was born from a simple but powerful idea — to make heartfelt wishes and celebrations truly memorable. 
            We realized that in today's fast-paced digital world, most birthday or anniversary greetings had become plain text 
            messages or generic cards. While convenient, these often lacked the warmth, emotion, and personal touch that such 
            special occasions deserve.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Inspired by this gap, our vision was to create a platform where people could send more than just words — 
            they could send experiences. Wishes and invitations that combine beautiful visuals, music, animation, voice, 
            and personalized messages to evoke real emotions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Wishes Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
            <div className="flex items-center justify-center mb-6">
              <Heart className="text-wishcraft-pink mr-3" size={32} />
              <h3 className="text-2xl font-dancing text-gray-800">Beautiful Wishes</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Transform ordinary greetings into magical experiences with music, animations, and heartfelt messages. 
              Perfect for birthdays and anniversaries.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Calendar className="text-wishcraft-pink mr-2" size={16} />
                Interactive countdown timers
              </li>
              <li className="flex items-center">
                <Heart className="text-wishcraft-pink mr-2" size={16} />
                Floating hearts and animations
              </li>
              <li className="flex items-center">
                <Users className="text-wishcraft-pink mr-2" size={16} />
                Voice message options
              </li>
            </ul>
          </div>

          {/* Invitations Section */}
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
            <div className="flex items-center justify-center mb-6">
              <PartyPopper className="text-purple-500 mr-3" size={32} />
              <h3 className="text-2xl font-dancing text-gray-800">Digital Invitations</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Create stunning website-based invitations for all your celebrations. From birthday parties to 
              weddings and Arubadhaam Kalyanam ceremonies.
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <Calendar className="text-purple-500 mr-2" size={16} />
                RSVP tracking and management
              </li>
              <li className="flex items-center">
                <PartyPopper className="text-purple-500 mr-2" size={16} />
                Interactive photo galleries
              </li>
              <li className="flex items-center">
                <Users className="text-purple-500 mr-2" size={16} />
                Guest message boards
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-8 border border-pink-200">
            <h3 className="text-2xl font-dancing text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Today, WishCraft stands as a heartfelt tribute to the art of celebrating life's special moments. 
              Whether it's a romantic wish for your partner or a grand invitation for your wedding ceremony, 
              we believe every celebration deserves to be crafted with love, creativity, and technology. 
              A place where every greeting is a crafted memory, not just a message.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
