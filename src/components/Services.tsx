
import { Sparkles, Stethoscope, Heart, UserCog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more confident smile.",
    delay: 0,
  },
  {
    icon: UserCog,
    title: "Dental Implants",
    description: "Permanent, natural-looking solutions for missing teeth.",
    delay: 100,
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive care for all your dental health needs.",
    delay: 200,
  },
  {
    icon: Heart,
    title: "Cosmetic Dentistry",
    description: "Transform your smile with our advanced cosmetic procedures.",
    delay: 300,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#E0E0E0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-[#49515C] sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-lg text-[#5F6773]">
            Comprehensive dental care tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card 
              key={service.title}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group animate-fade-up"
              style={{ animationDelay: `${service.delay}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-[#97B4CD]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 text-[#49515C]" />
                </div>
                <CardTitle className="text-xl font-semibold text-[#49515C]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#5F6773]">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
