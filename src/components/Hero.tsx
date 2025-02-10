
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tooth, Stethoscope, Star, Badge, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5",
    alt: "Modern dental clinic",
  },
  {
    url: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99",
    alt: "Dental treatment",
  },
  {
    url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
    alt: "Happy patient smile",
  },
];

const badges = [
  { icon: Star, text: "5-Star Reviews" },
  { icon: Badge, text: "Certified Experts" },
  { icon: CheckCircle, text: "20+ Years Experience" },
];

const Hero = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });

    return () => {
      clearInterval(interval);
      api.destroy();
    };
  }, [api]);

  return (
    <div id="home" className="relative pt-16 min-h-screen flex items-center bg-gradient-to-b from-[#97B4CD]/5 via-white to-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-float">
          <Tooth className="w-16 h-16 text-[#97B4CD]" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-delayed">
          <Stethoscope className="w-16 h-16 text-[#97B4CD]" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#49515C] leading-tight mb-6 font-serif">
                Your Perfect Smile 
                <span className="block text-[#97B4CD]">Starts Here</span>
              </h1>
              <p className="mt-4 text-xl text-[#5F6773] max-w-2xl">
                Experience professional dental care in a comfortable and welcoming environment. 
                We're committed to your oral health and beautiful smile.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-8 mb-8">
                {badges.map((badge, index) => (
                  <div 
                    key={badge.text}
                    className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm hover:shadow-md transition-all duration-300"
                    style={{ 
                      animationDelay: `${index * 200}ms`,
                      animation: 'fade-in 0.5s ease-out forwards'
                    }}
                  >
                    <badge.icon className="w-5 h-5 text-[#97B4CD]" />
                    <span className="text-sm font-medium text-[#49515C]">{badge.text}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-[#97B4CD] hover:bg-[#819AB7] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8 py-6 h-auto"
                >
                  Book Your Visit
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#97B4CD] text-[#49515C] hover:bg-[#97B4CD]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg px-8 py-6 h-auto"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-lg">
            <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <Carousel setApi={setApi} className="relative w-full" opts={{ loop: true }}>
                <CarouselContent>
                  {carouselImages.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="relative group">
                        <div className="absolute inset-0 bg-[#97B4CD] rounded-3xl blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                        <img
                          src={image.url}
                          alt={image.alt}
                          className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-3xl"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex -left-12 border-[#97B4CD] text-[#49515C] hover:bg-[#97B4CD]/10" />
                <CarouselNext className="hidden md:flex -right-12 border-[#97B4CD] text-[#49515C] hover:bg-[#97B4CD]/10" />
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {carouselImages.map((_, index) => (
                    <div
                      key={index}
                      className={`h-2 transition-all duration-300 rounded-full ${
                        current === index ? "w-8 bg-[#97B4CD]" : "w-2 bg-[#97B4CD]/30"
                      }`}
                    />
                  ))}
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-[50px]"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-[#E0E0E0]"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
