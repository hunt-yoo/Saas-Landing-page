import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { Hexagon, ArrowRight, Github, Mail } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});

  const handleSocialAuth = (provider: 'github' | 'google') => {
    const url = provider === 'github' ? 'https://github.com/login' : 'https://accounts.google.com/signin';
    window.open(url, `${provider}_auth`, 'width=500,height=600,left=200,top=200');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { email?: string; password?: string } = {};
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Logging in with:", { email, password });
    }
  };

  return (
    <main className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Neon Cyan Glow */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00F0FF]/30 rounded-full blur-[120px] mix-blend-screen"
        />
        
        {/* Electric Purple Glow */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#8A2BE2]/30 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Central Halo */}
        <motion.div 
          animate={{ 
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.15)_0%,rgba(138,43,226,0.1)_30%,transparent_70%)] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <GlassCard className="max-w-md mx-auto p-8 md:p-10 relative overflow-hidden">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-[#00F0FF] fill-[#00F0FF]/20" />
              <span className="text-xl font-bold tracking-wider text-white">AXIOM<span className="text-[#00F0FF]">.AI</span></span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
            <p className="text-gray-400 text-sm">Log in to your account to continue</p>
          </div>

          <div className="space-y-4 mb-8">
            <button 
              onClick={() => handleSocialAuth('github')}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
            >
              <Github className="w-5 h-5" />
              Continue with GitHub
            </button>
            <button 
              onClick={() => handleSocialAuth('google')}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Continue with Google
            </button>
          </div>

          <div className="relative flex items-center py-4 mb-4">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider">Or continue with email</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full bg-[#05050A]/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#4D7CFF] focus:ring-[#4D7CFF]'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all`}
                placeholder="name@company.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-sm font-medium text-gray-300" htmlFor="password">Password</label>
                <a href="#" className="text-xs text-[#00F0FF] hover:text-white transition-colors">Forgot password?</a>
              </div>
              <input 
                type="password" 
                id="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`w-full bg-[#05050A]/50 border ${errors.password ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#4D7CFF] focus:ring-[#4D7CFF]'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all`}
                placeholder="••••••••"
              />
              {errors.password && <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>}
            </div>
            
            <Button variant="primary" className="w-full mt-6 py-3" type="submit">
              Log In <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            Don't have an account? <Link to="/signup" className="text-[#00F0FF] hover:text-white transition-colors">Sign up</Link>
          </p>
        </GlassCard>
      </div>
    </main>
  );
}
