import { motion } from "motion/react";
import { GlassCard } from "../ui/GlassCard";
import { Activity, Cpu, Network, Shield, Zap, Lock, Globe2 } from "lucide-react";

export function FeaturesBento() {
  return (
    <section id="platform" className="py-32 relative z-10 scroll-mt-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#00F0FF]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#8A2BE2]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-6">
            <Cpu className="w-4 h-4 text-[#8A2BE2]" />
            <span>Core Infrastructure</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Powered by <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#FF007F]">Neural Networks</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience unprecedented processing power and intelligent automation built for the next generation of enterprise applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Large Card - Real-time Processing */}
          <GlassCard className="md:col-span-2 p-8 flex flex-col relative overflow-hidden group border-white/10 hover:border-[#00F0FF]/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#00F0FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-[#00F0FF]/10 text-[#00F0FF] border border-[#00F0FF]/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                  <Activity className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">Real-time Processing</h3>
                  <p className="text-sm text-[#00F0FF]">Sub-millisecond latency</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[#05050A]/80 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-500 mb-1">Throughput</div>
                  <div className="text-sm font-mono text-white">1.2M ops/s</div>
                </div>
                <div className="bg-[#05050A]/80 backdrop-blur-md border border-white/10 rounded-lg px-4 py-2">
                  <div className="text-xs text-gray-500 mb-1">Status</div>
                  <div className="text-sm font-mono text-emerald-400 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Optimal
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative min-h-[200px] mt-4 rounded-xl overflow-hidden border border-white/5 bg-[#05050A]/50">
              {/* Animated SVG Chart */}
              <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 800 200">
                <defs>
                  <linearGradient id="chartGlow" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="8" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
                
                {/* Grid */}
                <path d="M0,50 L800,50 M0,100 L800,100 M0,150 L800,150" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                
                {/* Area Fill */}
                <motion.path 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                  d="M 0 100 C 66.67 100, 133.33 40, 200 40 C 266.67 40, 333.33 140, 400 140 C 466.67 140, 533.33 30, 600 30 C 666.67 30, 733.33 110, 800 110 L 800 200 L 0 200 Z" 
                  fill="url(#chartGlow)" 
                />
                
                {/* Animated Line */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, ease: "easeInOut" }}
                  d="M 0 100 C 66.67 100, 133.33 40, 200 40 C 266.67 40, 333.33 140, 400 140 C 466.67 140, 533.33 30, 600 30 C 666.67 30, 733.33 110, 800 110" 
                  fill="none" 
                  stroke="#00F0FF" 
                  strokeWidth="3"
                  filter="url(#glow)"
                />
                
                {/* Moving Dot */}
                <circle cx="0" cy="0" r="6" fill="#FFF" filter="url(#glow)">
                  <animateMotion 
                    dur="4s" 
                    repeatCount="indefinite" 
                    path="M 0 100 C 66.67 100, 133.33 40, 200 40 C 266.67 40, 333.33 140, 400 140 C 466.67 140, 533.33 30, 600 30 C 666.67 30, 733.33 110, 800 110" 
                  />
                </circle>
              </svg>
            </div>
          </GlassCard>

          {/* Small Card 1 - Quantum Ready */}
          <GlassCard className="p-8 flex flex-col justify-between relative overflow-hidden group border-white/10 hover:border-[#8A2BE2]/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8A2BE2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Animated Background Rings */}
            <div className="absolute -right-10 -top-10 w-40 h-40 border border-[#8A2BE2]/20 rounded-full animate-[spin_10s_linear_infinite]" />
            <div className="absolute -right-4 -top-4 w-28 h-28 border border-[#8A2BE2]/30 rounded-full animate-[spin_7s_linear_infinite_reverse]" />

            <div className="relative z-10">
              <div className="p-3 rounded-xl bg-[#8A2BE2]/10 text-[#8A2BE2] w-fit mb-6 border border-[#8A2BE2]/20 shadow-[0_0_15px_rgba(138,43,226,0.2)]">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Quantum Ready</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Architecture designed for the next generation of computing.</p>
            </div>
            <div className="mt-8 relative z-10">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#8A2BE2] to-[#FF007F] drop-shadow-[0_0_15px_rgba(138,43,226,0.5)]">
                100x
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-widest mt-2 font-medium">Faster Execution</div>
            </div>
          </GlassCard>

          {/* Small Card 2 - Security */}
          <GlassCard className="p-8 relative overflow-hidden group border-white/10 hover:border-[#FF007F]/30 transition-colors duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF007F]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Radar Animation */}
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.1)_0%,transparent_70%)] rounded-full">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="w-full h-full rounded-full border-t-2 border-[#FF007F]/50"
              />
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="p-3 rounded-xl bg-[#FF007F]/10 text-[#FF007F] w-fit mb-6 border border-[#FF007F]/20 shadow-[0_0_15px_rgba(255,0,127,0.2)]">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">Military-Grade Security</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">End-to-end encryption with automated threat detection.</p>
              
              <div className="mt-auto space-y-3">
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Lock className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs text-gray-300">AES-256 Active</span>
                  </div>
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-white/5 border border-white/10">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-[#FF007F]" />
                    <span className="text-xs text-gray-300">Threats Blocked</span>
                  </div>
                  <span className="text-xs font-mono text-white">24,892</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Medium Card - Network */}
          <GlassCard className="md:col-span-2 p-8 relative overflow-hidden group border-white/10 hover:border-white/20 transition-colors duration-500">
            <div className="absolute right-0 top-0 w-full md:w-2/3 h-full opacity-40 pointer-events-none">
              {/* Animated Node Network SVG */}
              <svg width="100%" height="100%" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.5" />
                    <stop offset="50%" stopColor="#8A2BE2" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#FF007F" stopOpacity="0.5" />
                  </linearGradient>
                </defs>
                
                {/* Lines */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                  d="M50,150 L150,80 L250,120 L350,60 M150,80 L200,220 L300,180 L350,60 M50,150 L120,250 L200,220" 
                  fill="none" 
                  stroke="url(#lineGrad)" 
                  strokeWidth="2" 
                />
                
                {/* Nodes */}
                {[
                  { cx: 50, cy: 150, r: 6, color: "#00F0FF" },
                  { cx: 150, cy: 80, r: 8, color: "#8A2BE2" },
                  { cx: 250, cy: 120, r: 5, color: "#FF007F" },
                  { cx: 350, cy: 60, r: 7, color: "#00F0FF" },
                  { cx: 200, cy: 220, r: 9, color: "#8A2BE2" },
                  { cx: 300, cy: 180, r: 6, color: "#FF007F" },
                  { cx: 120, cy: 250, r: 5, color: "#00F0FF" },
                ].map((node, i) => (
                  <g key={i}>
                    <circle cx={node.cx} cy={node.cy} r={node.r + 4} fill={node.color} opacity="0.2" className="animate-pulse" />
                    <circle cx={node.cx} cy={node.cy} r={node.r} fill={node.color} />
                  </g>
                ))}
              </svg>
            </div>

            <div className="relative z-10 w-full md:w-1/2 flex flex-col h-full justify-center">
              <div className="p-3 rounded-xl bg-white/5 text-white w-fit mb-6 border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Global Edge Network</h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                Deploy your models to the edge instantly. Serve predictions with single-digit millisecond latency worldwide.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Network, text: '300+ Edge Locations', color: 'text-[#00F0FF]' },
                  { icon: Zap, text: 'Auto-scaling Infrastructure', color: 'text-[#8A2BE2]' },
                  { icon: Activity, text: 'Zero-downtime Deploys', color: 'text-[#FF007F]' },
                  { icon: Shield, text: 'DDoS Protection', color: 'text-emerald-400' }
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-[#05050A]/50 border border-white/5 backdrop-blur-sm">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span className="text-sm font-medium text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
