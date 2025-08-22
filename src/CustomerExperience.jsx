import React from "react";

export default function CustomerExperience() {
  return (
    <section className="w-full bg-offwhite py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Hero/feature image */}
        <div className="w-full mb-4">
          <div className="lux-hero w-full aspect-[3/1] flex items-center justify-center rounded-2xl overflow-hidden shadow-lg">
            <img
              src="/customer-hero.webp"
              alt="Modern office with digital dashboard"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-8 tracking-tight leading-tight text-center">
          Customer Experience & Accessibility
        </h2>
  <div className="lux-glass lux-fadein p-10 md:p-14 flex flex-col gap-10">
          <p className="text-lg text-charcoal/90 mb-2">
            In today's market, customer experience is your greatest differentiator. A virtual tour is a powerful tool for building trust and loyalty by making your space more transparent, more accessible, and more welcoming to everyone. By putting the user in control of their journey, you provide a personalized and stress-free experience that traditional media simply cannot match.

From a prospective student exploring a campus to a traveler navigating an airport, a virtual tour ensures your audience feels confident and prepared, no matter where they are.
          </p>
          <h3 className="text-2xl font-bold text-charcoal mt-4 mb-2">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enhanced Engagement & Brand Reputation */}
            <div className="flex flex-col gap-3 items-start">
              <div className="lux-glass lux-fadein w-full rounded-xl p-4 flex items-center gap-4">
                {/* Replace src with your own image */}
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80" alt="Engagement" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Seamless Navigation & Confidence</div>
                  <div className="text-charcoal/90 text-sm mt-1">Eliminate the stress of the unknown. For large and complex venues like airports, stadiums, or sprawling retail stores, a virtual tour provides an intuitive, step-by-step preview. It allows visitors to get their bearings, find key landmarks, and plan their route in advance, transforming potential anxiety into excitement and making their on-site experience smoother and more enjoyable.</div>
                </div>
              </div>
            </div>
            {/* Wider Audience Reach */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="Audience Reach" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Personalised & Informative Journey</div>
                  <div className="text-charcoal/90 text-sm mt-1">Turn a simple tour into a tailored experience. With interactive information points and embedded media, you can provide rich, contextual details that empower your audience. A potential shopper can view product specs before they arrive, a student can hear from a professor in a specific classroom, and an event attendee can get information on amenities. This level of personalization makes every visit purposeful and engaging.</div>
                </div>
              </div>
            </div>
            {/* Showcasing Unique Selling Points */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80" alt="Unique Selling Points" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Universal & Inclusive Access</div>
                  <div className="text-charcoal/90 text-sm mt-1">Break down physical barriers to your business. A virtual tour provides universal access to your space for anyone, anywhere in the world. This is especially vital for individuals with mobility challenges, those with financial or time constraints, or people who simply prefer to explore remotely. Demonstrating this commitment to inclusivity not only broadens your audience but also significantly strengthens your brand reputation.</div>
                </div>
              </div>
            </div>
            {/* Lead Qualification & Conversion */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=200&q=80" alt="Lead Qualification" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Empower Visitors to Plan Ahead</div>
                  <div className="text-charcoal/90 text-sm mt-1">Help your audience maximize their time. By allowing them to explore and familiarize themselves with your space in advance, a virtual tour empowers them to plan their visit with precision. This is a crucial benefit for shoppers on a tight schedule, travelers with limited layover time, or parents exploring a campus with their child. This foresight translates to a more efficient, satisfying, and memorable experience on-site.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
