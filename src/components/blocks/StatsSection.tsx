const stats = [
  { label: "Data Processed", value: "10PB+" },
  { label: "Active Users", value: "2.5M" },
  { label: "Uptime", value: "99.99%" },
  { label: "Global Nodes", value: "350+" },
];

export function StatsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#05050A]/50 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2]">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Social Proof / Logos */}
        <div className="mt-20 pt-10 border-t border-white/5">
          <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-widest">Trusted by innovative teams worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {['Acme Corp', 'GlobalTech', 'Axiom', 'Stark Ind', 'CyberDyne'].map((company, i) => (
              <div key={i} className="text-xl font-bold font-mono text-white">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
