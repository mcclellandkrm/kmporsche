import React, { useState } from "react";
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center bg-black py-16 px-2">
      <div className="max-w-3xl w-full bg-black/80 rounded-3xl shadow-2xl p-8 md:p-16 mx-auto relative border border-white/10">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">let’s get started</h2>
        <p className="text-xl md:text-2xl text-white/90 text-center mb-10 font-semibold">It’s time to delight your customers and accelerate your business.</p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="uppercase text-xs font-bold text-blue-200 mb-2">Your Name</label>
            <input name="name" value={form.name} onChange={handleChange} className="rounded-xl bg-black border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-white px-4 py-3 transition-all duration-200 outline-none" />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-xs font-bold text-blue-200 mb-2">Your Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="rounded-xl bg-black border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-white px-4 py-3 transition-all duration-200 outline-none" />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-xs font-bold text-blue-200 mb-2">Company Website</label>
            <input name="website" value={form.website} onChange={handleChange} className="rounded-xl bg-black border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-white px-4 py-3 transition-all duration-200 outline-none" />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-xs font-bold text-blue-200 mb-2">Budget (USD)</label>
            <select name="budget" value={form.budget} onChange={handleChange} className="rounded-xl bg-black border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-white px-4 py-3 transition-all duration-200 outline-none">
              {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
            </select>
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-xs font-bold text-pink-200 mb-2">What's your vision for this project?</label>
            <textarea name="vision" value={form.vision} onChange={handleChange} rows={4} className="rounded-xl bg-black border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-white px-4 py-3 transition-all duration-200 outline-none" />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-xs font-bold text-blue-200 mb-2">Where did you hear about us?</label>
            <input name="heard" value={form.heard} onChange={handleChange} className="rounded-xl bg-black border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-white px-4 py-3 transition-all duration-200 outline-none" />
          </div>
          <div className="col-span-2 flex flex-col">
            <label className="uppercase text-xs font-bold text-blue-200 mb-2">Schedule a call back</label>
            <DatePicker
              selected={form.date}
              onChange={date => setForm(f => ({ ...f, date }))}
              className="rounded-xl bg-black border border-white/20 focus:border-pink-400 focus:ring-2 focus:ring-pink-400 text-white px-4 py-3 transition-all duration-200 outline-none"
              placeholderText="Pick a date and time"
              showTimeSelect
              dateFormat="Pp"
            />
          </div>
          <div className="col-span-2 flex justify-center mt-4">
            <button type="submit" className="px-8 py-3 rounded-xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-lg font-bold text-white shadow hover:scale-105 transition-all">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LetsGetStarted;
