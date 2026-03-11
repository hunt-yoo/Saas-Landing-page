import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote } from "lucide-react";
import createGlobe from "cobe";

const reviews = [
  {
    text: "They took the time to understand my brand and target audience, and developed a marketing strategy that perfectly captured our essence. Their creative campaigns led to a significant increase in sales, and their expertise helped us secure a valuable partnership with another company",
    name: "Andrew Colley",
    company: "ADAMA Software"
  },
  {
    text: "The predictive capabilities have completely transformed how we allocate resources. We've seen a 40% reduction in waste and a massive increase in overall efficiency across all our global departments.",
    name: "Sarah Jenkins",
    company: "TechFlow Inc."
  },
  {
    text: "Integration was seamless. The dashboard is a work of art, providing us with real-time insights that were previously impossible to gather. It's fundamentally changed how we operate.",
    name: "Marcus Thompson",
    company: "GlobalTech"
  },
  {
    text: "Finally, a tool that understands the complexity of modern data pipelines. The automated threat detection alone has saved us countless hours and prevented several major incidents.",
    name: "Elena Rodriguez",
    company: "CyberDyne Systems"
  },
  {
    text: "Deploying our models to the edge used to take weeks. Now it happens instantly. The global edge network is incredibly robust and has drastically reduced our latency worldwide.",
    name: "David Chen",
    company: "Axiom Dynamics"
  }
];

export function GlobeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let phi = 0;
    let width = 0;
    
    if (!canvasRef.current) return;

    const onResize = () => {
      if (canvasRef.current) {
        width = canvasRef.current.offsetWidth;
      }
    };
    window.addEventListener('resize', onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.1, 0.2, 0.5],
      markerColor: [0.3, 0.5, 1],
      glowColor: [0.1, 0.2, 0.5],
      markers: [
        { location: [37.7595, -122.4367], size: 0.05 },
        { location: [40.7128, -74.006], size: 0.05 },
        { location: [51.5074, -0.1278], size: 0.05 },
        { location: [35.6895, 139.6917], size: 0.05 },
        { location: [1.3521, 103.8198], size: 0.05 },
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
        if (canvasRef.current) {
           const currentWidth = canvasRef.current.offsetWidth;
           if (currentWidth !== width) {
             width = currentWidth;
           }
           state.width = width * 2;
           state.height = width * 2;
        }
      },
    });

    return () => {
      window.removeEventListener('resize', onResize);
      globe.destroy();
    };
  }, []);

  const getRelativeIndex = (index: number) => {
    let diff = index - activeIndex;
    if (diff > 2) diff -= 5;
    if (diff < -2) diff += 5;
    return diff;
  };

  return (
    <section className="py-24 relative overflow-hidden flex flex-col items-center bg-[#05050A]">
      {/* Header */}
      <div className="container mx-auto px-4 relative z-20 text-center mb-8 md:mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Global Intelligence</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">Join thousands of organizations scaling their operations globally.</p>
      </div>

      {/* Interactive Area (Globe + Cards) */}
      <div className="relative w-full flex flex-col items-center pt-24 md:pt-32">
        
        {/* High-Tech Simulated Globe */}
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[150vw] md:w-[80vw] aspect-square pointer-events-none z-0 flex items-center justify-center" 
          style={{ 
            maskImage: "linear-gradient(to bottom, black 0%, black 10%, transparent 25%)", 
            WebkitMaskImage: "-webkit-linear-gradient(top, black 0%, black 10%, transparent 25%)" 
          }}
        >
           {/* Outer Glow */}
           <div className="absolute top-0 w-full h-1/2 bg-[radial-gradient(ellipse_at_top,rgba(77,124,255,0.15)_0%,transparent_70%)]" />
           
           {/* Rotating WebGL Globe */}
           <div className="absolute w-full h-full opacity-90 flex items-center justify-center">
             <canvas
               ref={canvasRef}
               style={{
                 width: "100%",
                 height: "100%",
                 aspectRatio: "1 / 1",
               }}
             />
           </div>
        </div>

        {/* Fan Layout Cards */}
        <div className="relative z-10 w-full max-w-5xl mx-auto h-[450px] md:h-[500px] flex justify-center items-center">
          <AnimatePresence mode="popLayout">
            {reviews.map((review, index) => {
              const relativeIndex = getRelativeIndex(index);
              const absIndex = Math.abs(relativeIndex);
              const sign = Math.sign(relativeIndex);
              
              const isActive = absIndex === 0;
              
              // Calculate transforms for the fan effect
              const x = sign * (absIndex === 1 ? 180 : absIndex === 2 ? 340 : 0);
              const y = absIndex === 1 ? 40 : absIndex === 2 ? 100 : 0;
              const rotate = sign * (absIndex === 1 ? 8 : absIndex === 2 ? 16 : 0);
              const scale = isActive ? 1 : absIndex === 1 ? 0.9 : 0.8;
              const zIndex = 50 - absIndex * 10;
              const opacity = isActive ? 1 : absIndex === 1 ? 0.8 : 0.5;

              return (
                <motion.div
                  key={index}
                  className="absolute cursor-pointer"
                  initial={false}
                  animate={{
                    x,
                    y,
                    rotate,
                    scale,
                    zIndex,
                    opacity,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 25,
                  }}
                  onClick={() => setActiveIndex(index)}
                  style={{
                    transformOrigin: "bottom center",
                  }}
                >
                  <div 
                    className={`w-[340px] md:w-[400px] p-8 rounded-3xl transition-colors duration-300 ${
                      isActive 
                        ? "bg-[#0B0B1A] border border-[#4D7CFF]/40 shadow-[0_0_50px_-15px_rgba(77,124,255,0.4)]" 
                        : "bg-[#0B0B1A]/90 border border-white/5 backdrop-blur-md"
                    }`}
                  >
                    <p className={`text-base md:text-lg leading-relaxed mb-10 ${isActive ? "text-gray-200" : "text-gray-400"}`}>
                      "{review.text}"
                    </p>
                    <div className="flex items-end justify-between">
                      <div>
                        <div className={`font-semibold ${isActive ? "text-white" : "text-gray-300"}`}>
                          {review.name}
                        </div>
                        <div className={`text-sm font-bold mt-1 ${isActive ? "text-white" : "text-gray-500"}`}>
                          {review.company}
                        </div>
                      </div>
                      <div className={`w-14 h-14 rounded-full flex items-center justify-center ${
                        isActive ? "bg-[#05050A] border border-[#4D7CFF]/30 shadow-[0_0_20px_rgba(77,124,255,0.2)]" : "bg-[#05050A] border border-white/5"
                      }`}>
                        <Quote className={`w-6 h-6 ${isActive ? "text-[#4D7CFF] fill-[#4D7CFF]" : "text-gray-600 fill-gray-600"}`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center gap-4 mt-8 relative z-20">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index 
                  ? "w-12 bg-[#4D7CFF] shadow-[0_0_10px_rgba(77,124,255,0.6)]" 
                  : "w-8 bg-white/10 hover:bg-white/30"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
