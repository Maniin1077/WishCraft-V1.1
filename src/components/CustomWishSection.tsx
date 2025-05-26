
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Image, Music, User } from "lucide-react";

const CustomWishSection = () => {
  return (
    <section className="py-20 px-4 bg-white/20 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          Got Your Own Idea?
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Let us design it for you. Personalized messages, custom photos, your favorite music — we'll bring it all to life.
        </p>
        
        <Card className="bg-gradient-to-br from-yellow-50 to-orange-100 border-2 border-orange-200">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-dancing text-gray-800 mb-4">
                  Describe Your Wish
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <User className="text-orange-500" size={24} />
                    <span className="text-gray-700">Recipient's name and relationship</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="text-orange-500" size={24} />
                    <span className="text-gray-700">Special message or poem</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Image className="text-orange-500" size={24} />
                    <span className="text-gray-700">Your cherished photos</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Music className="text-orange-500" size={24} />
                    <span className="text-gray-700">Favorite songs or audio</span>
                  </div>
                </div>
                
                <Button className="mt-6 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white font-medium">
                  <Heart className="mr-2" size={20} />
                  Request Custom Wish
                </Button>
              </div>
              
              <div className="bg-white/50 rounded-lg p-6 text-center">
                <h4 className="text-xl font-dancing text-gray-800 mb-3">
                  Perfect For:
                </h4>
                <ul className="text-gray-700 space-y-2 text-left">
                  <li>• Inside jokes and shared memories</li>
                  <li>• Unique love stories</li>
                  <li>• Special milestones</li>
                  <li>• Cultural or traditional themes</li>
                  <li>• Business celebrations</li>
                </ul>
                
                <p className="text-sm text-gray-600 mt-4 italic">
                  We'll create a fully personalized website just for your special moment.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CustomWishSection;
