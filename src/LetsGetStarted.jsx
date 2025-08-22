import React, { useState, useRef, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const budgetOptions = [
  "estimated budget",
  "$25,000 to $50,000",
  "$50,000 to $250,000",
  "$250,000 to $500,000",
  "more than $500,000",
];

const LetsGetStarted = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    budget: "estimated budget",
    vision: "",
    heard: "",
    date: null,
  });

  // Scroll background transition
  const sectionRef = useRef(null);
  const [bgProgress, setBgProgress] = useState(0); // 0 = white, 1 = dark

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      // When top of section enters viewport, start transition
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;
      let progress = 0;
      if (rect.top < start && rect.bottom > end) {
        progress = Math.min(1, Math.max(0, 1 - (rect.top - end) / (start - end)));
      } else if (rect.top <= end) {
        progress = 1;
      }
      setBgProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Interpolate background color from white to #18181b (zinc-900)
  const bgColor = `rgb(${255 - Math.round(255 * bgProgress * 0.91)},${255 - Math.round(255 * bgProgress * 0.91)},${255 - Math.round(255 * bgProgress * 0.92)})`;
  return (
    <section
      ref={sectionRef}
      className="w-full min-h-screen flex flex-col items-center justify-center transition-colors duration-700 py-16 px-2"
      style={{ background: bgColor }}
    >
    <div className="max-w-3xl w-full bg-charcoal/90 rounded-3xl shadow-2xl p-8 md:p-16 mx-auto relative border border-offwhite/10">
  <h2 className="text-5xl md:text-7xl font-extrabold font-heading text-center mb-4 text-offwhite/90 tracking-tight leading-tight">let’s get started</h2>
  <p className="text-xl md:text-2xl font-light text-offwhite/90 text-center mb-10 leading-relaxed tracking-wide">It’s time to delight your customers and accelerate your business.</p>
  <form className="flex flex-col gap-6">
          {/* Name and Email: stack vertically on mobile, side-by-side on md+ */}
          <div className="flex flex-col w-full">
            <label className="uppercase text-xs font-bold text-offwhite/80 mb-2">Your Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none placeholder:text-offwhite/60 w-full" />
          </div>
          <div className="flex flex-col w-full">
            <label className="uppercase text-xs font-bold text-offwhite/80 mb-2">Your Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none placeholder:text-offwhite/60 w-full" />
          </div>
          <div className="flex flex-col w-full">
            <label className="uppercase text-xs font-bold text-offwhite/80 mb-2">Company Website</label>
            <input name="website" value={form.website} onChange={handleChange} className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none placeholder:text-offwhite/60 w-full" />
          </div>
          <div className="flex flex-col w-full">
            <label className="uppercase text-xs font-bold text-offwhite/80 mb-2">Budget (USD)</label>
            <select name="budget" value={form.budget} onChange={handleChange} className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none w-full">
              {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-xs font-bold text-offwhite/80 mb-2">What's your vision for this project?</label>
            <textarea name="vision" value={form.vision} onChange={handleChange} rows={4} className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none placeholder:text-offwhite/60" />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-xs font-bold text-offwhite/80 mb-2">Where did you hear about us?</label>
            <input name="heard" value={form.heard} onChange={handleChange} className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none placeholder:text-offwhite/60" />
          </div>
          {/* Date picker: show only on desktop, use text input on mobile */}
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-xs font-bold text-offwhite/80 mb-2">Schedule a call back</label>
            <div className="hidden md:block">
              <DatePicker
                selected={form.date}
                onChange={date => setForm(f => ({ ...f, date }))}
                className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none placeholder:text-offwhite/60 w-full"
                placeholderText="Pick a date and time"
                showTimeSelect
                dateFormat="Pp"
              />
            </div>
            <div className="block md:hidden">
              <input
                type="text"
                name="date"
                value={form.date ? form.date.toLocaleString() : ''}
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                className="rounded-xl bg-offwhite/10 border border-offwhite/20 focus:border-burgundy focus:ring-2 focus:ring-burgundy text-offwhite px-4 py-3 transition-all duration-200 outline-none placeholder:text-offwhite/60 w-full"
                placeholder="Suggest a date/time (optional)"
              />
            </div>
          </div>
          <div className="col-span-2 flex justify-center mt-4">
            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-offwhite/30 text-lg font-bold text-offwhite shadow-lg hover:bg-white/20 hover:border-burgundy/60 hover:shadow-2xl hover:scale-105 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-burgundy/40"
              style={{
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
                letterSpacing: '0.04em',
              }}
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LetsGetStarted;
