import { useEffect, useRef, useState } from "react";

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "Blockchain & Smart Contracts",
      icon: "fas fa-cube",
      gradient: "from-primary-500 to-secondary-500",
      skills: [
        { name: "Solidity", level: 90 },
        { name: "Ethers.js", level: 85 },
        { name: "zkApps (Circom/Noir)", level: 80 },
        { name: "Smart Contract Testing", level: 75 }
      ]
    },
    {
      title: "Web Development",
      icon: "fas fa-code",
      gradient: "from-blue-500 to-green-500",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "TailwindCSS", level: 90 }
      ]
    },
    {
      title: "Tools & Others",
      icon: "fas fa-tools",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 75 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 70 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Technical Skills</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">My expertise across blockchain and web development technologies</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center`}>
                  <i className={`${category.icon} text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-700 dark:text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className={`skill-bar bg-gradient-to-r ${
                          categoryIndex === 0 ? "from-primary-500 to-secondary-500" :
                          categoryIndex === 1 ? "from-blue-500 to-green-500" :
                          "from-purple-500 to-pink-500"
                        } h-2 rounded-full`}
                        style={{ 
                          width: isVisible ? `${skill.level}%` : "0%",
                          transition: "width 2s ease-in-out"
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
