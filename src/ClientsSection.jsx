import React, { useEffect, useRef } from "react";

const logos = [
  [
    "/decathlon-logo.svg",
    "/hilti-logo.svg",
    "/aston-martin-logo.svg",
  ],
  [
    "/aston-martin-logo.svg",
    "/sse-logo.svg",
  ],
  [
    "/toyota-logo.svg",
    "/ni-screen-logo.svg",
  ],
  [
    "/fitzwilliam-logo.svg",
    "/ramada-logo.svg",
  ],
  [
    "/education-logo.svg",
    "/belfast-logo.svg",
  ],
];

const ClientLogo = ({ front, back, delay }) => {
  const ref = useRef();
  useEffect(() => {
    const el = ref.current;
    let flipped = false;
    const interval = setInterval(() => {
      flipped = !flipped;
      if (flipped) {
        el.classList.add("rotate-x-180");
      } else {
        el.classList.remove("rotate-x-180");
      }
    }, 2500 + delay);
    return () => clearInterval(interval);
  }, [delay]);
  return (
    <div className="w-32 h-20 perspective">
      <div
        ref={ref}
        className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d"
      >
        <div className="absolute inset-0 flex items-center justify-center rounded-xl shadow-lg backface-hidden bg-offwhite/80 backdrop-blur-md border border-charcoal/10" style={{boxShadow:'0 4px 24px 0 rgba(31,38,135,0.10)'}}>
          <img src={front} alt="client logo" className="max-h-12 max-w-[80%] object-contain" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center rounded-xl shadow-lg backface-hidden rotate-x-180 bg-offwhite/80 backdrop-blur-md border border-charcoal/10" style={{boxShadow:'0 4px 24px 0 rgba(31,38,135,0.10)'}}>
          <img src={back} alt="client logo" className="max-h-12 max-w-[80%] object-contain" />
        </div>
      </div>
    </div>
  );
};

const ClientsSection = () => (
  <section className="w-full pt-16 pb-20 px-4 bg-gradient-to-b from-white to-purple-300 flex flex-col items-center" id="clients">
  <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-gray-900 mb-10 text-center tracking-tight leading-tight">We work with the world's top brands</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {logos.map(([front, back], i) => (
        <ClientLogo key={front} front={front} back={back} delay={i * 400} />
      ))}
    </div>
  </section>
);

export default ClientsSection;
