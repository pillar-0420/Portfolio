export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Franklin Liu</h3>
            <p className="text-slate-400 max-w-md mx-auto">
              Blockchain Developer specializing in zkApps, Smart Contracts, and Web3 Development
            </p>
          </div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:franklin.liu1118@gmail.com" 
              className="text-slate-400 hover:text-primary-400 transition-colors duration-300"
            >
              <i className="fab fa-linkedin text-2xl"></i>
            </a>
            <a 
              href="#" 
              className="text-slate-400 hover:text-primary-400 transition-colors duration-300"
            >
              <i className="fab fa-github text-2xl"></i>
            </a>
            <a 
              href="mailto:franklin.liu1118@gmail.com" 
              className="text-slate-400 hover:text-primary-400 transition-colors duration-300"
            >
              <i className="fas fa-envelope text-2xl"></i>
            </a>
          </div>
          
          <div className="border-t border-slate-800 pt-8">
            <p className="text-slate-400">
              © 2024 Franklin Liu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
