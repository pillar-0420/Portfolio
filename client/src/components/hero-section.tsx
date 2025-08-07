import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center tech-pattern relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white mb-4">
                Franklin 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-secondary-500"> Liu</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-6">
                Blockchain Developer
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Specialized in zkApps, Smart Contracts, and Web3 Development. 
                Building the future of decentralized applications with cutting-edge blockchain technology.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection("projects")}
                className="px-8 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 font-medium"
              >
                View Projects
              </Button>
              <Button 
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="px-8 py-3 glass text-slate-700 dark:text-slate-300 rounded-xl hover:bg-white/20 dark:hover:bg-slate-800/50 transition-all duration-300 font-medium border-none"
              >
                Get In Touch
              </Button>
            </div>
            
            <div className="flex space-x-6 pt-4">
              <a 
                href="mailto:franklin.liu1118@gmail.com" 
                className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a 
                href="#" 
                className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="mailto:franklin.liu1118@gmail.com" 
                className="text-slate-600 dark:text-slate-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors duration-300"
              >
                <i className="fas fa-envelope text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="relative z-10">
              {/* Professional headshot placeholder with blockchain-inspired frame */}
              <div className="w-96 h-96 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 p-1">
                <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                  <i className="fas fa-user text-6xl text-slate-400 dark:text-slate-500"></i>
                </div>
              </div>
            </div>
            
            {/* Floating tech icons */}
            <div className="absolute -top-8 -left-8 w-16 h-16 glass rounded-xl flex items-center justify-center animate-float" style={{animationDelay: "0.5s"}}>
              <i className="fab fa-ethereum text-2xl text-primary-500"></i>
            </div>
            <div className="absolute top-12 -right-12 w-16 h-16 glass rounded-xl flex items-center justify-center animate-float" style={{animationDelay: "1s"}}>
              <i className="fas fa-cube text-2xl text-secondary-500"></i>
            </div>
            <div className="absolute -bottom-8 right-8 w-16 h-16 glass rounded-xl flex items-center justify-center animate-float" style={{animationDelay: "1.5s"}}>
              <i className="fas fa-code text-2xl text-accent-cyan"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
