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
  <section className="w-full flex flex-col items-center pt-20 pb-2 mb-28 px-4 bg-charcoal" id="benefits">
    <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-offwhite mb-10 text-center tracking-tight leading-tight">
      Main Benefits for Every Sector
    </h2>
    <div className="w-full max-w-3xl mx-auto relative flex flex-col gap-8" style={{ minHeight: 1200 }}>
      {cards.map((card, idx) => {
        // Subtle progression for all cards: lighter overlays and higher contrast as they stack
        // Calculate progression based on idx (0 = darkest, 3 = lightest)
        const overlayOpacities = [0.18, 0.15, 0.12, 0.10];
        const gradientOpacities = [0.17, 0.19, 0.21, 0.22];
        const textColors = [
          'text-offwhite/90',
          'text-offwhite/80',
          'text-charcoal/80',
          'text-charcoal',
        ];
        const blockBgColors = [
          'bg-charcoal/70 text-offwhite/90',
          'bg-charcoal/50 text-offwhite/90',
          'bg-navy/20 text-charcoal/90',
          'bg-navy/10 text-navy',
        ];
        const borderColors = [
          'border-white/15',
          'border-white/12',
          'border-offwhite/10',
          'border-offwhite/10',
        ];
        const imgBg = [
          'bg-burgundy/15 border-burgundy/30',
          'bg-burgundy/12 border-burgundy/25',
          'bg-burgundy/10 border-burgundy/20',
          'bg-burgundy/10 border-burgundy/20',
        ];
        return (
          <div
            key={card.sector}
            className={`sticky w-full rounded-[2.5rem] overflow-hidden shadow-2xl border flex flex-col items-center px-6 py-12 transition-transform duration-300 z-[${20 - idx}] bg-offwhite/soft ${borderColors[idx]}`}
            style={{
              top: `${6}rem`,
            }}
          >
            {/* Muted gradient accent background */}
            <div className={`absolute inset-0 z-0 bg-gradient-to-br ${gradients[idx % gradients.length]}`}
              style={{ opacity: gradientOpacities[idx] }}
            />
            {/* Glassy overlay - subtle progression */}
            <div
              className={`absolute inset-0 z-10 rounded-[2.5rem] pointer-events-none border`}
              style={{
                background: `rgba(255,255,255,${overlayOpacities[idx]})`,
                backdropFilter: idx === 0 ? 'blur(16px)' : 'blur(12px)',
                borderColor: 'rgba(255,255,255,0.15)',
              }}
            />
            <div className="relative z-20 flex flex-col items-center">
              <div className="mb-4 text-center">
                <span className={`block text-2xl md:text-3xl font-light drop-shadow tracking-wide ${textColors[idx]}`}>{card.sector}</span>
              </div>
              <blockquote className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl font-light text-center leading-relaxed drop-shadow-lg px-2 mb-6 tracking-wide ${textColors[idx]}`}>
                <span className={`inline-block rounded px-2 py-1 ${blockBgColors[idx]}`}>{card.text}</span>
              </blockquote>
              <img src={card.logo} alt={card.sector + " logo"} className={`w-12 h-12 object-contain drop-shadow-lg mt-2 rounded-full p-2 border ${imgBg[idx]}`} />
            </div>
          </div>
        );
      })}
    </div>
  </section>
);

export default StackedCards;
