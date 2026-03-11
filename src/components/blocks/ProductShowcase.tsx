import { useState } from "react";
import { motion } from "motion/react";
import { GlassCard } from "../ui/GlassCard";
import { BarChart3, Zap, Shield, Activity, Cpu, Globe, ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    id: "analytics",
    title: "Predictive Analytics",
    description: "Anticipate market trends with 99.9% accuracy using our advanced neural networks.",
    icon: BarChart3,
    color: "text-[#00F0FF]",
    bg: "bg-[#00F0FF]/10",
    border: "border-[#00F0FF]/20"
  },
  {
    id: "automation",
    title: "Automated Workflows",
    description: "Reduce manual operations by 80% with intelligent, self-healing automation pipelines.",
    icon: Zap,
    color: "text-[#8A2BE2]",
    bg: "bg-[#8A2BE2]/10",
    border: "border-[#8A2BE2]/20"
  },
  {
    id: "security",
    title: "Enterprise Security",
    description: "Military-grade encryption with real-time threat detection and automated mitigation.",
    icon: Shield,
    color: "text-[#FF007F]",
    bg: "bg-[#FF007F]/10",
    border: "border-[#FF007F]/20"
  }
];

const stats = [
  { value: "50M+", label: "Events/sec" },
  { value: "<1ms", label: "Latency" },
  { value: "99.99%", label: "Uptime" }
];

