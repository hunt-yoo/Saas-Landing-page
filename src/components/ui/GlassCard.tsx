import { HTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

export const GlassCard = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & { glow?: boolean }>(
  ({ className, glow = false, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-2xl bg-[#0B0B1A]/60 backdrop-blur-xl border border-white/10",
          "transition-all duration-300 hover:border-white/20 hover:bg-[#0B0B1A]/80",
          glow && "shadow-[0_0_30px_-10px_rgba(0,240,255,0.3)] hover:shadow-[0_0_40px_-10px_rgba(0,240,255,0.5)]",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        {children}
      </div>
    );
  }
);
GlassCard.displayName = "GlassCard";
