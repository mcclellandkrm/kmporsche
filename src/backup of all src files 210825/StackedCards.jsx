import React from "react";

const cards = [
  {
    sector: "Retail",
    logo: "https://cdn-icons-png.flaticon.com/512/1041/1041916.png",
    text: "Empower your retail business with a virtual tour for store planning, footfall and generally management as well as onboarding.",
  },
  {
    sector: "Hospitality",
    logo: "https://cdn-icons-png.flaticon.com/512/190/190411.png",
    text: "Deliver exceptional service with streamlined booking, guest feedback, and staff coordination tools designed for hotels, restaurants, and resorts.",
  },
  {
    sector: "Construction",
    logo: "https://cdn-icons-png.flaticon.com/512/190/190406.png",
    text: "Keep your construction projects on track with collaborative planning, resource allocation, and on-site reporting—all in one place.",
  },
  {
    sector: "Healthcare",
    logo: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
    text: "Streamline patient care, appointment scheduling, and compliance with secure, easy-to-use digital tools for healthcare providers.",
  },
];


const gradients = [
  // Tiptap-inspired gradients
  "from-[#2b133d] via-[#3b2676] to-[#6b5cff]", // deep purple to blue
  "from-[#3b2676] via-[#6b5cff] to-[#a7c7ff]", // purple to blue to light blue
  "from-[#6b5cff] via-[#a7c7ff] to-[#f7baff]", // blue to light blue to pink
  "from-[#a7c7ff] via-[#f7baff] to-[#ffe6fa]", // light blue to pink to white
];

const StackedCards = () => (
  <section className="w-full flex flex-col items-center pt-20 pb-2 mb-28 px-4 bg-transparent" id="benefits">
<h2 className="text-3xl md:text-4xl font-heading font-bold text-white-700 uppercase tracking-wide mb-12 text-center">
  Main Benefits for Every Sector
</h2>    <div className="w-full max-w-3xl mx-auto relative flex flex-col gap-8" style={{ minHeight: 1200 }}>
      {cards.map((card, idx) => (
        <div
          key={card.sector}
          className={`sticky w-full rounded-[2.5rem] overflow-hidden shadow-xl border border-gray-200 flex flex-col items-center px-6 py-12 transition-transform duration-300 z-[${20 - idx}] bg-white/0`}
          style={{
            top: `${6}rem`, // All cards stick at the same top, so each covers the previous
          }}
        >
          <div className={`absolute inset-0 z-0 bg-gradient-to-br ${gradients[idx % gradients.length]} opacity-90`} />
          <div className="relative z-10 flex flex-col items-center">
            
          <div className="mb-4 text-center">
              <span className="block text-2xl md:text-3xl font-light text-white drop-shadow tracking-wide">{card.sector}</span>
            </div>
            
          <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-light text-white text-center leading-relaxed drop-shadow-lg px-2 mb-6 tracking-wide">
  <span className="inline-block bg-black/40 rounded px-2 py-1">{card.text}</span>
</blockquote>
            <img src={card.logo} alt={card.sector + " logo"} className="w-10 h-10 object-contain drop-shadow-lg mt-2" />
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default StackedCards;
