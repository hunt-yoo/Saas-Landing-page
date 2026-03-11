import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "../components/ui/Button";
import { GlassCard } from "../components/ui/GlassCard";
import { Hexagon, ArrowRight, Github, Mail } from "lucide-react";

export function SignUp() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', password: '' });
  const [errors, setErrors] = useState<{ firstName?: string; lastName?: string; email?: string; password?: string }>({});

  const handleSocialAuth = (provider: 'github' | 'google') => {
    const url = provider === 'github' ? 'https://github.com/login' : 'https://accounts.google.com/signin';
    window.open(url, `${provider}_auth`, 'width=500,height=600,left=200,top=200');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { firstName?: string; lastName?: string; email?: string; password?: string } = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Signing up with:", formData);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <main className="min-h-screen pt-20 flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        {/* Electric Purple Glow */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.15, 1],
          }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#8A2BE2]/30 rounded-full blur-[120px] mix-blend-screen"
        />
        
        {/* Neon Cyan Glow */}
        <motion.div 
          animate={{ 
            opacity: [0.2, 0.4, 0.2], 
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#00F0FF]/30 rounded-full blur-[120px] mix-blend-screen"
        />

        {/* Central Halo */}
        <motion.div 
          animate={{ 
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.1)_0%,rgba(0,240,255,0.15)_30%,transparent_70%)] rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 py-20">
        <GlassCard className="max-w-md mx-auto p-8 md:p-10 relative overflow-hidden">
          <div className="text-center mb-8">
            <Link to="/" className="inline-flex items-center gap-2 mb-6">
              <Hexagon className="w-8 h-8 text-[#00F0FF] fill-[#00F0FF]/20" />
              <span className="text-xl font-bold tracking-wider text-white">AXIOM<span className="text-[#00F0FF]">.AI</span></span>
            </Link>
            <h1 className="text-2xl font-bold mb-2">Create an account</h1>
            <p className="text-gray-400 text-sm">Start your 14-day free trial today</p>
          </div>

          <div className="space-y-4 mb-8">
            <button 
              onClick={() => handleSocialAuth('github')}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
            >
              <Github className="w-5 h-5" />
              Sign up with GitHub
            </button>
            <button 
              onClick={() => handleSocialAuth('google')}
              className="w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors text-sm font-medium"
            >
              <Mail className="w-5 h-5" />
              Sign up with Google
            </button>
          </div>

          <div className="relative flex items-center py-4 mb-4">
            <div className="flex-grow border-t border-white/10"></div>
            <span className="flex-shrink-0 mx-4 text-gray-500 text-xs uppercase tracking-wider">Or continue with email</span>
            <div className="flex-grow border-t border-white/10"></div>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="firstName">First name</label>
                <input 
                  type="text" 
                  id="firstName" 
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full bg-[#05050A]/50 border ${errors.firstName ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#4D7CFF] focus:ring-[#4D7CFF]'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all`}
                  placeholder="Jane"
                />
                {errors.firstName && <p className="text-red-400 text-xs mt-1.5">{errors.firstName}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="lastName">Last name</label>
                <input 
                  type="text" 
                  id="lastName" 
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full bg-[#05050A]/50 border ${errors.lastName ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#4D7CFF] focus:ring-[#4D7CFF]'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all`}
                  placeholder="Doe"
                />
                {errors.lastName && <p className="text-red-400 text-xs mt-1.5">{errors.lastName}</p>}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="email">Email address</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-[#05050A]/50 border ${errors.email ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#4D7CFF] focus:ring-[#4D7CFF]'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all`}
                placeholder="name@company.com"
              />
              {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1.5" htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                value={formData.password}
                onChange={handleChange}
                className={`w-full bg-[#05050A]/50 border ${errors.password ? 'border-red-500/50 focus:border-red-500 focus:ring-red-500' : 'border-white/10 focus:border-[#4D7CFF] focus:ring-[#4D7CFF]'} rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:outline-none focus:ring-1 transition-all`}
                placeholder="Create a password"
              />
              {errors.password && <p className="text-red-400 text-xs mt-1.5">{errors.password}</p>}
            </div>
            
            <Button variant="primary" className="w-full mt-6 py-3" type="submit">
              Create Account <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <p className="text-center text-sm text-gray-400 mt-8">
            Already have an account? <Link to="/login" className="text-[#00F0FF] hover:text-white transition-colors">Log in</Link>
          </p>
        </GlassCard>
      </div>
    </main>
  );
}
