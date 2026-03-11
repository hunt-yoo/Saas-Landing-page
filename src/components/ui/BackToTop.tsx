import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when page is scrolled down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50"
        >
          <div className="group relative w-[45px] h-[52px] md:w-[52px] md:h-[60px] transition-all duration-300 drop-shadow-lg hover:drop-shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <button
              onClick={scrollToTop}
              className="w-full h-full flex items-center justify-center bg-[#0A0A0F]/80 backdrop-blur-xl transition-all duration-300 overflow-hidden cursor-pointer"
              style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
              aria-label="Back to top"
            >
              {/* SVG Hexagon Border */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 87 100" preserveAspectRatio="none">
                <polygon 
                  points="43.5 1, 86 25, 86 75, 43.5 99, 1 75, 1 25" 
                  fill="none" 
                  className="stroke-white/10 group-hover:stroke-[#00F0FF]/50 transition-colors duration-300" 
                  strokeWidth="2" 
                />
              </svg>

              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00F0FF]/20 to-[#8A2BE2]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              {/* Icon */}
              <ArrowUp className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-white relative z-10 transition-all duration-300 group-hover:-translate-y-1" />
              
              {/* Bottom Radial Glow */}
              <div 
                className="absolute bottom-0 left-0 w-full h-[45%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: 'radial-gradient(ellipse at bottom center, rgba(0,240,255,0.8) 0%, rgba(0,240,255,0) 70%)' }}
              />
              
              {/* Top Tech Accent Line */}
              <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-1/4 h-[1px] bg-gradient-to-r from-transparent via-[#8A2BE2] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 pointer-events-none" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
