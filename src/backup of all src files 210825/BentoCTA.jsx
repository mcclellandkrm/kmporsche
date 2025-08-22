import React from "react";

const ctaItems = [
  {
    title: "Get Started",
    desc: "Create your free account and start building today.",
    color: "from-blue-200 to-blue-800",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M12 4v16m8-8H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Book a Demo",
    desc: "See our platform in action with a personalized walkthrough.",
    color: "from-purple-200 to-purple-800",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
];


import { useState } from "react";

const BentoCTA = () => {
  const [hovered, setHovered] = useState(null);
  return (
    <section className="w-full py-24 px-4 flex flex-col items-center bg-gradient-to-b from-white to-blue-50">
      <h2 className="text-3xl md:text-4xl font-thin text-sky-400/80 mb-8 text-center">Ready to get <a className="underline font-thin text-sky-400/80">started?</a></h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl" style={{ perspective: '1000px' }}>
        {ctaItems.map((item, i) => (
          <a
            key={item.title}
            href={item.title === "Get Started" ? "/contact" : undefined}
            className={`group relative rounded-3xl p-8 overflow-hidden shadow-xl flex flex-col items-center text-center cursor-pointer animated-gradient-card transition-transform duration-300`}
            style={{
              zIndex: hovered === i ? 2 : 1,
              transform:
                hovered === null
                  ? "scaleX(1) rotateY(0deg)"
                  : hovered === i
                  ? "scaleX(1.2) rotateY(18deg)"
                  : "scaleX(0.8) rotateY(-18deg)",
            }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Animated gradient background */}
            <div className="absolute inset-0 -z-10 rounded-3xl overflow-hidden pointer-events-none">
              <div
                className={`absolute inset-0 rounded-3xl animate-gradient-move bg-gradient-to-br ${item.color}`}
                aria-hidden="true"
                style={{ opacity: 0.85 }}
              />
              {hovered === i && (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                    alt="background"
                    className="absolute inset-0 w-full h-full object-cover opacity-80 blur-[1px] scale-105 transition-all duration-300"
                    draggable="false"
                    style={{ pointerEvents: 'none' }}
                  />
                  <div className="absolute inset-0 bg-black/60" style={{ pointerEvents: 'none' }} />
                </>
              )}
            </div>
            <div
              style={{
                transform:
                  hovered === null
                    ? "scaleX(1)"
                    : hovered === i
                    ? "scaleX(0.8333)"
                    : "scaleX(1.25)",
                transition: 'transform 0.3s',
                width: '100%',
              }}
            >
              <div className="mb-4 text-white">{item.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:underline">{item.title}</h3>
              <p className="text-white/90 mb-4">{item.desc}</p>
              <span className="inline-block mt-auto px-6 py-2 rounded-lg bg-white/20 text-white font-semibold tracking-wide border border-white/30 group-hover:bg-white/30 transition">Learn More</span>
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 pointer-events-none" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BentoCTA;
