import { motion } from "motion/react";

export function CTALights() {
  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[#05050A]/20 z-10" />
      <svg className="absolute top-[95%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[200%]" viewBox="0 300 1440 600" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cta-ribbon-blue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00F0FF" stopOpacity="0" />
            <stop offset="20%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#8A2BE2" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#8A2BE2" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="cta-ribbon-purple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8A2BE2" stopOpacity="0" />
            <stop offset="20%" stopColor="#8A2BE2" stopOpacity="0.8" />
            <stop offset="80%" stopColor="#00F0FF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
          </linearGradient>
          <filter id="cta-blur-glow">
            <feGaussianBlur stdDeviation="12" />
          </filter>
          <filter id="cta-blur-glow-lg">
            <feGaussianBlur stdDeviation="24" />
          </filter>
          <filter id="cta-blur-glow-xl">
            <feGaussianBlur stdDeviation="48" />
          </filter>
        </defs>
        
        {/* Left sweeping ribbons */}
        <g transform="translate(-100, 0) rotate(-5)">
          <motion.path
            d="M0,500 Q400,700 800,500 T1600,500"
            fill="none"
            stroke="url(#cta-ribbon-blue)"
            strokeWidth="160"
            filter="url(#cta-blur-glow-xl)"
            animate={{ d: ["M0,500 Q400,700 800,500 T1600,500", "M0,550 Q400,650 800,550 T1600,550", "M0,500 Q400,700 800,500 T1600,500"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            opacity={0.4}
          />
          <motion.path
            d="M0,520 Q400,720 800,520 T1600,520"
            fill="none"
            stroke="url(#cta-ribbon-blue)"
            strokeWidth="60"
            filter="url(#cta-blur-glow-lg)"
            animate={{ d: ["M0,520 Q400,720 800,520 T1600,520", "M0,570 Q400,670 800,570 T1600,570", "M0,520 Q400,720 800,520 T1600,520"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            opacity={0.6}
          />
          <motion.path
            d="M0,540 Q400,740 800,540 T1600,540"
            fill="none"
            stroke="#ffffff"
            strokeWidth="4"
            filter="url(#cta-blur-glow)"
            animate={{ d: ["M0,540 Q400,740 800,540 T1600,540", "M0,590 Q400,690 800,590 T1600,590", "M0,540 Q400,740 800,540 T1600,540"] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            opacity={0.8}
          />
        </g>

        {/* Right sweeping ribbons */}
        <g transform="translate(100, 0) rotate(5)">
          <motion.path
            d="M-200,500 Q400,300 800,450 T2400,600"
            fill="none"
            stroke="url(#cta-ribbon-purple)"
            strokeWidth="180"
            filter="url(#cta-blur-glow-xl)"
            animate={{ d: ["M-200,500 Q400,300 800,450 T2400,600", "M-200,450 Q400,350 800,400 T2400,550", "M-200,500 Q400,300 800,450 T2400,600"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            opacity={0.3}
          />
          <motion.path
            d="M-200,520 Q400,320 800,470 T2400,620"
            fill="none"
            stroke="url(#cta-ribbon-purple)"
            strokeWidth="80"
            filter="url(#cta-blur-glow-lg)"
            animate={{ d: ["M-200,520 Q400,320 800,470 T2400,620", "M-200,470 Q400,370 800,420 T2400,570", "M-200,520 Q400,320 800,470 T2400,620"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
            opacity={0.5}
          />
          <motion.path
            d="M-200,540 Q400,340 800,490 T2400,640"
            fill="none"
            stroke="#ffffff"
            strokeWidth="6"
            filter="url(#cta-blur-glow)"
            animate={{ d: ["M-200,540 Q400,340 800,490 T2400,640", "M-200,490 Q400,390 800,440 T2400,590", "M-200,540 Q400,340 800,490 T2400,640"] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            opacity={0.7}
          />
        </g>
      </svg>
    </div>
  );
}
