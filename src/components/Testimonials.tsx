
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const testimonials = [
  {
    name: "Sarah Johnson",
    rating: 5,
    comment: "The best dental experience I've ever had. Professional, caring, and fantastic results!",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    delay: 0,
  },
  {
    name: "Michael Chen",
    rating: 5,
    comment: "Incredibly thorough and gentle. The whole team makes you feel comfortable and well-cared for.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    delay: 100,
  },
  {
    name: "Emma Davis",
    rating: 5,
    comment: "State-of-the-art facility with a warm, welcoming atmosphere. Highly recommend!",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    delay: 200,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#98AABF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
          <h2 className="text-3xl font-bold text-[#49515C] sm:text-4xl">
            Patient Testimonials
          </h2>
          <p className="mt-4 text-lg text-[#5F6773]">
            See what our patients say about their experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white group animate-fade-up"
              style={{ animationDelay: `${testimonial.delay}ms` }}
            >
              <CardHeader className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center space-x-1 mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-current text-[#97B4CD]"
                    />
                  ))}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-[#5F6773] mb-4">{testimonial.comment}</p>
                <p className="font-semibold text-[#49515C]">{testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
