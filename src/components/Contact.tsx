
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're here to help with all your dental care needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-fade-up">
            <div className="bg-dental-blue/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="First Name"
                    className="bg-white"
                  />
                  <Input
                    type="text"
                    placeholder="Last Name"
                    className="bg-white"
                  />
                </div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white"
                />
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-white"
                />
                <Textarea
                  placeholder="Your Message"
                  className="bg-white min-h-[120px]"
                />
                <Button className="w-full bg-dental-blue hover:bg-dental-blue/90 text-gray-800">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          <div className="space-y-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="bg-dental-green/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">Visit Us</p>
                    <p className="text-gray-600">
                      123 Dental Street, Healthcare City
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-gray-600 mt-1" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-gray-600">info@dentalcare.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-200 rounded-2xl h-64">
              {/* Map placeholder - implement actual map integration later */}
              <div className="w-full h-full rounded-2xl bg-dental-blue/10 flex items-center justify-center">
                <p className="text-gray-600">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
