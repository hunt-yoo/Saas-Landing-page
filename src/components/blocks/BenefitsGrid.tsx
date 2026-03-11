import { GlassCard } from "../ui/GlassCard";
import { Layers, Lock, Zap, RefreshCw, BarChart, Globe2 } from "lucide-react";
import { FlowingLights } from "../ui/FlowingLights";

const benefits = [
  { icon: Zap, title: "Lightning Fast", desc: "Optimized for speed with edge computing capabilities." },
  { icon: Lock, title: "Secure by Design", desc: "Enterprise-grade security protocols built-in." },
  { icon: Layers, title: "Modular Architecture", desc: "Easily integrate with your existing tech stack." },
  { icon: RefreshCw, title: "Real-time Sync", desc: "Instantaneous data synchronization across nodes." },
  { icon: BarChart, title: "Advanced Analytics", desc: "Deep insights powered by machine learning." },
  { icon: Globe2, title: "Global Reach", desc: "Deploy anywhere in the world with one click." },
];

export function BenefitsGrid() {
  return (
    <section className="py-24 relative">
      <FlowingLights />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Core Benefits</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Everything you need to scale your operations securely and efficiently.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <GlassCard key={idx} className="p-6 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#00F0FF]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{benefit.title}</h3>
                <p className="text-sm text-gray-400">{benefit.desc}</p>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
