
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close dropdown on navigation
  const handleDropdownLink = (to) => {
    setDropdownOpen(false);
    setMobileMenuOpen(false);
    navigate(to);
  };

  return (
    <header className="w-full bg-charcoal/95 border-b-0 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-xl font-bold tracking-tight text-offwhite drop-shadow-lg hover:text-accent/80 transition" aria-label="Home">YourBrand</Link>
        </div>
        <ul className="hidden md:flex gap-8 text-offwhite/80 font-medium drop-shadow items-center">
          <li><Link to="/" className="hover:text-accent/80 transition">Home</Link></li>
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onFocus={() => setDropdownOpen(true)}
            onBlur={() => setDropdownOpen(false)}
          >
            <button
              className="cursor-pointer hover:text-accent/80 transition bg-transparent border-0 outline-none flex items-center gap-1"
              tabIndex={0}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onClick={() => setDropdownOpen((v) => !v)}
            >
              Solutions <span aria-hidden>▾</span>
            </button>
            <ul
              className={`absolute left-0 top-full min-w-[220px] bg-charcoal/95 border border-white/10 rounded-xl shadow-lg transition-opacity duration-200 z-50 ${dropdownOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
              <li><button onClick={() => handleDropdownLink('/business-development')} className="block w-full text-left px-6 py-3 hover:text-accent/80 transition bg-transparent">Business Development</button></li>
              <li><button onClick={() => handleDropdownLink('/operational-efficiency')} className="block w-full text-left px-6 py-3 hover:text-accent/80 transition bg-transparent">Operational Efficiency</button></li>
              <li><button onClick={() => handleDropdownLink('/customer-experience')} className="block w-full text-left px-6 py-3 hover:text-accent/80 transition bg-transparent">Customer Experience</button></li>
              <li><button onClick={() => handleDropdownLink('/sector-applications')} className="block w-full text-left px-6 py-3 hover:text-accent/80 transition bg-transparent">Sector Applications</button></li>
            </ul>
          </li>
          <li><Link to="/contact" className="hover:text-accent/80 transition">Contact</Link></li>
        </ul>
      <div className="hidden md:block">
        <Link
          to="/contact"
          className="px-5 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-offwhite/30 text-base font-bold text-offwhite shadow-lg hover:bg-white/20 hover:border-navy/60 hover:shadow-2xl hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-navy/40"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
            letterSpacing: '0.04em',
          }}
        >
          Get Started
        </Link>
      </div>
      <button
        className="md:hidden p-2 rounded hover:bg-offwhite/10"
        onClick={() => setMobileMenuOpen((v) => !v)}
        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={mobileMenuOpen}
      >
        <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
        {mobileMenuOpen ? (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-offwhite/80" viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
        ) : (
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-offwhite/80" viewBox="0 0 24 24"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        )}
      </button>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black/70 flex flex-col items-end md:hidden" onClick={() => setMobileMenuOpen(false)}>
          <nav
            className="w-4/5 max-w-xs bg-charcoal/95 border-l border-offwhite/10 h-full shadow-2xl flex flex-col gap-2 p-8 pt-16 relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 p-2 rounded hover:bg-offwhite/10"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-offwhite/80" viewBox="0 0 24 24"><line x1="6" y1="6" x2="18" y2="18"/><line x1="6" y1="18" x2="18" y2="6"/></svg>
            </button>
            <Link to="/" className="block py-3 px-2 text-offwhite/90 text-lg font-bold hover:text-accent/80 transition" onClick={() => setMobileMenuOpen(false)}>Home</Link>
            <button
              className="block py-3 px-2 text-offwhite/90 text-lg font-bold text-left hover:text-accent/80 transition"
              onClick={() => handleDropdownLink('/business-development')}
            >Business Development</button>
            <button
              className="block py-3 px-2 text-offwhite/90 text-lg font-bold text-left hover:text-accent/80 transition"
              onClick={() => handleDropdownLink('/operational-efficiency')}
            >Operational Efficiency</button>
            <button
              className="block py-3 px-2 text-offwhite/90 text-lg font-bold text-left hover:text-accent/80 transition"
              onClick={() => handleDropdownLink('/customer-experience')}
            >Customer Experience</button>
            <button
              className="block py-3 px-2 text-offwhite/90 text-lg font-bold text-left hover:text-accent/80 transition"
              onClick={() => handleDropdownLink('/sector-applications')}
            >Sector Applications</button>
            <Link to="/contact" className="block py-3 px-2 text-offwhite/90 text-lg font-bold hover:text-accent/80 transition" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
            <Link
              to="/contact"
              className="mt-6 px-5 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-offwhite/30 text-base font-bold text-offwhite shadow-lg hover:bg-white/20 hover:border-navy/60 hover:shadow-2xl hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-navy/40"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                letterSpacing: '0.04em',
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </nav>
  </header>
  );
};

export default Navbar;
