
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

const carouselImages = [
  {
    url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    alt: "Happy dental patient",
  },
  {
    url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334",
    alt: "Modern dental equipment",
  },
  {
    url: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    alt: "Professional dentist",
  },
];

const Hero = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
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
    <div id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-[#97B4CD]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#49515C] leading-tight transition-all duration-300 hover:scale-[1.02]">
              Your Perfect Smile Starts Here
            </h1>
            <p className="mt-4 text-xl text-[#5F6773] max-w-2xl transition-all duration-300 hover:translate-x-1">
              Experience professional dental care in a comfortable and welcoming environment. We're committed to your oral health and beautiful smile.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-[#97B4CD] hover:bg-[#819AB7] text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Book Your Visit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#97B4CD] text-[#49515C] hover:bg-[#97B4CD]/10 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg animate-fade-down">
            <Carousel setApi={setApi} className="relative w-full" opts={{ loop: true }}>
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#97B4CD] rounded-3xl blur-3xl opacity-20"></div>
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
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
                    className={`h-2 w-2 rounded-full transition-all duration-300 ${
                      current === index ? "w-4 bg-[#97B4CD]" : "bg-[#97B4CD]/30"
                    }`}
                  />
                ))}
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
