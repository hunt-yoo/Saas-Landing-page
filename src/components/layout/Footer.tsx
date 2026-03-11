import { Hexagon } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#05050A] pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Hexagon className="w-6 h-6 text-[#00F0FF] fill-[#00F0FF]/20" />
              <span className="text-lg font-bold tracking-wider text-white">AXIOM<span className="text-[#00F0FF]">.AI</span></span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Building the infrastructure for the next generation of artificial intelligence and machine learning applications.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-[#00F0FF] transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© 2024 Axiom AI Inc. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
