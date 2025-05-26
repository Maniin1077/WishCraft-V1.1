
import { Card, CardContent } from "@/components/ui/card";
import { Heart, User, Calendar } from "lucide-react";
import { OccasionType, WishType } from "@/pages/Index";

interface WishCategoriesProps {
  occasion: OccasionType;
  selectedWishType: WishType;
  onWishTypeSelect: (wishType: WishType) => void;
}

const WishCategories = ({ occasion, selectedWishType, onWishTypeSelect }: WishCategoriesProps) => {
  const birthdayCategories = [
    {
      type: 'romantic' as WishType,
      title: '💕 Romantic Wish',
      description: 'Perfect for your special someone with love-filled animations',
      icon: Heart,
      color: 'from-pink-100 to-rose-200',
      borderColor: 'wishcraft-pink'
    },
    {
      type: 'mass' as WishType,
      title: '👨‍👩‍👧‍👦 Mass Wish',
      description: 'Great for family, friends, and group celebrations',
      icon: User,
      color: 'from-blue-100 to-indigo-200',
      borderColor: 'blue-500'
    },
    {
      type: 'stylish' as WishType,
      title: '✨ Stylish Wish',
      description: 'Modern, trendy design for the fashion-forward',
      icon: Calendar,
      color: 'from-purple-100 to-violet-200',
      borderColor: 'purple-500'
    }
  ];

  const anniversaryCategories = [
    {
      type: 'romantic' as WishType,
      title: '💖 Romantic',
      description: 'Deeply personal and intimate for your beloved partner',
      icon: Heart,
      color: 'from-pink-100 to-rose-200',
      borderColor: 'wishcraft-pink'
    },
    {
      type: 'celebratory' as WishType,
      title: '🎉 Celebratory',
      description: 'Perfect for friends and relatives to join the celebration',
      icon: Calendar,
      color: 'from-yellow-100 to-orange-200',
      borderColor: 'orange-500'
    },
    {
      type: 'sweet' as WishType,
      title: '🌸 Sweet',
      description: 'Emotional and elegant with gentle, heartwarming touches',
      icon: Heart,
      color: 'from-purple-100 to-pink-200',
      borderColor: 'purple-400'
    }
  ];

  const categories = occasion === 'birthday' ? birthdayCategories : anniversaryCategories;

  return (
    <section className="py-20 px-4 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          Choose Your Wish Style
        </h2>
        <p className="text-center text-gray-600 mb-12">
          What kind of emotion do you want to express?
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const isSelected = selectedWishType === category.type;
            
            return (
              <Card 
                key={category.type}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${category.color} border-2 ${
                  isSelected
                    ? `border-${category.borderColor} shadow-lg scale-105` 
                    : 'border-white/50 hover:border-gray-300'
                }`}
                onClick={() => onWishTypeSelect(category.type)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className={`mx-auto text-${category.borderColor} animate-pulse-heart`} size={40} />
                  </div>
                  <h3 className="text-xl font-dancing text-gray-800 mb-3">{category.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{category.description}</p>
                  {isSelected && (
                    <div className={`mt-4 text-${category.borderColor} font-medium`}>Selected ✨</div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WishCategories;
