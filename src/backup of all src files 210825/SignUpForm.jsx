import React, { useState } from "react";

const SignUpForm = () => {
  const [form, setForm] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    website: "",
    projectType: "",
    locations: "",
    spare1: "",
    spare2: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the real sign up logic (API call, etc)
    setSubmitted(true);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-lg p-8 mt-12">
      <h2 className="text-2xl font-heading font-bold mb-6 text-center">Sign Up</h2>
      {submitted ? (
        <div className="text-green-600 text-center font-semibold py-8">Thank you for signing up!</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="businessName">Business Name</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="businessName"
              name="businessName"
              value={form.businessName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="website">Website</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="url"
              id="website"
              name="website"
              value={form.website}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="projectType">Type of Project</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="projectType"
              name="projectType"
              value={form.projectType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a type</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="locations">Number of Locations</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="number"
              id="locations"
              name="locations"
              value={form.locations}
              onChange={handleChange}
              min="1"
              required
            />
          </div>
          {/* Spare fields */}
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="spare1">Spare Field 1</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="spare1"
              name="spare1"
              value={form.spare1}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="spare2">Spare Field 2</label>
            <input
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="spare2"
              name="spare2"
              value={form.spare2}
              onChange={handleChange}
            />
          </div>
          {/* Agree to terms */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={form.agree}
              onChange={handleChange}
              required
              className="mr-2"
            />
            <label htmlFor="agree" className="text-sm">I agree to the terms and conditions</label>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition"
          >
            Send
          </button>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;
