import React, { useEffect, useRef } from "react";

const logos = [
  [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6e/Amazon_logo.svg",
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/0/02/Stack_Overflow_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg",
  ],
  [
    "https://upload.wikimedia.org/wikipedia/commons/5/5e/Instagram_logo_2016.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pinterest_Logo.svg",
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
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-md backface-hidden">
          <img src={front} alt="client logo" className="max-h-12 max-w-[80%] object-contain" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center bg-white rounded-xl shadow-md backface-hidden rotate-x-180">
          <img src={back} alt="client logo" className="max-h-12 max-w-[80%] object-contain" />
        </div>
      </div>
    </div>
  );
};

const ClientsSection = () => (
  <section className="w-full pt-16 pb-20 px-4 bg-gradient-to-b from-white to-purple-300 flex flex-col items-center" id="clients">
    <h2 className="text-3xl md:text-4xl font-thin text-gray-900 mb-8 text-center">We work with the world's top brands</h2>
    <div className="flex flex-wrap justify-center gap-8">
      {logos.map(([front, back], i) => (
        <ClientLogo key={front} front={front} back={back} delay={i * 400} />
      ))}
    </div>
  </section>
);

export default ClientsSection;
