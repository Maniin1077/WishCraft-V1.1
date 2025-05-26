import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Heart, Users, Calendar, Mic } from "lucide-react";
import { INVITATION_PRICING, DEFAULT_INVITATION_PRICING } from "@/config/invitationPricing";

interface InvitationPricingProps {
  invitationType: string;
}

const InvitationPricing = ({ invitationType }: InvitationPricingProps) => {
  const getInvitationDetails = (type: string) => {
    return INVITATION_PRICING[type] || DEFAULT_INVITATION_PRICING;
  };

  const invitationDetails = getInvitationDetails(invitationType);

  return (
    <section className="py-20 px-4 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          {invitationDetails.emoji} {invitationDetails.name} Invitation Packages
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Choose the perfect invitation experience for your special celebration
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Standard Package */}
          <Card className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-200 hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-dancing text-gray-800">
                Standard Invitation
              </CardTitle>
              <div className="text-3xl font-bold text-gray-700">
                ₹{invitationDetails.standard}
              </div>
              <p className="text-gray-600">Beautiful & functional</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Event details & venue info</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Countdown timer to event</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">RSVP functionality</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Background music</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Photo gallery (up to 5 images)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Mobile responsive design</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-green-500" size={20} />
                <span className="text-gray-700">Valid until event date</span>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-medium py-3">
                <Calendar className="mr-2" size={20} />
                Create Standard Invitation
              </Button>
            </CardContent>
          </Card>

          {/* Pro Package */}
          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-300 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Premium ✨
            </div>
            
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-dancing text-gray-800">
                Pro Invitation
              </CardTitle>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                ₹{invitationDetails.pro}
              </div>
              <p className="text-gray-600">Unforgettable experience</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">All Standard features included</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">3D animations & transitions</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Floating hearts & particles</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Video background support</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mic className="text-purple-500" size={20} />
                <span className="text-gray-700">Voice message integration</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-purple-500" size={20} />
                <span className="text-gray-700">Guest message board</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Unlimited photo gallery</span>
              </div>
              <div className="flex items-center space-x-3">
                <Check className="text-purple-500" size={20} />
                <span className="text-gray-700">Custom domain option</span>
              </div>
              
              <Button className="w-full mt-6 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3">
                <Heart className="mr-2" size={20} />
                Create Pro Invitation
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-600">
            🚀 <strong>Quick Delivery:</strong> Invitations ready within 2-3 days. Perfect for last-minute planning!
          </p>
        </div>
      </div>
    </section>
  );
};

export default InvitationPricing;
