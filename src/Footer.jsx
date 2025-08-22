import React from "react";

const footerLinks = [
  {
    title: "Solutions",
    links: [
      { name: "Business Development", href: "/business-development" },
      { name: "Operational Efficiency", href: "/operational-efficiency" },
      { name: "Customer Experience", href: "/customer-experience" },
      { name: "Sector Applications", href: "/sector-applications" },
    ],
  },
  {
    title: "Company",
    links: [ { name: "About us", href: "#" }, { name: "Contact us", href: "/contact" } ],
  },
  {
    title: "Further Info",
    links: [ { name: "FAQs", href: "#" }, { name: "Case Studies", href: "#" }, { name: "Testimonials", href: "#" }, { name: "Examples", href: "#" } ],
  },
  {
    title: "Resources",
    links: [ { name: "Release notes", href: "#" }, { name: "Alternatives", href: "#" }, { name: "Experiments", href: "#" }, { name: "ROI Calculator", href: "#" }, { name: "MIT license", href: "#" }, { name: "Security", href: "#" }, { name: "Pro license", href: "#" } ],
  },
  {
    title: "Connect",
    links: [ { name: "GitHub", href: "#" }, { name: "Discord", href: "#" }, { name: "LinkedIn", href: "#" }, { name: "X", href: "#" }, { name: "Youtube", href: "#" } ],
  },
];

const Footer = () => (
  <footer className="relative w-full pt-32 pb-16 px-4 bg-transparent overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[120vw] h-[60vh] rounded-full bg-gradient-to-br from-[#2b133d] via-[#3b2676] to-[#6b5cff] opacity-80 blur-3xl" />
    </div>
    <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-center">
      <h2 className="text-4xl md:text-7xl font-extralight text-white text-center mb-4 leading-tight">Work with us<br /><span className="italic font-normal">with ease</span></h2>
      <a href="/contact" className="mt-6 mb-16 px-8 py-3 rounded-xl bg-white text-lg font-semibold text-gray-900 shadow hover:bg-gray-100 transition flex items-center gap-2">
        Get started now <span className="inline-block">→</span>
      </a>
      <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 mt-8">
        {footerLinks.map((col) => (
          <div key={col.title} className="flex flex-col items-center md:items-start">
            <span className="text-white font-bold mb-2">{col.title}</span>
            {col.links.map((link) => (
              typeof link === 'string' ? (
                <a key={link} href="#" className="text-gray-200 hover:text-white text-sm mb-1 transition-colors">{link}</a>
              ) : (
                <a key={link.name} href={link.href} className="text-gray-200 hover:text-white text-sm mb-1 transition-colors">{link.name}</a>
              )
            ))}
          </div>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
