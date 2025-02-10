
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-[#97B4CD]/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#49515C] leading-tight">
              Your Perfect Smile Starts Here
            </h1>
            <p className="mt-4 text-xl text-[#5F6773] max-w-2xl">
              Experience professional dental care in a comfortable and welcoming environment. We're committed to your oral health and beautiful smile.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-[#97B4CD] hover:bg-[#819AB7] text-white transition-all duration-300 hover:scale-105"
              >
                Book Your Visit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#97B4CD] text-[#49515C] hover:bg-[#97B4CD]/10 transition-all duration-300 hover:scale-105"
              >
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg animate-fade-down">
            <div className="relative">
              <div className="absolute inset-0 bg-[#97B4CD] rounded-full blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Happy dental patient"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3] hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
