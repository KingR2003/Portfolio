import React, { useState, useEffect } from 'react';

const navItems = ['Home', 'Skills', 'Projects', 'Experience', 'Highlights', 'Contact'];

const Navbar = () => {
  const [active, setActive] = useState('Home');

  // Detect which section is currently in view while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Add offset for better detection

      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].toLowerCase());
        if (section && section.offsetTop <= scrollPosition) {
          setActive(navItems[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click to scroll to section
  const handleClick = (item) => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Harsha.dev</div>
        <ul className="flex gap-4 text-sm md:text-base">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`cursor-pointer px-3 py-1 rounded-full transition-all ${
                active === item
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
