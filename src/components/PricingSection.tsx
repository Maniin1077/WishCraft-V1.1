
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Heart, Mic } from "lucide-react";
import { OccasionType, WishType } from "@/pages/Index";

interface PricingSectionProps {
  occasion: OccasionType;
  wishType: WishType;
}

const PricingSection = ({ occasion, wishType }: PricingSectionProps) => {
  const pricing = {
    birthday: { standard: 199, pro: 259 },
    anniversary: { standard: 239, pro: 299 }
  };

  const currentPricing = occasion ? pricing[occasion] : pricing.birthday;

  return (
    <section className="py-20 px-4 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          Choose Your Package
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Standard or Pro? Let your feelings shine in 3D ✨
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Standard Package */}
          <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-dancing text-gray-800">
                Standard Wish
              </CardTitle>
              <div className="text-3xl font-bold text-gray-700">
                ₹{currentPricing.standard}
              </div>
              <p className="text-gray-600">Perfect for heartfelt wishes</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">One beautiful image</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Romantic message</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Light background music</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Medium heart animation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Fixed design template</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">24-hour access</span>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-medium py-3">
                <Heart className="mr-2" size={20} />
                Create Standard Wish
              </Button>
            </CardContent>
          </Card>

          {/* Pro Package */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Popular ⭐
            </div>
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-dancing text-gray-800">
                Pro Wish (3D Mode)
              </CardTitle>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ₹{currentPricing.pro}
              </div>
              <p className="text-gray-600">Unforgettable 3D experience</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Countdown with intro animation</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Dynamic background changes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Floating hearts & animated text</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">3D card-style effects</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mic className="text-purple-500" size={20} />
                <span className="text-gray-700">Male/Female voice wishes</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Multiple images & music</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Lifetime access</span>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3">
                <Heart className="mr-2" size={20} />
                Create Pro Wish
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            ⏰ <strong>Important:</strong> Submit your wish details 5-7 days before the event for perfect timing!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
