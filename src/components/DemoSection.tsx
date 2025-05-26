
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Heart, Calendar } from "lucide-react";

const DemoSection = () => {
  const demos = [
    {
      title: "Birthday Standard",
      description: "Sweet and simple birthday wish with romantic elements",
      thumbnail: "bg-gradient-to-br from-pink-200 to-rose-300",
      icon: Calendar,
      type: "standard"
    },
    {
      title: "Birthday Pro",
      description: "3D countdown, floating hearts, and voice messages",
      thumbnail: "bg-gradient-to-br from-purple-200 to-pink-300",
      icon: Heart,
      type: "pro"
    },
    {
      title: "Anniversary Standard",
      description: "Elegant love celebration with gentle animations",
      thumbnail: "bg-gradient-to-br from-rose-200 to-pink-300",
      icon: Heart,
      type: "standard"
    },
    {
      title: "Anniversary Pro",
      description: "Immersive 3D experience with dynamic backgrounds",
      thumbnail: "bg-gradient-to-br from-indigo-200 to-purple-300",
      icon: Heart,
      type: "pro"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          See the Magic in Action
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Experience how your wishes will look and feel
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {demos.map((demo, index) => {
            const IconComponent = demo.icon;
            return (
              <Card key={index} className="hover:scale-105 transition-all duration-300 hover:shadow-xl bg-white/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className={`${demo.thumbnail} rounded-lg h-32 mb-4 flex items-center justify-center relative overflow-hidden`}>
                    <IconComponent className="text-white/80" size={48} />
                    {demo.type === 'pro' && (
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded text-xs font-medium">
                        3D ✨
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <Play className="text-white" size={32} />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{demo.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{demo.description}</p>
                  
                  <Button 
                    variant="outline" 
                    className="w-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 hover:text-white transition-all duration-300"
                  >
                    <Play className="mr-2" size={16} />
                    Play Demo
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
