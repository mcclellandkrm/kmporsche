import React from "react";

export default function BusinessDevelopment() {
  return (
    <section className="w-full bg-offwhite py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Hero/feature image */}
        <div className="w-full flex justify-center mb-4">
          {/* Replace src with your own image */}
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 w-full max-w-3xl aspect-[3/1] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Modern office with digital dashboard"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-8 tracking-tight leading-tight text-center">
          Marketing & Business Development
        </h2>
        <div className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-10 md:p-14 flex flex-col gap-10">
          <p className="text-lg text-charcoal/90 mb-2">
            Virtual tours are no longer just a novelty; they are a strategic asset that transforms how you attract, engage, and convert your audience. By creating a fully immersive digital twin of your physical space, you're not just showing your business—you're opening it up to a world of new opportunities.

A virtual tour gives your marketing and sales efforts a competitive edge, driving tangible results that go straight to your bottom line.
          </p>
          <h3 className="text-2xl font-bold text-charcoal mt-4 mb-2">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enhanced Engagement & Brand Reputation */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                {/* Replace src with your own image */}
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80" alt="Engagement" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Enhanced Engagement & Brand Reputation</div>
                  <div className="text-charcoal/90 text-sm mt-1">Stop relying on static images and passive videos. A virtual tour provides an immersive, interactive experience that captivates your audience. This dynamic engagement builds a deeper, more emotional connection with your brand, positioning you as an innovator and a leader. By keeping visitors on your site longer, you boost your online visibility and build a strong foundation for future business.</div>
                </div>
              </div>
            </div>
            {/* Wider Audience Reach */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="Audience Reach" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Wider Audience Reach</div>
                  <div className="text-charcoal/90 text-sm mt-1">Tear down the geographical walls that limit your business. A virtual tour gives you a global reach, allowing potential customers, clients, or students from across the street or across the world to explore your physical space at their convenience. This is a game-changer for businesses targeting international markets, from global retail brands and universities to commercial real estate firms seeking overseas investors.</div>
                </div>
              </div>
            </div>
            {/* Showcasing Unique Selling Points */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80" alt="Unique Selling Points" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Showcasing Unique Selling Points</div>
                  <div className="text-charcoal/90 text-sm mt-1">Go beyond simply showing your space—highlight what makes it special. With interactive "hotspots" and embedded media, you can strategically guide visitors to your most valuable features. Showcase a new product line with embedded videos, provide detailed specifications for a luxury item, or highlight a limited-edition collection. A virtual tour transforms into a powerful, interactive sales presentation that works for you 24/7.</div>
                </div>
              </div>
            </div>
            {/* Lead Qualification & Conversion */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=200&q=80" alt="Lead Qualification" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Lead Qualification & Conversion</div>
                  <div className="text-charcoal/90 text-sm mt-1">Filter your prospects from the start. A virtual tour acts as a powerful pre-qualification tool, ensuring that the people who reach out to you are genuinely interested and have a clear understanding of your offering. This leads to a more efficient sales funnel, a shorter sales cycle, and a higher conversion rate, allowing your team to focus on closing deals with the most promising leads.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
