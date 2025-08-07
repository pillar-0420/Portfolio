import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Decentralized Voting dApp",
      period: "Jan 2024 – Jun 2025",
      description: "A secure voting platform built on Ethereum with wallet-based authentication. Votes are immutably recorded on-chain ensuring transparency and trust.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Developed voting contract with wallet-based authentication",
        "Frontend connected via Ethers.js with on-chain vote logging"
      ],
      skills: ["Solidity", "Hardhat", "React"],
      gradient: "from-primary-900/80 to-transparent"
    },
    {
      title: "zkApp: Private Age Verification",
      period: "Jul 2023 – Dec 2023",
      description: "Zero-knowledge proof application that verifies a user is over 18 without revealing their actual age, ensuring maximum privacy while maintaining verification integrity.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      features: [
        "Built ZK circuits to verify user is over 18 without revealing age",
        "Used SnarkJS to generate and verify zero-knowledge proofs"
      ],
      skills: ["Circom", "Noir", "SnarkJS"],
      gradient: "from-secondary-900/80 to-transparent"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">Showcasing my expertise in blockchain and Web3 development</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="relative mb-6 overflow-hidden rounded-xl">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${project.gradient}`}></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-primary-100">{project.period}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  {project.description}
                </p>
                
                <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <i className="fas fa-check text-accent-emerald mt-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={`px-3 py-1 rounded-full text-sm ${
                      skillIndex === 0 ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" :
                      skillIndex === 1 ? "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300" :
                      "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300"
                    }`}>
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4 pt-4">
                  <a href="#" className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300">
                    <i className="fab fa-github"></i>
                    <span>View Code</span>
                  </a>
                  <a href="#" className="flex items-center space-x-2 text-secondary-600 dark:text-secondary-400 hover:text-secondary-700 dark:hover:text-secondary-300 transition-colors duration-300">
                    <i className="fas fa-external-link-alt"></i>
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" className="inline-flex items-center space-x-2 px-8 py-3 glass text-slate-700 dark:text-slate-300 rounded-xl hover:bg-white/20 dark:hover:bg-slate-800/50 transition-all duration-300 font-medium border-none">
            <span>View All Projects</span>
            <i className="fas fa-arrow-right"></i>
          </Button>
        </div>
      </div>
    </section>
  );
}
