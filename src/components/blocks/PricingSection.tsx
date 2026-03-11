import { useState } from "react";
import { motion } from "motion/react";
import { Check, Diamond, Hexagon, ArrowUpRight } from "lucide-react";
import { Button } from "../ui/Button";

const plans = [
  {
    name: "Basic",
    description: "Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.",
    monthlyPrice: "$39.99",
    yearlyPrice: "$399",
    features: [
      "30+ Features",
      "Priority Support",
      "4 Team Members",
      "Premium Features",
      "Data Insights",
    ],
    buttonText: "Get Started",
    icon: <Diamond className="w-5 h-5 text-[#8A2BE2]" />,
    highlighted: false,
  },
  {
    name: "Standard",
    description: "Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.",
    monthlyPrice: "$69.99",
    yearlyPrice: "$699",
    features: [
      "Access 80+ Enterprise Features",
      "Priority Support",
      "10 Team Members",
      "Premium Features",
      "Unlimited Data Insights",
    ],
    buttonText: "Get Started",
    icon: <Diamond className="w-5 h-5 text-white" fill="currentColor" />,
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Harnessing the power of artificial intelligence to revolutionize industries and enhance human experiences.",
    monthlyPrice: "Contact",
    yearlyPrice: "Contact",
    features: [
      "Access All Features",
      "Priority Support",
      "Unlimited Members",
      "Premium Features",
      "Unlimited Data Insights",
    ],
    buttonText: "Get Started",
    icon: <Hexagon className="w-5 h-5 text-[#8A2BE2]" />,
    highlighted: false,
  },
];

export function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 relative overflow-hidden bg-[#05050A] scroll-mt-20">
      {/* Perspective Grid Background */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <motion.div 
          animate={{ backgroundPosition: ["0px 0px", "0px 4rem"] }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute w-[200%] h-[200%] bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [transform:perspective(1000px)_rotateX(60deg)_translateY(-20%)] [transform-origin:center_center] opacity-30" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#05050A] via-transparent to-[#05050A] opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#05050A_70%)]" />
        
        {/* Animated Aurora Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-[#8A2BE2]/20 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#00F0FF]/10 blur-[150px] rounded-full"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#8A2BE2]/50" />
            <span className="text-sm font-medium text-[#8A2BE2] uppercase tracking-wider">Subscription</span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#8A2BE2]/50" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Choose your plan</h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            All plans come with a 60-day money-back guarantee.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center p-1 bg-white/5 border border-white/10 rounded-full">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                !isYearly ? "bg-[#0B0B1A] text-white shadow-lg border border-white/10" : "text-gray-400 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all cursor-pointer ${
                isYearly ? "bg-[#0B0B1A] text-white shadow-lg border border-white/10" : "text-gray-400 hover:text-white"
              }`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[#1A1A3A] to-[#0B0B1A] border border-[#8A2BE2]/50 shadow-[0_0_40px_rgba(138,43,226,0.2)] md:-translate-y-4"
                  : "bg-[#0B0B1A]/80 border border-white/10 backdrop-blur-sm"
              }`}
            >
              {/* Top Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center border ${
                  plan.highlighted ? "bg-[#1A1A3A] border-[#8A2BE2]" : "bg-[#0B0B1A] border-white/10"
                }`}>
                  {plan.icon}
                </div>
              </div>

              <div className="mt-6 mb-6">
                <h3 className="text-2xl font-bold text-white mb-3">{plan.name}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {plan.description}
                </p>
              </div>

              <div className="h-px w-full bg-white/10 mb-6" />

              <div className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="mt-1 w-4 h-4 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </div>
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                {plan.monthlyPrice === "Contact" ? (
                  <div className="text-4xl font-bold text-white">Contact</div>
                ) : (
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-sm text-gray-400">
                      {isYearly ? "/yearly" : "/per month"}
                    </span>
                  </div>
                )}
              </div>

              <button
                onClick={() => {
                  document.getElementById('pricing-cta')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`group relative w-[160px] mx-auto py-3 rounded-full flex items-center justify-center gap-2 text-sm font-medium transition-all duration-500 cursor-pointer ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white hover:opacity-90 hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]"
                    : "text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.4)]"
                }`}
              >
                {!plan.highlighted && (
                  <>
                    {/* Base subtle border */}
                    <div className="absolute inset-0 rounded-full border border-white/10" />
                    
                    {/* Rotating glow container */}
                    <div className="absolute inset-0 overflow-hidden rounded-full">
                      {/* Pre-hover state: Left/Right bright, tightly hugging the curves */}
                      <div className="absolute top-1/2 left-1/2 w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-100 group-hover:opacity-0 group-hover:rotate-90 bg-[conic-gradient(from_0deg,transparent_0deg,transparent_75deg,rgba(255,255,255,1)_90deg,transparent_105deg,transparent_255deg,rgba(255,255,255,1)_270deg,transparent_285deg,transparent_360deg)]" />
                      
                      {/* Hover state: Top short, Bottom long eating into curves, smooth natural fade */}
                      <div className="absolute top-1/2 left-1/2 w-[200%] aspect-square -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 group-hover:opacity-100 rotate-[-90deg] group-hover:rotate-0 bg-[conic-gradient(from_0deg,rgba(255,255,255,1)_0deg,rgba(255,255,255,1)_2deg,transparent_65deg,transparent_85deg,rgba(255,255,255,1)_176deg,rgba(255,255,255,1)_184deg,transparent_275deg,transparent_295deg,rgba(255,255,255,1)_358deg,rgba(255,255,255,1)_360deg)]" />
                    </div>
                    
                    {/* Inner dark cover */}
                    <div className="absolute inset-[1px] rounded-full bg-[#05050A] transition-colors duration-500 group-hover:bg-[#0B0B1A]" />
                  </>
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {plan.buttonText} <ArrowUpRight className="w-4 h-4" />
                </span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section inside Pricing */}
        <div id="pricing-cta" className="mt-32 text-center scroll-mt-24">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Make your Productivity more<br />efficient. From this time.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-sm md:text-base">
            Get the Demo and unplash your productivity. Feel Free to get<br />the lastest Technology. Have a good time
          </p>
          <button className="group relative px-8 py-3 bg-white text-[#05050A] rounded-full font-bold transition-all duration-300 cursor-pointer hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:bg-gray-50 overflow-hidden">
            <span className="relative z-10">Buy Axiom</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(0,0,0,0.05)] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </button>
        </div>
      </div>
    </section>
  );
}
