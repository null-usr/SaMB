
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-dancing text-bakery-900">Contact Us</h2>
          <div className="w-24 h-1 bg-bakery-400 mx-auto mb-4"></div>
          <p className="text-bakery-700 max-w-2xl mx-auto">
            Have questions or special requests? Reach out to us!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bakery-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-bakery-900 mb-6">Get In Touch</h3>
              <div className="space-y-4">
                <ContactItem icon={<MapPin />} title="Address">
                  <p>123 Baker Street</p>
                  <p>Breadville, BK 12345</p>
                </ContactItem>
                
                <ContactItem icon={<Clock />} title="Hours">
                  <p>Monday - Friday: 7am - 6pm</p>
                  <p>Saturday: 8am - 4pm</p>
                  <p>Sunday: Closed</p>
                </ContactItem>
                
                <ContactItem icon={<Phone />} title="Phone">
                  <p>(123) 456-7890</p>
                </ContactItem>
                
                <ContactItem icon={<Mail />} title="Email">
                  <p>hello@homemadedelights.com</p>
                </ContactItem>
                
                <div className="pt-4">
                  <h4 className="text-bakery-800 font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-bakery-700 hover:text-bakery-500 transition-colors">
                      <Instagram size={24} />
                    </a>
                    <a href="#" className="text-bakery-700 hover:text-bakery-500 transition-colors">
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="rounded-lg overflow-hidden h-full min-h-[300px] bakery-shadow">
            {/* Replace with actual map or embedded Google Map */}
            <div className="bg-cream-200 h-full w-full flex items-center justify-center">
              <div className="text-center p-6">
                <MapPin size={48} className="mx-auto mb-4 text-bakery-600" />
                <h3 className="text-xl font-bold text-bakery-800">Find Us</h3>
                <p className="text-bakery-700">
                  We're located in the heart of Breadville, <br />
                  just off Main Street.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({ 
  icon, 
  title, 
  children 
}: { 
  icon: React.ReactNode; 
  title: string; 
  children: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <div className="text-bakery-600 mr-4 mt-1">
        {icon}
      </div>
      <div>
        <h4 className="font-medium text-bakery-800">{title}</h4>
        <div className="text-bakery-700 mt-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Contact;
