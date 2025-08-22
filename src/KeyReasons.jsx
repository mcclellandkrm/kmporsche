
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// Utility hook for intersection observer
function useRevealOnScroll(selector, className = 'kr-fadein') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);
    if (!elements.length) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(className);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [selector, className]);
}

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
  useRevealOnScroll('.kr-card');
  return (
    <section className="w-full py-24 px-4 sm:px-8 lg:px-24 bg-offwhite">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading mb-4 tracking-tight leading-tight text-charcoal">
          The benefits for your business
        </h2>
        {/* Luxury animated divider */}
        <div className="flex justify-center mb-6">
          <span className="relative inline-block h-1 w-32 rounded-full overflow-hidden">
            <span className="absolute inset-0 animate-gradient-move bg-gradient-to-r from-accent via-burgundy to-accent opacity-80" style={{backgroundSize:'200% 100%'}}></span>
            <span className="absolute inset-0 bg-white/40"></span>
          </span>
        </div>
        <p className="text-lg max-w-2xl mx-auto text-charcoal/80">
          Discover the key reasons our clients choose immersive digital experiences to elevate their business, operations, and customer engagement.
        </p>
      </div>
      <style>{`
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        .animate-gradient-move {
          animation: gradient-move 3s linear infinite alternate;
          background-size: 200% 100%;
        }
      `}</style>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {reasons.map((r, i) => (
          <Link
            key={r.title}
            to={
              i === 0 ? "/business-development" :
              i === 1 ? "/operational-efficiency" :
              i === 2 ? "/customer-experience" :
              "/sector-applications"
            }
            tabIndex={0}
            className={"kr-card group backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-8 pb-20 flex flex-col items-start transition-all duration-700 hover:bg-white/80 hover:shadow-2xl hover:-translate-y-2 focus:bg-white/90 focus:shadow-2xl focus:-translate-y-2 outline-none cursor-pointer relative bg-white/60 opacity-0 translate-y-8"}
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.10)',
              willChange: 'transform, box-shadow, background',
              transitionDelay: `${i * 0.09}s`,
              ...(i === 0 ? {
                backgroundImage: "url('/marketing-panel.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              } : {}),
              ...(i === 1 ? {
                backgroundImage: "url('/operational-panel.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              } : {}),
              ...(i === 2 ? {
                backgroundImage: "url('/customer-panel.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              } : {}),
              ...(i === 3 ? {
                backgroundImage: "url('/sector-panel.webp')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              } : {})
            }}
            aria-label={r.title}
          >
            <div className={"mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-6 group-focus:scale-125 group-focus:rotate-6 text-accent"}>
              {r.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 transition-colors duration-500 text-white drop-shadow-lg">
              {r.title}
            </h3>
            <p className="text-base transition-colors duration-500 text-white/90 drop-shadow-md">
              {r.desc}
            </p>
            {/* Glassy animated gradient accent */}
            <span className="pointer-events-none absolute -z-1 left-0 top-0 w-full h-full rounded-2xl opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition-all duration-700" style={{background: 'linear-gradient(120deg,rgba(185,147,247,0.10) 0%,rgba(107,92,255,0.10) 100%)', filter: 'blur(12px)'}}></span>
            {/* Downward arrow button */}
            <span
              tabIndex={-1}
              aria-label="Show more"
              className={`kr-arrow-btn absolute bottom-6 right-6 w-14 h-14 flex items-center justify-center rounded-full border-none outline-none shadow-lg transition-all duration-300 bg-white/0 group-hover:bg-[#FF824C] group-focus:bg-[#FF824C]`}
            >
              <svg
                width="32" height="32" viewBox="0 0 32 32" fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="16" cy="16" r="16" fill="none"/>
                <path
                  d="M11 15l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="kr-arrow-path"
                />
              </svg>
            </span>
          </Link>
        ))}
      <style>{`
        .kr-card {
          opacity: 1;
          transform: none;
          transition: opacity 0.7s cubic-bezier(.4,0,.2,1), transform 0.7s cubic-bezier(.4,0,.2,1);
        }
        .kr-fadein {
          /* No override needed, but kept for future animation */
        }
        .kr-arrow-btn {
          background: rgba(255,255,255,0.0);
          color: #FF824C;
          box-shadow: 0 4px 16px 0 rgba(31,38,135,0.13);
          border: none;
          cursor: pointer;
          transition: background 0.3s, color 0.3s, box-shadow 0.3s;
        }
        .kr-arrow-btn .kr-arrow-path {
          transition: stroke 0.3s;
        }
        .group:hover .kr-arrow-btn, .group:focus .kr-arrow-btn {
          background: #FF824C;
          color: #fff;
          box-shadow: 0 6px 24px 0 rgba(31,38,135,0.18);
        }
        .group:hover .kr-arrow-btn .kr-arrow-path,
        .group:focus .kr-arrow-btn .kr-arrow-path {
          stroke: #fff;
        }
      `}</style>
      </div>
    </section>
  );
}
