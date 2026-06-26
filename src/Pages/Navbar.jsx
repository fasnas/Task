import React from 'react'
import { useState,useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
 
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
 
  const links = [
    { label: 'Home', target: 'hero' },
    { label: 'Products', target: 'products' },
    { label: 'Why Choose Us', target: 'why' },
    { label: 'Contact', target: 'contact' },
  ];
 
  const scrollTo = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6
      ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-yellow-600/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
 
        {/* Logo */}
        <button onClick={() => scrollTo('hero')} className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-8 h-8 bg-yellow-500 rounded flex items-center justify-center flex-shrink-0">
            <span className="text-black font-black text-xs tracking-wide">M</span>
          </div>
          <span className="text-white font-black text-xl tracking-[0.2em]">MOTUL</span>
        </button>
 
        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, target }) => (
            <button key={label} onClick={() => scrollTo(target)}
              className="text-gray-400 hover:text-yellow-500 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 cursor-pointer bg-transparent border-none">
              {label}
            </button>
          ))}
        </div>
 
        {/* Mobile hamburger */}
        <button onClick={() => setMobileOpen(p => !p)}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1" aria-label="Toggle menu">
          <span className="block w-5 h-0.5 bg-yellow-500 transition-all" />
          <span className="block w-5 h-0.5 bg-yellow-500" />
          <span className="block w-5 h-0.5 bg-yellow-500 transition-all" />
        </button>
      </div>
 
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black/98 border-t border-yellow-600/20 px-6 pb-6">
          {links.map(({ label, target }) => (
            <button key={label} onClick={() => scrollTo(target)}
              className="block w-full text-left text-gray-400 hover:text-yellow-500 text-sm font-semibold tracking-widest uppercase py-3 border-b border-white/5 transition-colors cursor-pointer bg-transparent border-x-0 border-t-0">
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar