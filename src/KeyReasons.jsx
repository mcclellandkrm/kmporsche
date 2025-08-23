
import React from "react";

const reasons = [
  {
    title: "Marketing & Business Development",
    desc: "Attract high-value clients and partners with immersive, interactive tours that showcase your space and brand story in the best light.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#B993F7"/><path d="M10 22l6-12 6 12H10z" fill="#fff"/></svg>
    ),
  },
  {
    title: "Operational Efficiency & Planning",
    desc: "Streamline onboarding, training, and space planning with digital twins and remote collaboration tools.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#6B5CFF"/><rect x="10" y="10" width="12" height="12" rx="3" fill="#fff"/></svg>
    ),
  },
  {
    title: "Customer Experience & Accessibility",
    desc: "Delight guests and buyers with 24/7 access, wayfinding, and inclusive experiences for all abilities.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#B993F7"/><path d="M16 10v12M10 16h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Sector-Specific Applications",
    desc: "Tailored solutions for retail, hospitality, commercial property, education, and more—each with unique features and value.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 32 32"><circle cx="16" cy="16" r="16" fill="#6B5CFF"/><path d="M16 10l6 12H10l6-12z" fill="#fff"/></svg>
    ),
  },
];

export default function KeyReasons() {
  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-24 bg-offwhite">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-4 tracking-tight leading-tight text-charcoal">
          The benefits for your business
        </h2>
        <div className="flex justify-center mb-6">
          <span className="relative inline-block h-1 w-32 rounded-full overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-accent via-burgundy to-accent opacity-80" style={{backgroundSize:'200% 100%'}}></span>
            <span className="absolute inset-0 bg-white/40"></span>
          </span>
        </div>
        <p className="text-lg max-w-2xl mx-auto text-charcoal/80">
          Discover the key reasons our clients choose immersive digital experiences to elevate their business, operations, and customer engagement.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="bg-white/70 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8 flex flex-col items-start transition-all duration-300 hover:shadow-2xl"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
            }}
            aria-label={r.title}
          >
            <div className="mb-4 text-accent">
              {r.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-charcoal">
              {r.title}
            </h3>
            <p className="text-base text-charcoal/80">
              {r.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
