import { Link } from "react-router-dom";
import { Button } from "../ui/Button";
import { GlassCard } from "../ui/GlassCard";
import { ArrowRight } from "lucide-react";
import { CTALights } from "../ui/CTALights";

export function BottomCTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <CTALights />
      <div className="container mx-auto px-4 relative z-10">
        <GlassCard className="max-w-5xl mx-auto p-12 md:p-20 text-center relative overflow-hidden">
          {/* Glowing Ribbons inside CTA */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-3xl pointer-events-none">
            <div className="absolute top-[-50%] left-[-10%] w-[120%] h-[120%] bg-gradient-to-b from-[#8A2BE2]/20 to-transparent rounded-full blur-3xl" />
            <div className="absolute bottom-[-50%] right-[-10%] w-[120%] h-[120%] bg-gradient-to-t from-[#00F0FF]/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Accelerate?</h2>
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Join the elite teams building the future of technology. Start your 14-day free trial today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button size="lg" variant="primary">
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                Contact Sales
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
