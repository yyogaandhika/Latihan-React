// src/Guest/components/Navbar.jsx
import React, { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#home', text: 'HOME' },
    { href: '#pages', text: 'PAGES' },
    { href: '#menu', text: 'MENU' },
    { href: '#gallery', text: 'GALLERY' },
    { href: '#blog', text: 'BLOG' },
    { href: '#contact', text: 'CONTACT' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 p-6 bg-black/20 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-white tracking-wider cursor-pointer">
          Sedap
        </div>

        <ul className="hidden md:flex space-x-5 items-center">
          {navLinks.map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 font-medium flex items-center cursor-pointer"
              >
                {link.text}
                {['PAGES', 'MENU', 'GALLERY', 'BLOG'].includes(link.text) && (
                  <svg
                    className="w-4 h-4 ml-1.5 fill-current text-white/70"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                )}
              </a>
            </li>
          ))}
          <li>
            <button
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold
                         px-5 py-2 rounded-sm border border-yellow-600 hover:border-yellow-700
                         transition-colors duration-300 text-sm cursor-pointer"
            >
              RESERVATION
            </button>
          </li>
        </ul>

        <div className="flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white hover:text-yellow-400 focus:outline-none p-2 md:hidden cursor-pointer"
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 p-5 bg-black/60 backdrop-blur-lg rounded-md mx-4 shadow-xl">
          <ul className="flex flex-col space-y-3 items-center">
            {navLinks.map((link) => (
              <li key={link.text} className="w-full">
                <a
                  href={link.href}
                  className="text-gray-100 hover:text-yellow-400 transition-colors duration-300 font-medium py-2.5 block text-center hover:bg-white hover:bg-opacity-10 rounded-md cursor-pointer"
                >
                  {link.text}
                </a>
              </li>
            ))}
            <li className="w-full pt-2">
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-5 py-3 rounded-md border border-yellow-600 hover:border-yellow-700 transition-colors duration-300 text-sm cursor-pointer">
                RESERVATION
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
