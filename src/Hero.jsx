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
  <section className={`relative flex flex-col items-center justify-start min-h-[60vh] w-full pt-24 pb-12 px-4 overflow-hidden bg-charcoal ${className}`}>
    {/* Video background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 w-full h-full object-cover z-0"
      style={{ filter: 'brightness(1.10) blur(1px)' }}
      poster="https://www.transparenttextures.com/patterns/diamond-upholstery.png"
    >
      <source src="https://www.w3schools.com/howto/rain.mp4" type="video/mp4" />
    </video>
    {/* Glassy overlay for legibility */}
    <div className="absolute inset-0 bg-white/20 backdrop-blur-md z-10" />
    <div className="w-full max-w-4xl mx-auto relative z-20">
      <h1 className="text-5xl md:text-7xl font-extrabold font-heading text-offwhite mb-8 tracking-tight leading-tight text-center">
        {title.split(' ').slice(0,2).join(' ')} <span className="text-navy">{title.split(' ').slice(2).join(' ')}</span>
      </h1>
      <div className="text-lg md:text-2xl font-light text-offwhite/90 max-w-2xl mx-auto mb-10 text-center space-y-6 leading-relaxed tracking-wide">
        {(Array.isArray(subtitle) ? subtitle : [subtitle]).map((line, idx) => (
          typeof line === 'string' ? <p key={idx}>{line}</p> : line
        ))}
      </div>
      {cta && (
        <div className="flex justify-center">
          <a
            href={cta.href}
            className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-offwhite/30 text-lg font-bold text-offwhite shadow-lg hover:bg-white/20 hover:border-navy/60 hover:shadow-2xl hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-navy/40"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              letterSpacing: '0.04em',
            }}
          >
            {cta.label}
          </a>
        </div>
      )}
    </div>
  </section>
);

export default Hero;
