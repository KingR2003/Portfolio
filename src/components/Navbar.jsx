import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navItems = ['Home', 'Skills', 'Projects', 'Experience', 'Highlights', 'Contact'];

const Navbar = () => {
  const [active, setActive] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);

  // Handle scroll to highlight current section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
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

  const handleClick = (item) => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setActive(item);
    setIsOpen(false); // close mobile menu
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 bg-opacity-90 backdrop-blur-md transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-white font-bold text-xl">Harsha.dev</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-4 text-sm md:text-base">
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

        {/* Mobile menu button */}
        <div className="md:hidden text-white text-2xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-900 text-white">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => handleClick(item)}
              className={`cursor-pointer px-4 py-2 rounded-full transition-all ${
                active === item
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
