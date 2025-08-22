import React, { useEffect, useRef } from "react";

const features = [
  {
    title: "Immersive 3D Tours",
    desc: "Showcase your space with ultra-high-res, interactive 3D walkthroughs that wow clients and guests.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    ),
  },
  {
    title: "Seamless Integration",
    desc: "Embed tours on your site, booking engine, or property listings with a single line of code.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M8 12h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
  {
    title: "Analytics & Insights",
    desc: "Track engagement, heatmaps, and ROI with real-time analytics dashboards.",
    icon: (
      <svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/><path d="M7 17v-4m4 4V7m4 10v-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
    ),
  },
];


// Parallax background effect
function useParallax(ref, speed = 0.3) {
  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  // scrollY not needed
      // Parallax offset based on section position
      const offset = (rect.top - windowHeight / 2) * speed;
      ref.current.style.backgroundPosition = `center ${offset}px`;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ref, speed]);
}


const FeaturesHowItWorks = () => {
  const sectionRef = useRef(null);
  useParallax(sectionRef, 0.25);
  return (
    <section
      ref={sectionRef}
      className="w-full py-24 px-4 flex flex-col items-center relative overflow-hidden"
      id="features"
      style={{
        backgroundImage: 'linear-gradient(rgba(24,24,32,0.82),rgba(24,24,32,0.82)), url(/brrom-plax.jpg)',
        backgroundAttachment: 'fixed',
        backgroundPosition: 'center 0px',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: 0,
      }}
    >

      <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-offwhite mb-10 text-center tracking-tight leading-tight relative z-10">
        How It Works
      </h2>
      <div className="flex flex-col md:flex-row gap-12 w-full max-w-6xl items-center justify-center relative z-10">
        {/* Features List */}
        <div className="flex-1 flex flex-col gap-8">
          {features.map((f) => (
            <div key={f.title} className="flex items-start gap-6 bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-offwhite/10 shadow-lg">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-navy/20 text-navy text-2xl shadow-md">
                {f.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-offwhite mb-1">{f.title}</h3>
                <p className="text-offwhite/80 text-base font-light">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesHowItWorks;
