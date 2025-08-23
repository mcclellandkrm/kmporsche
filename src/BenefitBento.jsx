
import React from "react";
import { Link } from "react-router-dom";




export default function BenefitBento() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-400">benefitsbento</h2>
        <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-offwhite mb-10 text-center tracking-tight leading-tight">
          The key benefits to your business
        </h2>
  <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          <Link to="/business-development" className="relative lg:row-span-2 group cursor-pointer" style={{textDecoration: 'none'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800 lg:rounded-l-3xl transition-shadow duration-300 group-hover:shadow-[0_0_32px_0_rgba(80,120,255,0.25)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg lg:rounded-l-3xl">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Marketing & Business Development</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Attract high-value clients and partners with immersive, interactive tours that showcase your space and brand story in the best light.
                </p>
              </div>
              <div className="flex justify-center items-center py-8">
                <div className="relative w-[320px] h-[600px] bg-[#181E29] rounded-[2.5rem] border border-gray-700 shadow-2xl flex flex-col items-center overflow-hidden">
                  {/* Status bar / notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 mt-3 w-24 h-2.5 bg-gray-800 rounded-full opacity-70 z-10" />
                  {/* Screen */}
                  <img
                    alt="Mobile UI"
                    src="https://tailwindcss.com/plus-assets/img/component-images/bento-03-mobile-friendly.png"
                    className="absolute top-8 left-0 w-full h-[calc(100%-2rem)] object-cover object-top rounded-b-[2.2rem]"
                  />
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 lg:rounded-l-3xl" />
          </Link>
          <Link to="/operational-efficiency" className="relative max-lg:row-start-1 group cursor-pointer" style={{textDecoration: 'none'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-t-3xl transition-shadow duration-300 group-hover:shadow-[0_0_32px_0_rgba(80,120,255,0.25)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-t-3xl">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Operational Efficiency & Planning</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Streamline onboarding, training, and space planning with digital twins and remote collaboration tools.
                </p>
              </div>
              <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-performance.png"
                  className="w-full max-lg:max-w-xs"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-3xl" />
          </Link>
          <Link to="/customer-experience" className="relative max-lg:row-start-3 lg:col-start-2 lg:row-start-2 group cursor-pointer" style={{textDecoration: 'none'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800 transition-shadow duration-300 group-hover:shadow-[0_0_32px_0_rgba(80,120,255,0.25)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg">
              <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Customer Experience & Accessibility</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Delight guests and buyers with 24/7 access, wayfinding, and inclusive experiences for all abilities.                </p>
              </div>
              <div className="flex flex-1 items-center max-lg:py-6 lg:pb-2">
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/component-images/dark-bento-03-security.png"
                  className="h-[min(152px,40cqw)] object-cover"
                />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
          </Link>
          <Link to="/sector-applications" className="relative lg:row-span-2 group cursor-pointer" style={{textDecoration: 'none'}}>
            <div className="absolute inset-px rounded-lg bg-gray-800 max-lg:rounded-b-3xl lg:rounded-r-3xl transition-shadow duration-300 group-hover:shadow-[0_0_32px_0_rgba(80,120,255,0.25)]" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-lg max-lg:rounded-b-3xl lg:rounded-r-3xl">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-medium tracking-tight text-white max-lg:text-center">Sector-Specific Applications</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-400 max-lg:text-center">
                  Tailored solutions for retail, hospitality, commercial property, education, and more—each with unique features and value.
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900/60 outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        NotificationSetting.jsx
                      </div>
                      <div className="border-r border-gray-600/10 px-4 py-2">App.jsx</div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">{/* Your code example */}</div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-b-3xl lg:rounded-r-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
}
