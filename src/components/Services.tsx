
import { Sparkles, Stethoscope, Heart, UserCog } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";

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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('services');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-[#E0E0E0] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-3xl font-bold text-[#49515C] sm:text-4xl transition-all duration-300 hover:scale-[1.02] font-serif">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-[#5F6773] transition-all duration-300 hover:translate-y-[-2px]">
            Comprehensive dental care tailored to your needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className={`border-none shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 bg-white group cursor-pointer transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ 
                transitionDelay: `${service.delay + 500}ms`,
                transitionDuration: '1000ms'
              }}
            >
              <CardHeader>
                <div className="w-16 h-16 bg-[#97B4CD]/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-[#97B4CD]/30 transition-all duration-500 mx-auto">
                  <service.icon className="w-8 h-8 text-[#49515C] group-hover:text-[#3A4149] transition-colors duration-500" />
                </div>
                <CardTitle className="text-2xl font-semibold text-[#49515C] group-hover:text-[#3A4149] transition-colors duration-300 text-center font-serif">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-[#5F6773] group-hover:text-[#49515C] transition-colors duration-300 text-center text-lg">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Services;
