
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-b from-dental-blue/10 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Your Perfect Smile Starts Here
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl">
              Experience professional dental care in a comfortable and welcoming environment. We're committed to your oral health and beautiful smile.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-dental-blue hover:bg-dental-blue/90 text-gray-800">
                Book Your Visit
              </Button>
              <Button size="lg" variant="outline" className="border-dental-blue text-gray-800">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex-1 w-full max-w-lg animate-fade-down">
            <div className="relative">
              <div className="absolute inset-0 bg-dental-green rounded-full blur-3xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="Happy dental patient"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
