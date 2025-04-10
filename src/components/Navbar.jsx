import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import garkLogo from '../assets/gark_logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo and Brand */}
        <NavLink
          to="/"
          className="flex items-center space-x-2 text-2xl font-extrabold tracking-tight text-(--color-primary)"
        >
          <img src={garkLogo} alt="Gark Edge logo" className="w-8 h-8" />
          <span>Gark Edge</span>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-medium items-center text-text-body">
          <NavLink to="/" className="hover:text-(--color-primary) transition">Home</NavLink>
          <NavLink to="/about" className="hover:text-(--color-primary) transition">About</NavLink>
          <NavLink to="/listings" className="hover:text-(--color-primary) transition">Listings</NavLink>
          <NavLink to="/contact" className="hover:text-(--color-primary) transition">Contact</NavLink>
          <NavLink
            to="/contact"
            className="bg-(--color-primary) text-white px-4 py-2 rounded-full hover:bg-(--color-primary-dark) transition text-sm"
          >
            Get Started
          </NavLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          <svg
            className="w-6 h-6 text-(--color-primary)"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      
      <AnimatePresence>
      {isMenuOpen && (
        <motion.div 
          key="mobile-menu"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="md:hidden bg-white px-6 py-4 space-y-4 text-center font-medium text-text-body">
          <NavLink to="/" className="block hover:text-(--color-primary)" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/about" className="block hover:text-(--color-primary)" onClick={toggleMenu}>About</NavLink>
          <NavLink to="/listings" className="block hover:text-(--color-primary)" onClick={toggleMenu}>Listings</NavLink>
          <NavLink to="/contact" className="block hover:text-(--color-primary)" onClick={toggleMenu}>Contact</NavLink>
          <NavLink
            to="/contact"
            className="inline-block bg-(--color-primary) text-white px-4 py-2 rounded-full hover:bg-(--color-primary-dark) transition"
            onClick={toggleMenu}
          >
            Get Started
          </NavLink>
        </motion.div>
      )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;