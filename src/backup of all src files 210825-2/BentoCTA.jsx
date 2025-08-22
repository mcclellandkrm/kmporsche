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


import { useState, useRef, useEffect } from "react";

const BentoCTA = () => {
  const [hovered, setHovered] = useState(null);
  // Scroll background transition
  const sectionRef = useRef(null);
  const [bgProgress, setBgProgress] = useState(0); // 0 = dark, 1 = white

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // When top of section enters viewport, start transition
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      let progress = 0;
      if (rect.top < start && rect.bottom > end) {
        progress = Math.min(1, Math.max(0, 1 - (rect.top - end) / (start - end)));
      } else if (rect.top <= end) {
        progress = 1;
      }
      setBgProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolate background color from #18181b (zinc-900) to white
  const bgColor = `rgb(${24 + Math.round((255-24)*bgProgress)},${24 + Math.round((255-24)*bgProgress)},${27 + Math.round((255-27)*bgProgress)})`;

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 flex flex-col items-center transition-colors duration-700"
      style={{ background: bgColor }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-sky-400/90 mb-10 text-center tracking-tight leading-tight">
        Ready to get <a className="underline font-light text-sky-400/80">started?</a>
      </h2>
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
                style={{ opacity: 0.5 }}
              />
              {/* Glassy overlay above gradient, more opaque for first card */}
              <div className={`absolute inset-0 rounded-3xl pointer-events-none border shadow-inner ${i === 0 ? 'bg-white/18 backdrop-blur-lg border-white/15' : 'bg-white/10 backdrop-blur-md border-white/10'}`} style={{boxShadow:'0 4px 32px 0 rgba(31,38,135,0.08)'}} />
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
              <div className={`mb-4 ${i === 0 ? 'text-offwhite/90' : 'text-charcoal'}`}>{item.icon}</div>
              <h3 className={`text-2xl font-bold mb-2 group-hover:underline ${i === 0 ? 'text-offwhite/90' : 'text-charcoal'}`}>{item.title}</h3>
              <p className={`mb-4 ${i === 0 ? 'text-offwhite/80' : 'text-charcoal/80'}`}>{item.desc}</p>
              <span
                className="inline-block mt-auto px-6 py-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/30 text-base font-bold text-white shadow-lg group-hover:bg-white/20 group-hover:border-white/60 group-hover:shadow-2xl group-hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-pink-300/40"
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                  letterSpacing: '0.04em',
                }}
              >
                Learn More
              </span>
              <div className="absolute inset-0 rounded-3xl border-2 border-transparent transition-all duration-300 pointer-events-none" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BentoCTA;
