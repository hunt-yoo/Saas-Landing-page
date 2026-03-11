import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";
import { ArrowRight, Sparkles } from "lucide-react";
import { FlowingLights } from "../ui/FlowingLights";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20">
      <FlowingLights />
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#8A2BE2]/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00F0FF]/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
        >
          <Sparkles className="w-4 h-4 text-[#00F0FF]" />
          <span className="text-sm text-gray-300">AI-Powered Analytics 2.0 is here</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl"
        >
          Unleash the Future of <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#FF007F]">
            Data Intelligence
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10"
        >
          Transform your raw data into actionable insights with our next-generation AI engine. Built for enterprise scale, designed for human intuition.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Link to="/signup">
            <Button size="lg" variant="primary">
              Start Free Trial <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
          <Button size="lg" variant="secondary">
            Book a Demo
          </Button>
        </motion.div>

        {/* Dashboard Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 w-full max-w-5xl relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] rounded-2xl blur opacity-30" />
          <GlassCard className="relative p-2 md:p-4 bg-[#05050A]/90">
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#0B0B1A] aspect-[16/9] relative flex items-center justify-center">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05050A] via-transparent to-transparent" />
              
              {/* Floating UI Elements inside mockup */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl"
              >
                <div className="w-32 h-2 bg-white/20 rounded-full mb-2" />
                <div className="w-24 h-2 bg-[#00F0FF]/50 rounded-full" />
              </motion.div>
              
              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 right-10 p-4 bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-2xl"
              >
                <div className="flex items-end gap-2 h-16">
                  <div className="w-4 bg-[#8A2BE2] h-1/3 rounded-t-sm" />
                  <div className="w-4 bg-[#00F0FF] h-2/3 rounded-t-sm" />
                  <div className="w-4 bg-[#FF007F] h-full rounded-t-sm" />
                </div>
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
