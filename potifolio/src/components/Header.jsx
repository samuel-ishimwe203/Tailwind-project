import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // install lucide-react for icons
import logo from '../assets/images/smlog.png';
import image from '../assets/images/sam.jpg';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-bg-input-blue-light-light text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        
        {/* Logo */}
        <div>
          <img
            className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-blue-500 object-cover"
            src={logo}
            alt="Logo"
          />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex">
          <ul className="flex gap-8 text-lg">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#experiences" className="hover:text-blue-300">Experiences</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </nav>

        {/* Profile Image */}
        <div className="hidden md:block">
          <img
            className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-blue-500 object-cover"
            src={image}
            alt="Profile"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="md:hidden bg-bg-input-blue-light px-4 py-3">
          <ul className="flex flex-col gap-4 text-lg">
            <li><a href="#home" className="hover:text-blue-300">Home</a></li>
            <li><a href="#about" className="hover:text-blue-300">About</a></li>
            <li><a href="#skills" className="hover:text-blue-300">Skills</a></li>
            <li><a href="#experiences" className="hover:text-blue-300">Experiences</a></li>
            <li><a href="#contact" className="hover:text-blue-300">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
