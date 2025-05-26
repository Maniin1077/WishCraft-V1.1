
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar } from "lucide-react";
import { OccasionType } from "@/pages/Index";

interface OccasionSelectorProps {
  selectedOccasion: OccasionType;
  onOccasionSelect: (occasion: OccasionType) => void;
}

const OccasionSelector = ({ selectedOccasion, onOccasionSelect }: OccasionSelectorProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          Choose Your Occasion
        </h2>
        <p className="text-center text-gray-600 mb-12">
          What magical moment are you celebrating today?
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-pink-100 to-rose-200 border-2 ${
              selectedOccasion === 'birthday' 
                ? 'border-wishcraft-pink shadow-lg scale-105' 
                : 'border-white/50 hover:border-wishcraft-pink'
            }`}
            onClick={() => onOccasionSelect('birthday')}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <Calendar className="mx-auto text-wishcraft-pink animate-pulse-heart" size={48} />
              </div>
              <h3 className="text-2xl font-dancing text-gray-800 mb-2">🎂 Birthday</h3>
              <p className="text-gray-600">Celebrate another year of joy, memories, and dreams</p>
              {selectedOccasion === 'birthday' && (
                <div className="mt-4 text-wishcraft-pink font-medium">Selected ✨</div>
              )}
            </CardContent>
          </Card>
          
          <Card 
            className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br from-purple-100 to-pink-200 border-2 ${
              selectedOccasion === 'anniversary' 
                ? 'border-wishcraft-purple shadow-lg scale-105' 
                : 'border-white/50 hover:border-wishcraft-purple'
            }`}
            onClick={() => onOccasionSelect('anniversary')}
          >
            <CardContent className="p-8 text-center">
              <div className="mb-4">
                <Heart className="mx-auto text-wishcraft-purple animate-pulse-heart" size={48} />
              </div>
              <h3 className="text-2xl font-dancing text-gray-800 mb-2">💍 Anniversary</h3>
              <p className="text-gray-600">Honor the beautiful journey of love and togetherness</p>
              {selectedOccasion === 'anniversary' && (
                <div className="mt-4 text-wishcraft-purple font-medium">Selected ✨</div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OccasionSelector;
