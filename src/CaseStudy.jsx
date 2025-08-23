import React from "react";

const caseStudies = [
  {
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    name: "Limavady High School2",
    quote: "The virtual tour experience was so immersive, parents felt like they were there in person. It’s transformed our sales process.",
    person: "Principal",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80",
    results: [
      "+32% increase in online bookings",
      "Average viewing time: 4.5 minutes",
      "Global reach: 18 countries"
    ]
    
  },
  
  // Add more case studies as needed
];

const CaseStudy = () => (
  <section className="w-full py-24 px-4 flex flex-col items-center bg-charcoal/95" id="case-studies">
    <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-offwhite mb-10 text-center tracking-tight leading-tight">
      Case Studies
    </h2>
    
    
    
    <div className="w-full max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center justify-center">
      {/* Image/Virtual Tour Preview */}
      <div className="flex-1 flex items-center justify-center">
        <div className="relative w-[380px] h-[260px] rounded-3xl overflow-hidden shadow-2xl border-2 border-offwhite/10 bg-offwhite/10 backdrop-blur-md">
          <img src={caseStudies[0].image} alt="Case study preview" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-charcoal/40" />
        </div>
      </div>
      {/* Details */}
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-center gap-4 mb-2">
          <img src={caseStudies[0].logo} alt="Brand logo" className="w-14 h-14 object-contain rounded-xl bg-white/10 p-2 border border-offwhite/20" />
          <span className="text-2xl font-bold text-offwhite/90">{caseStudies[0].name}</span>
        </div>
        <blockquote className="text-xl font-light text-offwhite/80 italic border-l-4 border-burgundy pl-4">“{caseStudies[0].quote}”</blockquote>
        <span className="text-offwhite/60 text-base mb-2">{caseStudies[0].person}</span>
        <ul className="list-disc pl-6 text-offwhite/80 text-base space-y-1">
          {caseStudies[0].results.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>
        <div className="flex justify-start mt-2">
          <a
            href="#" // Replace with actual case study URL
            className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-offwhite/30 text-lg font-bold text-offwhite shadow-lg hover:bg-white/20 hover:border-burgundy/60 hover:shadow-2xl transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-burgundy/40"
            style={{
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
              letterSpacing: '0.04em',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Case Study
          </a>
        </div>
      </div>
    </div>

    

  </section>
);

export default CaseStudy;
