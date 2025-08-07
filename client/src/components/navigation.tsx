import { useState, useEffect } from "react";
import { useTheme } from "./theme-provider";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "glass" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">FL</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection("home")} 
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection("about")} 
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("experience")} 
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Experience
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("skills")} 
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300"
              >
                Contact
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleTheme}
              className="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-slate-800/50 transition-colors duration-300"
            >
              <i className={`fas ${theme === "dark" ? "fa-sun" : "fa-moon"} text-slate-700 dark:text-slate-300`}></i>
            </button>
            
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg glass"
            >
              <i className="fas fa-bars text-slate-700 dark:text-slate-300"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass rounded-lg mt-2 p-4 space-y-2">
            <button 
              onClick={() => scrollToSection("home")} 
              className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection("about")} 
              className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection("experience")} 
              className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection("projects")} 
              className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection("skills")} 
              className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection("contact")} 
              className="block w-full text-left text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-300 py-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
