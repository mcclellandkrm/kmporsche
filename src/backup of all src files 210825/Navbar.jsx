import React from "react";

const Navbar = () => (
  <header className="w-full bg-white/80 backdrop-blur border-b border-gray-200 sticky top-0 z-50">
    <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <div className="flex items-center gap-3">
        <span className="text-xl font-bold tracking-tight text-gray-900">YourBrand</span>
      </div>
      <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
        <li><a href="#features" className="hover:text-blue-600 transition">Features</a></li>
        <li><a href="#clients" className="hover:text-blue-600 transition">Clients</a></li>
        <li><a href="#pricing" className="hover:text-blue-600 transition">Pricing</a></li>
        <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
      </ul>
      <div className="hidden md:block">
        <a href="/contact" className="px-5 py-2 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition">Get Started</a>
      </div>
      <button className="md:hidden p-2 rounded hover:bg-gray-100">
        <span className="sr-only">Open menu</span>
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-700" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
      </button>
    </nav>
  </header>
);

export default Navbar;
