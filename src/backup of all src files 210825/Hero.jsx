import React from "react";


const Hero = ({
  title = "Build Beautiful Experiences",
  subtitle = [
    "With over 12 years of experience, we specialize in crafting custom virtual tours for a wide range of sectors, including Retail, Hospitality, Education, Commercial, and Real Estate. Our expertise extends to creating immersive experiences for UK and international blue-chip clients.",
    "Our comprehensive suite of services includes virtual tours for planning, space planning, and internal management use, as well as onboarding, health and safety, and store layout. We pride ourselves on offering innovative solutions tailored to your unique needs, thanks to our in-house facilities.",
    "In addition to our core offerings, we provide cutting-edge services such as aerial/drone, planning, 3D scanning, and UAV surveying, all aimed at elevating your virtual experience. With Karl McClelland Virtual Tours, you can trust us to transform your concept into an immersive, engaging reality. Together, we'll create captivating experiences that set your business apart from the competition."
  ],
  cta = { href: "/contact", label: "Get Started" },
  className = ""
}) => (
  <section className={`relative flex flex-col items-center justify-start min-h-[60vh] w-full pt-24 pb-12 px-4 overflow-hidden ${className}`}>
    {/* Video background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      style={{ filter: 'brightness(1.15) blur(1px)' }}
      poster="https://www.transparenttextures.com/patterns/diamond-upholstery.png"
    >
      <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
      {/* You can replace the above src with your own light video */}
    </video>
    {/* White overlay for legibility */}
    <div className="absolute inset-0 bg-white/70 z-10" />
    <div className="w-full max-w-4xl mx-auto relative z-20">
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight text-center">
        {title.split(' ').slice(0,2).join(' ')} <span className="text-blue-600">{title.split(' ').slice(2).join(' ')}</span>
      </h1>
      <div className="text-lg md:text-2xl text-gray-600 max-w-2xl mx-auto mb-8 text-center space-y-4">
        {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((line, idx) => (
          typeof line === 'string' ? <p key={idx}>{line}</p> : line
        ))}
      </div>
      {cta && (
        <div className="flex justify-center">
          <a href={cta.href} className="px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition text-lg">{cta.label}</a>
        </div>
      )}
    </div>
  </section>
);

export default Hero;
