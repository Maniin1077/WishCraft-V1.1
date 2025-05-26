
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Shield, Calendar } from "lucide-react";

const TermsSection = () => {
  return (
    <section className="py-20 px-4 bg-white/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-dancing text-center text-gray-800 mb-4">
          Terms & Conditions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Clear and transparent terms for our wish creation services
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Access Duration */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <Clock className="mx-auto text-blue-500" size={48} />
              </div>
              <h3 className="text-xl font-dancing text-gray-800 mb-4 text-center">
                Access Duration
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Standard wishes:</strong> 24-hour access</li>
                <li>• <strong>Pro wishes:</strong> Lifetime access</li>
                <li>• <strong>Extension:</strong> 1-6hrs (₹19/hour)</li>
                <li>• <strong>Extended:</strong> 6-10hrs (₹39/hour)</li>
                <li>• Timer starts when link is opened</li>
                <li>• Extensions available until expiry</li>
                <li>• No downloading or saving allowed</li>
              </ul>
            </CardContent>
          </Card>

          {/* Delivery Process */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-green-200">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <Calendar className="mx-auto text-green-500" size={48} />
              </div>
              <h3 className="text-xl font-dancing text-gray-800 mb-4 text-center">
                Delivery Process
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Wishes delivered 2-3 days before event</li>
                <li>• Link sent via SMS to mobile number</li>
                <li>• QR code option available</li>
                <li>• Backup email delivery included</li>
                <li>• <strong>Submit details 5-7 days before event</strong></li>
                <li>• Confirmation message sent</li>
                <li>• Customer support available</li>
              </ul>
            </CardContent>
          </Card>

          {/* Security */}
          <Card className="bg-white/80 backdrop-blur-sm border-2 border-purple-200">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <Shield className="mx-auto text-purple-500" size={48} />
              </div>
              <h3 className="text-xl font-dancing text-gray-800 mb-4 text-center">
                Secure & Reliable
              </h3>
              <div className="text-sm text-gray-700 space-y-3">
                <p>
                  Your personal information and payment details are completely secure with our 
                  advanced encryption technology.
                </p>
                <p>
                  We guarantee timely delivery 2-3 days before your special event.
                </p>
                <p className="font-medium text-purple-600">
                  🔒 Bank-level security<br/>
                  📱 SMS & Email backup<br/>
                  ⏰ On-time guarantee
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TermsSection;
