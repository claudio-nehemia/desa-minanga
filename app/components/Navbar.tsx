'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Beranda', href: '/' },
    { name: 'Peta', href: '/peta' },
    { name: 'Sejarah', href: '/sejarah' },
    { name: 'Profil Desa', href: '/profil' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-teal-600 via-cyan-700 to-teal-600 shadow-2xl backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl group-hover:from-orange-500 group-hover:to-orange-700 transition-all shadow-lg group-hover:shadow-xl transform group-hover:scale-110 group-hover:rotate-12 duration-300">
                🏝️
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-white shadow-md"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-bold text-lg leading-tight group-hover:text-orange-200 transition-colors">Minanga Dua</span>
              <span className="text-cyan-200 text-xs font-medium">Desa Pesisir</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:text-orange-200 font-medium transition-all relative group px-2 py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 group-hover:w-full transition-all duration-300 shadow-sm"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-orange-200 transition-colors bg-cyan-600 p-2 rounded-lg hover:bg-cyan-500"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down bg-cyan-800/95 backdrop-blur-md rounded-b-lg">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-white hover:text-orange-200 hover:bg-cyan-700 rounded-md transition-all mx-2 my-1"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