export function ProductShowcase() {
  const [activeSolution, setActiveSolution] = useState(solutions[0].id);

  return (
    <section id="solutions" className="py-32 relative overflow-hidden scroll-mt-20">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-full h-[600px] bg-gradient-to-br from-[#8A2BE2]/10 via-[#00F0FF]/5 to-transparent -skew-y-12 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-1/2 h-[500px] bg-[radial-gradient(circle_at_center,rgba(255,0,127,0.05)_0%,transparent_70%)] blur-[80px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 max-w-7xl mx-auto">
          
          {/* Left Content */}
          <div className="flex-1 space-y-10 w-full">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300">
                <Globe className="w-4 h-4 text-[#00F0FF]" />
                <span>Global Infrastructure</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1]">
                Command Center for your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#8A2BE2] to-[#FF007F]">
                  Data Universe
                </span>
              </h2>
              <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                Monitor, analyze, and optimize your entire infrastructure from a single pane of glass. Our intuitive interface hides the complexity of enterprise-scale operations, empowering your team to make data-driven decisions instantly.
              </p>
            </div>
            
            {/* Interactive Feature List */}
            <div className="space-y-4">
              {solutions.map((solution) => {
                const isActive = activeSolution === solution.id;
                const Icon = solution.icon;
                return (
                  <div 
                    key={solution.id}
                    onMouseEnter={() => setActiveSolution(solution.id)}
                    className={`p-5 rounded-2xl border transition-all duration-300 cursor-pointer flex gap-4 items-start
                      ${isActive 
                        ? `bg-white/5 ${solution.border} shadow-[0_8px_30px_rgba(0,0,0,0.12)]` 
                        : 'border-transparent hover:bg-white/[0.02]'
                      }`}
                  >
                    <div className={`p-3 rounded-xl shrink-0 transition-colors duration-300 ${isActive ? solution.bg : 'bg-white/5'}`}>
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${isActive ? solution.color : 'text-gray-500'}`} />
                    </div>
                    <div>
                      <h3 className={`text-lg font-semibold mb-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-gray-300'}`}>
                        {solution.title}
                      </h3>
                      <p className={`text-sm leading-relaxed transition-colors duration-300 ${isActive ? 'text-gray-400' : 'text-gray-500'}`}>
                        {solution.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {stats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Mockup (High-Fidelity Dashboard) */}
          <div className="flex-1 relative w-full flex justify-center lg:justify-end perspective-[2000px]">
            {/* 3D Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,transparent_50%)] blur-3xl pointer-events-none" />
            
            <motion.div
              initial={{ rotateY: 15, rotateX: 5 }}
              animate={{ rotateY: [15, 5, 15], rotateX: [5, 2, 5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-full max-w-[600px] transform-style-3d"
            >
              {/* Main Dashboard Container */}
              <div className="rounded-2xl overflow-hidden bg-[#05050A]/90 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.1)] relative">
                
                {/* Dashboard Header */}
                <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-white/[0.02]">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="w-px h-4 bg-white/10 mx-2" />
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-mono">
                      <Globe className="w-3 h-3" /> us-east-1 cluster
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-32 h-6 bg-white/5 rounded-full border border-white/5" />
                    <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[#00F0FF] to-[#8A2BE2]" />
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 space-y-6">
                  {/* Top Metrics Row */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: "Network Traffic", value: "1.2 TB/s", color: "text-[#00F0FF]", trend: "+12%" },
                      { label: "Active Nodes", value: "8,432", color: "text-[#8A2BE2]", trend: "+5%" },
                      { label: "Threats Blocked", value: "142k", color: "text-[#FF007F]", trend: "-2%" }
                    ].map((metric, i) => (
                      <div key={i} className="bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col justify-between relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-16 h-16 bg-white/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150" />
                        <div className="text-xs text-gray-400 mb-2">{metric.label}</div>
                        <div className="flex items-end justify-between">
                          <div className={`text-xl font-bold ${metric.color}`}>{metric.value}</div>
                          <div className="text-[10px] text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">{metric.trend}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Main Chart Area */}
                  <div className="w-full h-48 bg-white/5 border border-white/5 rounded-xl p-4 relative overflow-hidden">
                    <div className="flex justify-between items-center mb-4">
                      <div className="text-sm font-medium text-gray-300">System Performance</div>
                      <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
                        <div className="text-xs text-gray-500">Live</div>
                      </div>
                    </div>
                    
                    {/* SVG Chart */}
                    <div className="absolute bottom-0 left-0 w-full h-32 flex items-end">
                      <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 400 100">
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
                          </linearGradient>
                          <linearGradient id="chartGrad2" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        
                        {/* Grid lines */}
                        <path d="M0,25 L400,25 M0,50 L400,50 M0,75 L400,75" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="4 4" />
                        
                        {/* Background Line */}
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          d="M 0 80 C 50 80, 50 40, 100 40 C 150 40, 150 70, 200 70 C 250 70, 250 30, 300 30 C 350 30, 350 60, 400 60 L 400 100 L 0 100 Z" 
                          fill="url(#chartGrad2)" 
                        />
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut" }}
                          d="M 0 80 C 50 80, 50 40, 100 40 C 150 40, 150 70, 200 70 C 250 70, 250 30, 300 30 C 350 30, 350 60, 400 60" 
                          fill="none" 
                          stroke="#8A2BE2" 
                          strokeWidth="2" 
                          strokeOpacity="0.5"
                        />

                        {/* Foreground Line */}
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                          d="M 0 60 C 50 60, 50 20, 100 20 C 150 20, 150 50, 200 50 C 250 50, 250 15, 300 15 C 350 15, 350 40, 400 40 L 400 100 L 0 100 Z" 
                          fill="url(#chartGrad)" 
                        />
                        <motion.path 
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 2, ease: "easeInOut", delay: 0.2 }}
                          d="M 0 60 C 50 60, 50 20, 100 20 C 150 20, 150 50, 200 50 C 250 50, 250 15, 300 15 C 350 15, 350 40, 400 40" 
                          fill="none" 
                          stroke="#00F0FF" 
                          strokeWidth="2" 
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Bottom Activity Log */}
                  <div className="space-y-3">
                    <div className="text-xs font-medium text-gray-500 uppercase tracking-wider">Recent Activity</div>
                    {[
                      { icon: Activity, color: "text-[#00F0FF]", bg: "bg-[#00F0FF]/10", text: "Auto-scaling triggered for cluster-alpha", time: "Just now" },
                      { icon: Shield, color: "text-[#FF007F]", bg: "bg-[#FF007F]/10", text: "DDoS mitigation active on edge node 4", time: "2m ago" },
                    ].map((log, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5">
                        <div className="flex items-center gap-3">
                          <div className={`p-1.5 rounded-md ${log.bg}`}>
                            <log.icon className={`w-3.5 h-3.5 ${log.color}`} />
                          </div>
                          <span className="text-sm text-gray-300">{log.text}</span>
                        </div>
                        <span className="text-xs text-gray-500">{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Widgets */}
              <motion.div 
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -right-12 top-20 bg-[#0B0B1A]/90 backdrop-blur-xl border border-white/10 p-4 rounded-xl shadow-2xl flex items-center gap-3"
              >
                <div className="relative">
                  <div className="w-10 h-10 rounded-full border-2 border-[#00F0FF] border-t-transparent animate-spin" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-[#00F0FF]" />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-400">Model Training</div>
                  <div className="text-sm font-bold text-white">84% Complete</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                className="absolute -left-8 bottom-24 bg-[#0B0B1A]/90 backdrop-blur-xl border border-white/10 p-3 rounded-xl shadow-2xl flex items-center gap-3"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-400/20 flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs font-medium text-white">System Optimal</div>
                  <div className="text-[10px] text-gray-400">All services operational</div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
