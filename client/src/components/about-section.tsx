export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Passionate blockchain developer with expertise in zero-knowledge proofs, smart contracts, and decentralized applications.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-4">Professional Journey</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                With a Bachelor's in Computing from the National University of Singapore, I've specialized in blockchain technology and cryptography. 
                My journey spans from traditional web development to cutting-edge zkApp development.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">4+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-secondary-50 to-accent-cyan/10 dark:from-secondary-900/20 dark:to-accent-cyan/5 rounded-xl">
                  <div className="text-2xl font-bold text-secondary-600 dark:text-secondary-400">15+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects Completed</div>
                </div>
              </div>
            </div>
            
            <div className="glass p-6 rounded-2xl">
              <h4 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">Education</h4>
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
                  <i className="fas fa-graduation-cap text-white"></i>
                </div>
                <div>
                  <h5 className="font-semibold text-slate-900 dark:text-white">Bachelor Computing</h5>
                  <p className="text-slate-600 dark:text-slate-400">National University of Singapore</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">Jan 2017 – Feb 2021</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
                    Specialized in Blockchain Fundamentals, Distributed Systems, Cryptography, and Web Applications
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            {/* Professional workspace image */}
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Professional developer workspace" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            
            <div className="absolute -bottom-6 -left-6 glass p-6 rounded-xl">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-accent-emerald rounded-full animate-pulse"></div>
                <span className="text-slate-700 dark:text-slate-300 font-medium">Available for Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
