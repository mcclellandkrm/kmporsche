import React from "react";

const reasons = [
  {
    title: "Marketing & Business Development",
    desc: "Attract high-value clients and partners with immersive, interactive tours that showcase your space and brand story in the best light.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Operational Efficiency & Planning",
    desc: "Streamline onboarding, training, and space planning with digital twins and remote collaboration tools.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Customer Experience & Accessibility",
    desc: "Delight guests and buyers with 24/7 access, wayfinding, and inclusive experiences for all abilities.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Sector-Specific Applications",
    desc: "Tailored solutions for retail, hospitality, commercial property, education, and more—each with unique features and value.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M7 17v-4m4 4V7m4 10v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];

export default function KeyReasons() {
  return (
    <section className="w-full bg-offwhite py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-4 tracking-tight leading-tight">
          Why choose a virtual tour?
        </h2>
        <p className="text-lg text-charcoal/80 max-w-2xl mx-auto">
          Discover the key reasons our clients choose immersive digital experiences to elevate their business, operations, and customer engagement.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((r) => (
          <div
            key={r.title}
            className="group bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8 flex flex-col items-start transition-all duration-300 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-1"
          >
            <div className="mb-4 text-accent">{r.icon}</div>
            <h3 className="text-xl font-semibold text-charcoal mb-2">{r.title}</h3>
            <p className="text-charcoal/80 text-base">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
