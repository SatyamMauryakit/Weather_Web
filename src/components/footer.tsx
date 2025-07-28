import React from "react";

const socialLinks = [
  { href: "https://github.com/satyammauryakit", label: "GitHub", icon: "⚡" },
  { href: "https://twitter.com/your-profile", label: "Twitter", icon: "🌤️" },
  { href: "https://linkedin.com/in/thesatyammaurya", label: "LinkedIn", icon: "🌍" },
  { href: "sroj6393@gmail.com", label: "Email", icon: "📧" },
];

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#search", label: "Search Weather" },
  { href: "#favorites", label: "My Cities" },
  { href: "#forecast", label: "Forecast" },
];

function Footer() {
  const currentYear = new Date().getFullYear();
  const lastUpdated = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-black text-gray-300 mt-auto border-t border-gray-700">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand & Description */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <span className="text-3xl">🌦️</span>
            <h3 className="text-xl font-bold text-white">WeatherHub</h3>
          </div>
          <p className="text-sm leading-relaxed">
            Your go-to app for real-time weather updates. Simple, accurate, and always reliable.
          </p>
          <button 
            onClick={scrollToTop}
            className="text-blue-400 hover:text-blue-300 transition-colors text-sm flex items-center gap-1"
            aria-label="Scroll to top"
          >
            <span>↑</span> Back to Top
          </button>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Explore</h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm hover:text-blue-400 transition-colors duration-200 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social & Contact */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Connect</h4>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-md flex items-center justify-center hover:bg-blue-900 transition-all duration-300 hover:scale-105"
              >
                <span className="text-lg">{link.icon}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Credits & Info */}
        <div className="space-y-4">
          <h4 className="text-lg font-semibold text-white">Info</h4>
          <div className="text-sm space-y-2">
            <p>Powered by OpenWeatherMap</p>
            <p>Weather Tip: Check forecasts daily!</p>
            <p className="flex items-center gap-2">
              <span>🔄</span> Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-4 text-center text-xs text-gray-500">
          <p>© {currentYear} WeatherHub. All rights reserved.</p>
          <div className="mt-1 flex justify-center space-x-4">
            <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy</a>
            <span>•</span>
            <a href="#terms" className="hover:text-blue-400 transition-colors">Terms</a>
            <span>•</span>
            <a 
              href="https://openweathermap.org/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              API Credits
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
