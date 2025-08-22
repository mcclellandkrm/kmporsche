import React from "react";

const Navbar = () => (
  <header className="w-full bg-charcoal/95 border-b-0 sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold tracking-tight text-offwhite drop-shadow-lg">YourBrand</span>
      </div>
      <ul className="hidden md:flex gap-8 text-offwhite/80 font-medium drop-shadow">
        <li><a href="#features" className="hover:text-navy transition">Features</a></li>
        <li><a href="#clients" className="hover:text-navy transition">Clients</a></li>
        <li><a href="#pricing" className="hover:text-navy transition">Pricing</a></li>
        <li><a href="#about" className="hover:text-navy transition">About</a></li>
      </ul>
      <div className="hidden md:block">
        <a
          href="/contact"
          className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-offwhite/30 text-base font-bold text-offwhite shadow-lg hover:bg-white/20 hover:border-navy/60 hover:shadow-2xl hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-navy/40"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            letterSpacing: '0.04em',
          }}
        >
          Get Started
        </a>
      </div>
      <button className="md:hidden p-2 rounded hover:bg-offwhite/10">
        <span className="sr-only">Open menu</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-offwhite/80" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </nav>
  </header>
);

export default Navbar;
