import React from 'react';
import { NavLink } from 'react-router';
import facebookWhite from '../assets/fb_logo/secondary/Facebook_Logo_Secondary.png';
import instagramWhite from '../assets/ig_logo/white/Instagram_Glyph_White.png';
import xWhite from '../assets/x_logo/logo-white.png';

const Footer = () => {
  return (
    <footer
  className="py-16 mt-20 text-white"
  style={{ backgroundColor: 'var(--color-brand)' }}
>
  <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
    {/* Column 1: Brand */}
    <div className="px-10">
      <h3 className="text-2xl font-bold mb-4">Gark Edge</h3>
      <p className="text-sm leading-relaxed opacity-90">
        Empowering home buyers and sellers with local expertise, trusted agents, and modern tools — all in one place.
      </p>
    </div>

    {/* Column 2: Quick Links */}
    <div className="px-10">
      <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
      <ul className="space-y-2 text-sm">
        <li>
          <NavLink to="/" className="hover:text-brand-light transition">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="hover:text-brand-light transition">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/listings" className="hover:text-brand-light transition">
            Listings
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="hover:text-brand-light transition">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/terms" className="hover:text-brand-light transition">
            Terms & Conditions
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy" className="hover:text-brand-light transition">
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </div>

    {/* Column 3: Social Media */}
    <div className="px-10">
      <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
      <div className="flex justify-center md:justify-start space-x-6">
        <a href="#" className="hover:opacity-80 transition">
          <img src={facebookWhite} alt="Facebook" className="w-6 h-6" />
        </a>
        <a href="#" className="hover:opacity-80 transition">
          <img src={instagramWhite} alt="Instagram" className="w-6 h-6" />
        </a>
        <a href="#" className="hover:opacity-80 transition">
          <img src={xWhite} alt="X" className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>

  {/* Copyright */}
  <div className="mt-12 text-sm text-center opacity-80">
    &copy; {new Date().getFullYear()} Gark Edge. All rights reserved.
  </div>
</footer>

  );
};

export default Footer;
