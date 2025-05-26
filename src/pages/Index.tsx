
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import OccasionSelector from "@/components/OccasionSelector";
import WishCategories from "@/components/WishCategories";
import PricingSection from "@/components/PricingSection";
import InvitationSelector from "@/components/InvitationSelector";
import InvitationPricing from "@/components/InvitationPricing";
import InvitationFeatures from "@/components/InvitationFeatures";
import DemoSection from "@/components/DemoSection";
import VoiceSection from "@/components/VoiceSection";
import CustomWishSection from "@/components/CustomWishSection";
import AboutSection from "@/components/AboutSection";
import TermsSection from "@/components/TermsSection";
import Footer from "@/components/Footer";
import FloatingHearts from "@/components/FloatingHearts";
import { Button } from "@/components/ui/button";
import { Heart, PartyPopper } from "lucide-react";

export type OccasionType = "birthday" | "anniversary" | null;
export type WishType = "romantic" | "mass" | "stylish" | "celebratory" | "sweet" | null;

const Index = () => {
  const [selectedOccasion, setSelectedOccasion] = useState<OccasionType>(null);
  const [selectedWishType, setSelectedWishType] = useState<WishType>(null);
  const [mode, setMode] = useState<"wishes" | "invitations">("wishes");
  const [selectedInvitationType, setSelectedInvitationType] = useState<string | null>(null);

  console.log("Current selections:", { selectedOccasion, selectedWishType, mode, selectedInvitationType });

  const resetSelections = () => {
    setSelectedOccasion(null);
    setSelectedWishType(null);
    setSelectedInvitationType(null);
  };

  const handleModeSwitch = (newMode: "wishes" | "invitations") => {
    setMode(newMode);
    resetSelections();
  };

  return (
    <div className="min-h-screen bg-love-gradient overflow-x-hidden">
      <FloatingHearts />
      
      <HeroSection />
      
      {/* Mode Selector */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-dancing text-gray-800 mb-8">
            What would you like to create today?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Button
              onClick={() => handleModeSwitch("wishes")}
              className={`h-24 text-lg font-dancing transition-all duration-300 ${
                mode === "wishes"
                  ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white scale-105 shadow-lg"
                  : "bg-white text-gray-700 border-2 border-pink-300 hover:border-pink-500"
              }`}
            >
              <Heart className="mr-3" size={24} />
              Beautiful Wishes
            </Button>
            
            <Button
              onClick={() => handleModeSwitch("invitations")}
              className={`h-24 text-lg font-dancing transition-all duration-300 ${
                mode === "invitations"
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white scale-105 shadow-lg"
                  : "bg-white text-gray-700 border-2 border-purple-300 hover:border-purple-500"
              }`}
            >
              <PartyPopper className="mr-3" size={24} />
              Digital Invitations
            </Button>
          </div>
        </div>
      </section>

      {/* Wishes Flow */}
      {mode === "wishes" && (
        <>
          <OccasionSelector 
            selectedOccasion={selectedOccasion}
            onOccasionSelect={setSelectedOccasion}
          />
          
          {selectedOccasion && (
            <WishCategories 
              occasion={selectedOccasion}
              selectedWishType={selectedWishType}
              onWishTypeSelect={setSelectedWishType}
            />
          )}
          
          {selectedOccasion && selectedWishType && (
            <PricingSection 
              occasion={selectedOccasion}
              wishType={selectedWishType}
            />
          )}
        </>
      )}

      {/* Invitations Flow */}
      {mode === "invitations" && (
        <>
          <InvitationSelector onInvitationSelect={setSelectedInvitationType} />
          
          {selectedInvitationType && (
            <>
              <InvitationPricing invitationType={selectedInvitationType} />
              <InvitationFeatures />
            </>
          )}
        </>
      )}
      
      <DemoSection />
      <VoiceSection />
      <CustomWishSection />
      <AboutSection />
      <TermsSection />
      <Footer />
    </div>
  );
};

export default Index;
