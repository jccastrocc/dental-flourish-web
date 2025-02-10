
import { useState } from "react";
import { Stethoscope, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About Us", href: "#about" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center animate-fade-down">
            <Stethoscope className="h-8 w-8 text-[#97B4CD]" />
            <span className="ml-2 text-xl font-semibold text-[#49515C]">DentalCare</span>
          </div>
          
          <div className="hidden md:block animate-fade-down">
            <div className="ml-10 flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-[#5F6773] hover:text-[#49515C] px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  {item.label}
                </a>
              ))}
              <Button
                className="bg-[#97B4CD] hover:bg-[#819AB7] text-white transition-all duration-300 hover:scale-105"
              >
                Book Appointment
              </Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#5F6773] hover:text-[#49515C] hover:bg-[#97B4CD]/10 focus:outline-none focus:ring-2 focus:ring-[#97B4CD] transition-colors duration-300"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-down">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[#5F6773] hover:text-[#49515C] block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-[#97B4CD] hover:bg-[#819AB7] text-white mt-4 transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
