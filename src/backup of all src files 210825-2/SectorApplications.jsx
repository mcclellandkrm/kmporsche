import React from "react";

export default function SectorApplications() {
  return (
    <section className="w-full bg-offwhite py-24 px-4 sm:px-8 lg:px-24">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Hero/feature image */}
        <div className="w-full flex justify-center mb-4">
          <div className="rounded-2xl overflow-hidden shadow-xl bg-white/40 backdrop-blur-lg border border-white/30 w-full max-w-3xl aspect-[3/1] flex items-center justify-center">
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
              alt="Modern office with digital dashboard"
              className="object-cover w-full h-full opacity-80"
            />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-charcoal mb-8 tracking-tight leading-tight text-center">
          Sector-Specific Applications
        </h2>
                <div className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-10 md:p-14 flex flex-col gap-10">
          <p className="text-lg text-charcoal/90 mb-2">
            Every industry has unique challenges and goals. While the core benefits of a virtual tour—from enhanced marketing to improved operations—are universal, we understand that a one-size-fits-all approach doesn't work. This section highlights how a custom-built virtual tour can be uniquely applied to elevate your specific business and help you stand out in your market.
          </p>
          <h3 className="text-2xl font-bold text-charcoal mt-4 mb-2">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enhanced Engagement & Brand Reputation */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                {/* Replace src with your own image */}
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80" alt="Engagement" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">1. Commercial Properties & Retail</div>
                  <div className="text-charcoal/90 text-sm mt-1">For property managers, a virtual tour is your most powerful leasing tool. Secure tenants faster by offering remote, immersive tours of available spaces, dramatically reducing the time from viewing to lease signing. For retailers, it’s about transforming the online shopping experience. We can integrate e-commerce functionalities, allowing customers to browse and buy products directly from the tour, creating a seamless bridge between your physical and digital storefronts.</div>
                </div>
              </div>
            </div>
            {/* Wider Audience Reach */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="Audience Reach" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">2. Tourism, Hospitality & Events</div>
                  <div className="text-charcoal/90 text-sm mt-1">Attract guests and boost bookings by giving them a powerful preview of their experience. A virtual tour allows potential guests to explore hotel rooms, conference facilities, and unique amenities before they arrive, building trust and excitement. For event planners, it’s the ultimate sales tool, allowing them to visualize the full potential of your venue for weddings, corporate functions, or conferences, leading to faster decisions and higher-value bookings.</div>
                </div>
              </div>
            </div>
            {/* Showcasing Unique Selling Points */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80" alt="Unique Selling Points" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">3. Education</div>
                  <div className="text-charcoal/90 text-sm mt-1">Compete for top talent on a global scale. Virtual tours are a game-changer for student recruitment, providing prospective students and their families with an immersive, on-demand tour of your campus, facilities, and student life. It's a modern, scalable tool for virtual open days and a powerful way to engage alumni by giving them a nostalgic look back at their alma mater from anywhere in the world.</div>
                </div>
              </div>
            </div>
            {/* Lead Qualification & Conversion */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=200&q=80" alt="Lead Qualification" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">4. Airports & Logistics</div>
                  <div className="text-charcoal/90 text-sm mt-1">For complex environments, clarity is key. A virtual tour can be used to improve passenger experience by helping travelers navigate terminals, locate gates, and find amenities with ease. It's also an invaluable tool for operational transparency and security, offering behind-the-scenes access to areas like baggage handling or hangars for training, safety briefings, or public relations purposes.</div>
                </div>
              </div>
            </div>
            {/* Healthcare */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=200&q=80" alt="Healthcare" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">5. Showrooms & Automotive</div>
                  <div className="text-charcoal/90 text-sm mt-1">Create a 24/7, accessible showroom that never closes. A virtual tour allows potential customers to explore your product line, get detailed specifications, and even make a purchase from the comfort of their home. For the automotive industry, customers can walk through a dealership, examine a vehicle's interior and exterior in detail, and learn about features without ever setting foot on the lot.</div>
                </div>
              </div>
            </div>
            {/* Hospitality */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="Hospitality" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">6. Healthcare & Manufacturing</div>
                  <div className="text-charcoal/90 text-sm mt-1">In industries where access is often restricted, a virtual tour offers an ideal solution. Healthcare providers can offer a transparent look at their facilities—from hospital wards to surgical suites—to build patient confidence and trust. For manufacturing, a virtual tour can provide a safe and controlled way to showcase a production line or a factory floor to potential clients, partners, or new hires, without interrupting operations or posing safety risks.







</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
