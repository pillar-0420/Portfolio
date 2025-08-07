export default function ExperienceSection() {
  const experiences = [
    {
      title: "zkApp Developer",
      company: "Cyfrin Community",
      period: "Jul 2023 – Jun 2025",
      icon: "fas fa-code",
      gradient: "from-primary-500 to-secondary-500",
      achievements: [
        "Gained hands-on experience with zkApps and Layer 2 architecture",
        "Developed Decentralized Voting dApp and Private Age Verification zkApp using Circom, Noir, SnarkJS"
      ],
      skills: ["zkApps", "Circom", "SnarkJS"]
    },
    {
      title: "Web3 Developer",
      company: "ChainLabs (Internship)",
      period: "Jan 2023 – Jun 2023",
      icon: "fab fa-ethereum",
      gradient: "from-secondary-500 to-accent-cyan",
      achievements: [
        "Designed and deployed smart contracts using Solidity on Ethereum testnets",
        "Integrated contracts with simple dApp interfaces using Ethers.js",
        "Worked with senior engineers to write unit tests and optimize gas usage"
      ],
      skills: ["Solidity", "Ethers.js", "Smart Contracts"]
    },
    {
      title: "Web Developer",
      company: "Freelancer",
      period: "Oct 2021 – Dec 2022",
      icon: "fas fa-laptop-code",
      gradient: "from-accent-emerald to-accent-amber",
      achievements: [
        "Delivered responsive, full-stack web apps for startup clients using React, Next.js, and Node.js",
        "Created landing pages, dashboards, authentication flows, and admin panels",
        "Built and deployed projects on Vercel, Heroku, and Netlify"
      ],
      skills: ["React", "Node.js", "Next.js"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Experience</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400">My professional journey in blockchain and web development</p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start space-x-8">
                <div className={`flex-shrink-0 w-16 h-16 bg-gradient-to-br ${exp.gradient} rounded-xl flex items-center justify-center relative z-10`}>
                  <i className={`${exp.icon} text-white text-xl`}></i>
                </div>
                
                <div className="flex-1 glass p-8 rounded-2xl">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                      <p className="text-lg text-primary-600 dark:text-primary-400">{exp.company}</p>
                    </div>
                    <span className="text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-sm">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="flex items-start space-x-2">
                        <i className="fas fa-chevron-right text-primary-500 mt-1"></i>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className={`px-3 py-1 rounded-full text-sm ${
                        skillIndex === 0 ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300" :
                        skillIndex === 1 ? "bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300" :
                        "bg-accent-cyan/20 text-accent-cyan"
                      }`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
