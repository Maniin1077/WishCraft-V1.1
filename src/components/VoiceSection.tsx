
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mic, Heart, User } from "lucide-react";

const VoiceSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-dancing text-gray-800 mb-4">
          Wishing Isn't Just Visual
        </h2>
        <p className="text-lg text-gray-600 mb-12">
          For our special friends with visual or hearing difficulties, we offer voice-based wishes in both male and female tones.
        </p>
        
        <Card className="bg-gradient-to-br from-blue-50 to-indigo-100 border-2 border-blue-200 max-w-2xl mx-auto">
          <CardContent className="p-8">
            <div className="mb-6">
              <Mic className="mx-auto text-blue-500 animate-pulse-heart" size={64} />
            </div>
            
            <h3 className="text-2xl font-dancing text-gray-800 mb-4">
              Voice Wishes for Everyone
            </h3>
            
            <p className="text-gray-600 mb-6">
              Click the voice icon on any wish page to hear warm, heartfelt messages in your preferred voice tone.
            </p>
            
            <div className="flex justify-center space-x-4 mb-6">
              <Button 
                variant="outline" 
                className="hover:bg-blue-500 hover:text-white transition-all duration-300"
              >
                <User className="mr-2" size={20} />
                👨 Male Voice
              </Button>
              <Button 
                variant="outline" 
                className="hover:bg-pink-500 hover:text-white transition-all duration-300"
              >
                <User className="mr-2" size={20} />
                👩 Female Voice
              </Button>
            </div>
            
            <div className="bg-white/50 rounded-lg p-4">
              <p className="text-sm text-gray-700 italic">
                "Every emotion deserves to be heard. We believe in making wishes accessible to everyone, ensuring no one misses out on sharing or receiving love."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default VoiceSection;
