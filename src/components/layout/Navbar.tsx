import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";
import { Hexagon } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "Platform", id: "platform" },
  { name: "Solutions", id: "solutions" },
  { name: "How to Use", id: "how-to-use" },
  { name: "Pricing", id: "pricing" },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname !== "/") return;

    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 150; // offset for navbar

      let currentActive = "";
      sections.forEach(section => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentActive = section.id;
          }
        }
      });

      setActiveSection(currentActive);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#05050A]/50 backdrop-blur-xl">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex items-center gap-2 cursor-pointer">
          <Hexagon className="w-8 h-8 text-[#00F0FF] fill-[#00F0FF]/20" />
          <span className="text-xl font-bold tracking-wider text-white">AXIOM<span className="text-[#00F0FF]">.AI</span></span>
        </Link>
        
        <div className="hidden md:flex items-center gap-12 text-base font-medium text-gray-300">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`transition-colors cursor-pointer ${
                activeSection === link.id
                  ? "bg-gradient-to-r from-[#00F0FF] to-[#8A2BE2] text-transparent bg-clip-text font-bold"
                  : "hover:text-white"
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-gray-300 hover:text-white hidden sm:block">Log in</Link>
          <Link to="/signup">
            <Button size="sm" variant="primary">Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
