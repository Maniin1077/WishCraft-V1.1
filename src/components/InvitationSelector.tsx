
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Calendar, Home, PartyPopper, Users, Gift } from "lucide-react";

interface InvitationSelectorProps {
  onInvitationSelect: (type: string) => void;
}

const InvitationSelector = ({ onInvitationSelect }: InvitationSelectorProps) => {
  const invitationTypes = [
    {
      id: 'birthday-party',
      title: '🎂 Birthday Party',
      description: 'Celebrate another year of joy with friends and family',
      icon: PartyPopper,
      color: 'from-pink-100 to-rose-200',
      borderColor: 'wishcraft-pink'
    },
    {
      id: 'wedding-ceremony',
      title: '💍 Wedding Ceremony',
      description: 'Join us as two hearts become one in holy matrimony',
      icon: Heart,
      color: 'from-purple-100 to-pink-200',
      borderColor: 'wishcraft-purple'
    },
    {
      id: 'arubadhaam-kalyanam',
      title: '🌸 Arubadhaam Kalyanam',
      description: 'Celebrating 60 blessed years of marriage and love',
      icon: Calendar,
      color: 'from-yellow-100 to-orange-200',
      borderColor: 'orange-500'
    },
    {
      id: 'engagement',
      title: '💎 Engagement',
      description: 'Witness the beginning of our forever journey',
      icon: Gift,
      color: 'from-emerald-100 to-teal-200',
      borderColor: 'emerald-500'
    },
    {
      id: 'housewarming',
      title: '🏠 Housewarming',
      description: 'Help us make our new house a home',
      icon: Home,
      color: 'from-blue-100 to-indigo-200',
      borderColor: 'blue-500'
    },
    {
      id: 'anniversary-celebration',
      title: '🎊 Anniversary Party',
      description: 'Celebrate years of love, laughter, and memories',
      icon: Users,
      color: 'from-violet-100 to-purple-200',
      borderColor: 'violet-500'
    }
  ];

  return (
    <section className="py-20 px-4 animate-fade-in-up">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          Create Stunning Digital Invitations
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Say goodbye to paper cards. Welcome to the future of invitations.
        </p>
        
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-white/30 max-w-3xl mx-auto">
          <h3 className="text-xl font-dancing text-gray-800 mb-3 text-center">
            ✨ Why Digital Invitations?
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center space-x-2">
              <Heart className="text-wishcraft-pink" size={16} />
              <span>Interactive RSVP tracking</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="text-wishcraft-purple" size={16} />
              <span>Built-in countdown timer</span>
            </div>
            <div className="flex items-center space-x-2">
              <PartyPopper className="text-orange-500" size={16} />
              <span>Music & animations</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="text-blue-500" size={16} />
              <span>Easy sharing via link</span>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {invitationTypes.map((invitation) => {
            const IconComponent = invitation.icon;
            
            return (
              <Card 
                key={invitation.id}
                className={`cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${invitation.color} border-2 border-white/50 hover:border-gray-300`}
                onClick={() => onInvitationSelect(invitation.id)}
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4">
                    <IconComponent className={`mx-auto text-${invitation.borderColor} animate-pulse-heart`} size={40} />
                  </div>
                  <h3 className="text-xl font-dancing text-gray-800 mb-3">{invitation.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{invitation.description}</p>
                  <div className="text-xs text-gray-500 bg-white/30 rounded-full px-3 py-1">
                    Click to create invitation
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
            <h3 className="text-2xl font-dancing text-gray-800 mb-4">
              🎯 Perfect for Modern Celebrations
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Create website-based invitations that your guests will never forget. Each invitation includes 
              beautiful animations, background music, photo galleries, venue details, and real-time RSVP tracking. 
              Share via WhatsApp, SMS, or social media - no printing required!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvitationSelector;
