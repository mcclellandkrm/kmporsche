import React, { useRef, useEffect, useState } from "react";

const steps = [
  {
    title: "Ask, update, commit. All in one place.",
    desc: "Now you can chat with Graphite to get context on code changes, fix issues, resolve CI failures, and update your PRs, right in your review flow.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Save hours on every pull request",
    desc: "Automate repetitive tasks and focus on what matters most.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Turn comments into suggested changes",
    desc: "Quickly apply feedback and keep your code moving forward.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "Detailed PR descriptions in seconds",
    desc: "Let AI summarize your changes for faster, clearer reviews.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
  },
  {
    title: "From failures to fixes",
    desc: "Resolve CI failures and merge with confidence.",
    img: "https://images.unsplash.com/photo-1465101178521-c1a9136a3fdc?auto=format&fit=crop&w=400&q=80",
  },
];

const ScrollSpySection = () => {
  const stepRefs = useRef([]);
  const [activeIdx, setActiveIdx] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = containerRef.current?.parentElement;
      if (!section) return;
      const sectionRect = section.getBoundingClientRect();
      const totalHeight = sectionRect.height - window.innerHeight;
      const scrollY = window.scrollY - section.offsetTop;
      const progress = Math.max(0, Math.min(1, scrollY / totalHeight));
      const idx = Math.floor(progress * steps.length);
      setActiveIdx(Math.min(idx, steps.length - 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Height: (number of steps * 100vh) to allow enough scroll space
  return (
  <section className="w-full relative bg-black mt-32 md:mt-40" style={{ minHeight: `${steps.length * 100}vh` }}>
      <div
        ref={containerRef}
  className="sticky top-28 md:top-36 flex flex-col md:flex-row items-center justify-center h-screen px-4 py-32"
        style={{ zIndex: 10 }}
      >
        <div className="relative w-full md:w-1/2 flex justify-center items-center mb-12 md:mb-0">
          <div className="rounded-3xl shadow-2xl bg-gradient-to-br from-[#2b133d] via-[#3b2676] to-[#6b5cff] p-1 w-full max-w-md aspect-[4/5] flex items-center justify-center transition-all duration-500">
            <div className="w-full h-full bg-black rounded-2xl flex items-center justify-center overflow-hidden">
              <img
                src={steps[activeIdx].img}
                alt="step visual"
                className="object-cover w-full h-full rounded-2xl transition-all duration-500"
                style={{ filter: "brightness(0.9)" }}
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-8">
          {steps.map((step, idx) => (
            <div
              key={step.title}
              ref={el => (stepRefs.current[idx] = el)}
              className={`transition-colors duration-300 px-2 border-l-4 ${activeIdx === idx ? "border-white" : "border-transparent"}`}
            >
              <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${activeIdx === idx ? "text-white" : "text-gray-400"}`}>{step.title}</h3>
              <p className={`text-base md:text-lg ${activeIdx === idx ? "text-white/90" : "text-gray-500"}`}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScrollSpySection;
