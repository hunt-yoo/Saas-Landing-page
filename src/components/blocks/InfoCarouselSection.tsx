import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LayoutDashboard, Wand2, UserPlus, Github, Mail, Sparkles, Apple, ArrowRight, Code, BarChart3, Layers } from "lucide-react";
import { GlassCard } from "../ui/GlassCard";

const carouselData = [
  {
    id: "01",
    title: "Fast Sign-up",
    description: "You can join our platform faster with Social Account",
    icon: UserPlus,
  },
  {
    id: "02",
    title: "Easy to Generate",
    description: "Our UI are simple, you can easy to catch up",
    icon: Wand2,
  },
  {
    id: "03",
    title: "Use Specific Tools",
    description: "Explore Our Dasboard with 50+ Tools and 20+ Team Support Features",
    icon: LayoutDashboard,
  }
];

export function InfoCarouselSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % carouselData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <section className="py-24 relative z-10 overflow-hidden scroll-mt-20" id="how-to-use">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Experience Axiom AI</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover how our platform accelerates your workflow with powerful tools and seamless integration.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Main Visual Area */}
          <GlassCard className="w-full aspect-[16/10] md:aspect-[21/9] relative overflow-hidden mb-8 flex items-center justify-center bg-[#05050A]/80 border-white/10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center w-full h-full p-4 md:p-8"
              >
                {/* Visual 1: Fast Sign-up */}
                {activeIndex === 0 && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,transparent_60%)]" />
                    
                    <div className="relative w-full max-w-md bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                      <div className="text-center mb-6">
                        <h3 className="text-lg font-medium text-white mb-6">Register with</h3>
                        <div className="flex justify-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#00F0FF]/50 transition-all cursor-pointer group">
                             <Github className="w-6 h-6 text-white group-hover:text-[#00F0FF] transition-colors" />
                          </div>
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#00F0FF]/50 transition-all cursor-pointer group">
                             <Apple className="w-6 h-6 text-white group-hover:text-[#00F0FF] transition-colors" />
                          </div>
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-[#00F0FF]/50 transition-all cursor-pointer group">
                             <Mail className="w-6 h-6 text-white group-hover:text-[#00F0FF] transition-colors" />
                          </div>
                        </div>
                      </div>
                      <div className="relative flex items-center py-2 mb-6">
                        <div className="flex-grow border-t border-white/10"></div>
                        <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider">or</span>
                        <div className="flex-grow border-t border-white/10"></div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <label className="text-xs text-gray-400 mb-1.5 block">Name</label>
                          <div className="w-full h-12 bg-[#05050A] border border-white/10 rounded-xl px-4 flex items-center">
                            <span className="text-sm text-gray-500">Your full name</span>
                          </div>
                        </div>
                        <div>
                          <label className="text-xs text-gray-400 mb-1.5 block">Email</label>
                          <div className="w-full h-12 bg-[#05050A] border border-white/10 rounded-xl px-4 flex items-center">
                            <span className="text-sm text-gray-500">Your email address</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual 2: Easy to Generate */}
                {activeIndex === 1 && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15)_0%,transparent_60%)]" />
                    
                    <div className="relative w-full max-w-xl flex flex-col shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                      {/* Generated UI Mockup */}
                      <div className="bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 border-b-0 rounded-t-2xl p-6 space-y-4 h-56 overflow-hidden relative">
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="flex gap-4"
                        >
                          <div className="w-1/3 h-28 bg-white/5 rounded-xl border border-white/10 p-4 flex flex-col justify-between">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8A2BE2] to-[#00F0FF] opacity-80" />
                            <div className="space-y-2">
                              <div className="w-full h-2 bg-white/20 rounded-full" />
                              <div className="w-2/3 h-2 bg-white/10 rounded-full" />
                            </div>
                          </div>
                          <div className="w-2/3 h-28 bg-white/5 rounded-xl border border-white/10 p-4">
                            <div className="w-full h-full bg-gradient-to-r from-[#8A2BE2]/20 to-[#00F0FF]/20 rounded-lg border border-white/5" />
                          </div>
                        </motion.div>
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 }}
                          className="w-full h-16 bg-white/5 rounded-xl border border-white/10 flex items-center px-4 gap-3"
                        >
                          <div className="w-8 h-8 rounded-full bg-white/10" />
                          <div className="flex-1 space-y-2">
                            <div className="w-1/3 h-2 bg-white/20 rounded-full" />
                            <div className="w-1/4 h-2 bg-white/10 rounded-full" />
                          </div>
                        </motion.div>
                        
                        {/* Scanning line */}
                        <motion.div 
                          animate={{ y: [-20, 240, -20] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute top-0 left-0 w-full h-[2px] bg-[#00F0FF] shadow-[0_0_20px_#00F0FF]"
                        />
                      </div>
                      {/* Prompt Input */}
                      <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-b-2xl p-4 flex items-center gap-4 relative z-10">
                        <Sparkles className="w-6 h-6 text-[#00F0FF]" />
                        <div className="flex-1">
                          <span className="text-sm md:text-base text-gray-200 border-r-2 border-[#00F0FF] pr-1 animate-pulse">
                            Generate a modern dashboard UI...
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] flex items-center justify-center shadow-lg">
                          <ArrowRight className="w-5 h-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Visual 3: Use Specific Tools */}
                {activeIndex === 2 && (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_60%)]" />
                    
                    <div className="relative w-full max-w-2xl h-72 bg-[#0A0A0F]/90 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                      {/* Sidebar */}
                      <div className="w-16 md:w-56 border-r border-white/10 bg-[#05050A] p-4 flex flex-col gap-4">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#8A2BE2] to-[#00F0FF] mb-6 shadow-lg" />
                        <div className="w-full h-10 bg-white/10 rounded-lg hidden md:flex items-center px-3 gap-3">
                          <LayoutDashboard className="w-4 h-4 text-white" />
                          <div className="w-16 h-2 bg-white/20 rounded-full" />
                        </div>
                        <div className="w-full h-10 bg-transparent hover:bg-white/5 rounded-lg hidden md:flex items-center px-3 gap-3 transition-colors">
                          <BarChart3 className="w-4 h-4 text-gray-400" />
                          <div className="w-20 h-2 bg-white/10 rounded-full" />
                        </div>
                        <div className="w-full h-10 bg-transparent hover:bg-white/5 rounded-lg hidden md:flex items-center px-3 gap-3 transition-colors">
                          <Layers className="w-4 h-4 text-gray-400" />
                          <div className="w-14 h-2 bg-white/10 rounded-full" />
                        </div>
                        
                        {/* Mobile Sidebar Icons */}
                        <div className="w-8 h-8 bg-white/10 rounded-lg md:hidden flex items-center justify-center"><LayoutDashboard className="w-4 h-4 text-white" /></div>
                        <div className="w-8 h-8 bg-transparent rounded-lg md:hidden flex items-center justify-center"><BarChart3 className="w-4 h-4 text-gray-400" /></div>
                        <div className="w-8 h-8 bg-transparent rounded-lg md:hidden flex items-center justify-center"><Layers className="w-4 h-4 text-gray-400" /></div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="flex-1 p-6 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                          <div className="w-40 h-6 bg-white/10 rounded-md" />
                          <div className="flex gap-3">
                            <div className="w-8 h-8 rounded-full bg-white/10" />
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#8A2BE2] to-[#00F0FF]" />
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="h-24 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-pointer">
                            <BarChart3 className="w-6 h-6 text-[#00F0FF]" />
                            <div className="w-2/3 h-2 bg-white/20 rounded-full" />
                          </div>
                          <div className="h-24 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-pointer">
                            <Layers className="w-6 h-6 text-[#8A2BE2]" />
                            <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                          </div>
                          <div className="h-24 bg-white/5 border border-white/10 rounded-xl p-4 flex flex-col justify-between hover:bg-white/10 transition-colors cursor-pointer">
                            <Code className="w-6 h-6 text-emerald-400" />
                            <div className="w-3/4 h-2 bg-white/20 rounded-full" />
                          </div>
                        </div>
                        <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4 relative overflow-hidden">
                           <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#00F0FF]/10 to-transparent" />
                           <div className="w-full h-full border-b-2 border-[#00F0FF]/30 border-dashed" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </GlassCard>

          {/* Tabs Area */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {carouselData.map((item, index) => {
              const isActive = activeIndex === index;
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`cursor-pointer relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden group
                    ${isActive 
                      ? 'bg-white/10 border-white/20 shadow-[0_0_30px_rgba(0,240,255,0.05)]' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                    }`}
                >
                  {/* Progress Bar Background */}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]"
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 5, ease: "linear" }}
                    />
                  )}

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-500
                        ${isActive ? 'bg-gradient-to-br from-[#00F0FF]/20 to-[#8A2BE2]/20 text-white border border-white/10' : 'bg-white/5 text-gray-400 group-hover:text-white border border-transparent'}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className={`text-sm font-mono font-medium tracking-wider ${isActive ? 'text-[#00F0FF]' : 'text-gray-600'}`}>
                        {item.id}
                      </span>
                    </div>
                    
                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-500 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed transition-colors duration-500 ${isActive ? 'text-gray-300' : 'text-gray-500 group-hover:text-gray-400'}`}>
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
