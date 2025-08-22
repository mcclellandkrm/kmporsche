import React from "react";

export default function OperationalEfficiency() {
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
          Operational Efficiency & Planning
        </h2>
        <div className="bg-white/60 backdrop-blur-lg border border-white/30 rounded-2xl shadow-xl p-10 md:p-14 flex flex-col gap-10">
          <p className="text-lg text-charcoal/90 mb-2">
            For management, a virtual tour is far more than a marketing tool—it's a strategic asset that transforms internal operations. By creating a precise digital twin of your physical space, you unlock new levels of efficiency, security, and control, all accessible from a single platform.

This technology allows you to operate smarter, not harder, by streamlining everything from logistics and training to asset and facility management.
          </p>
          <h3 className="text-2xl font-bold text-charcoal mt-4 mb-2">Key Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Enhanced Engagement & Brand Reputation */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                {/* Replace src with your own image */}
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=200&q=80" alt="Engagement" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Streamlined Space Planning:</div>
                  <div className="text-charcoal/90 text-sm mt-1">Say goodbye to costly and time-consuming site visits. A virtual tour provides a dimensionally accurate digital replica of your space, enabling your team to visualize, plan, and execute changes remotely. Whether you’re optimizing a retail floor layout, planning a renovation, or preparing a new event setup, you can do it with precision and speed, reducing errors and ensuring a seamless transition.</div>
                </div>
              </div>
            </div>
            {/* Wider Audience Reach */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80" alt="Audience Reach" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Improved Collaboration & Training</div>
                  <div className="text-charcoal/90 text-sm mt-1">Bring your entire team into the same room, no matter where they are. The virtual tour serves as a single source of truth for all stakeholders, ensuring everyone has a clear, shared understanding of the space. It’s also a powerful, repeatable training tool for new hires, allowing them to learn the layout, identify safety protocols, and familiarize themselves with the environment before their first day on-site.</div>
                </div>
              </div>
            </div>
            {/* Showcasing Unique Selling Points */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=200&q=80" alt="Unique Selling Points" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Comprehensive Asset Management</div>
                  <div className="text-charcoal/90 text-sm mt-1">Turn your virtual tour into a dynamic database. Using interactive tags, you can embed rich data points directly into your digital twin. This provides a comprehensive digital record for maintenance, security, and inventory checks. For large facilities or multi-location businesses, this centralized documentation ensures consistency and allows for swift, accurate management of all assets.</div>
                </div>
              </div>
            </div>
            {/* Lead Qualification & Conversion */}
            <div className="flex flex-col gap-3 items-start">
              <div className="w-full rounded-xl overflow-hidden bg-white/70 border border-white/30 shadow p-4 flex items-center gap-4">
                <img src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=200&q=80" alt="Lead Qualification" className="w-16 h-16 object-cover rounded-lg bg-offwhite/60" />
                <div>
                  <div className="font-semibold text-charcoal/100">Enhanced Security & Remote Documentation</div>
                  <div className="text-charcoal/90 text-sm mt-1">A virtual tour provides an unalterable, time-stamped record of your property. This is invaluable for documenting existing conditions for insurance, security, or legal purposes. In the event of an incident or an inspection, you can provide a precise visual record of the space, giving you an unparalleled level of transparency and control over your assets.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
