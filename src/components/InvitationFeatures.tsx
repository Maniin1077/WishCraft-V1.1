
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Calendar, Music, Image, MessageCircle, MapPin, Share2 } from "lucide-react";

const InvitationFeatures = () => {
  const features = [
    {
      icon: Calendar,
      title: "Live Countdown",
      description: "Beautiful countdown timer showing days, hours, minutes until your event",
      color: "text-blue-500"
    },
    {
      icon: Users,
      title: "Smart RSVP",
      description: "Track guest responses in real-time with automated confirmations",
      color: "text-green-500"
    },
    {
      icon: Music,
      title: "Background Music",
      description: "Set the perfect mood with carefully selected background tracks",
      color: "text-purple-500"
    },
    {
      icon: Image,
      title: "Photo Gallery",
      description: "Share memories and moments with beautiful image galleries",
      color: "text-pink-500"
    },
    {
      icon: MessageCircle,
      title: "Guest Messages",
      description: "Let guests leave wishes and messages for the hosts",
      color: "text-orange-500"
    },
    {
      icon: MapPin,
      title: "Venue Details",
      description: "Interactive maps and complete venue information",
      color: "text-red-500"
    },
    {
      icon: Share2,
      title: "Easy Sharing",
      description: "Share via WhatsApp, SMS, email, or social media instantly",
      color: "text-indigo-500"
    },
    {
      icon: Heart,
      title: "Romantic Themes",
      description: "Beautiful themes perfect for weddings and anniversaries",
      color: "text-rose-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          Everything You Need for Perfect Invitations
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Our digital invitations come packed with features that make your celebration memorable 
          and planning effortless.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            
            return (
              <Card 
                key={index}
                className="bg-white border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className={`mx-auto ${feature.color} animate-pulse-heart`} size={32} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl p-8 border border-purple-200">
          <h3 className="text-2xl font-dancing text-center text-gray-800 mb-6">
            ✨ Why Choose WishCraft Invitations?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-700">Eco-Friendly</div>
              <div className="text-sm text-gray-600">No paper waste</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">24/7</div>
              <div className="text-gray-700">Accessibility</div>
              <div className="text-sm text-gray-600">View anytime, anywhere</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-600 mb-2">∞</div>
              <div className="text-gray-700">Shareable</div>
              <div className="text-sm text-gray-600">Unlimited sharing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationFeatures;
