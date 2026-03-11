import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-white shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(138,43,226,0.6)] border-none",
      secondary: "bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/10",
      outline: "bg-transparent text-white border border-[#00F0FF]/50 hover:border-[#00F0FF] hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
      ghost: "bg-transparent text-gray-300 hover:text-white hover:bg-white/5",
    };
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-semibold",
    };

    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center rounded-full transition-all duration-300 overflow-hidden",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {variant === 'primary' && (
          <div className="absolute inset-0 -translate-x-full hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
        )}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    );
  }
);
Button.displayName = "Button";
