import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "./ui/button";

const ContactForm = () => {
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.message
    ) {
      toast({
        title: "Missing information",
        description: "Please fill out all required fields.",
        variant: "destructive",
      });
      return;
    }

    // Success toast with order summary
    toast({
      title: "Message sent successfully!",
      description: `Thank you. We'll contact you as soon as we can.`,
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };
  return (
    <section id="contact" className="py-16 bg-cream-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-dancing text-bakery-900">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-bakery-400 mx-auto mb-4"></div>
          <p className="text-bakery-700 max-w-2xl mx-auto">
            Have questions or special requests? Reach out to us!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="bakery-shadow">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-bakery-900 mb-6">
                Get In Touch
              </h3>
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
                  <h4 className="text-bakery-800 font-medium mb-2">
                    Follow Us
                  </h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-bakery-700 hover:text-bakery-500 transition-colors"
                    >
                      <Instagram size={24} />
                    </a>
                    <a
                      href="#"
                      className="text-bakery-700 hover:text-bakery-500 transition-colors"
                    >
                      <Facebook size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <CardContent className="p-6">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold text-bakery-900 mb-4">
                    Your Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="(123) 456-7890"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message"
                    className="min-h-[100px]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-bakery-600 hover:bg-bakery-700 text-white"
                  size="lg"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </CardContent>
        </div>
      </div>
    </section>
  );
};

const ContactItem = ({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex">
      <div className="text-bakery-600 mr-4 mt-1">{icon}</div>
      <div>
        <h4 className="font-medium text-bakery-800">{title}</h4>
        <div className="text-bakery-700 mt-1">{children}</div>
      </div>
    </div>
  );
};

export default ContactForm;
