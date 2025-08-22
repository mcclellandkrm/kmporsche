import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SignUpForm from "./SignUpForm";

const faqs = [
  {
    q: "How do I get started?",
    a: "Simply fill out the sign up form and our team will contact you shortly.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, we offer a free trial for all new users.",
  },
  {
    q: "Can I change my plan later?",
    a: "Absolutely! You can upgrade or downgrade your plan at any time.",
  },
  {
    q: "How do I contact support?",
    a: "You can reach our support team via the contact form or by emailing support@example.com.",
  },
];

const ContactHero = () => (
  <section className="w-full py-20 px-4 bg-gradient-to-b from-blue-50 to-white text-center">
    <h1 className="text-4xl md:text-5xl font-heading font-extrabold mb-4 text-blue-900">Get in Touch</h1>
    <p className="text-lg md:text-xl text-blue-800 max-w-2xl mx-auto">We'd love to help you get started. Fill out the form below and our team will reach out to you as soon as possible.</p>
  </section>
);

const FAQSection = () => (
  <section className="w-full max-w-2xl mx-auto py-16 px-4">
    <h2 className="text-2xl font-heading font-bold mb-8 text-center">Frequently Asked Questions</h2>
    <div className="space-y-6">
      {faqs.map((faq, i) => (
        <div key={i} className="bg-blue-50 rounded-xl p-5 shadow-sm">
          <div className="font-semibold text-blue-900 mb-2">{faq.q}</div>
          <div className="text-blue-800">{faq.a}</div>
        </div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <ContactHero />
    <main className="flex-1 flex flex-col items-center justify-start">
      <SignUpForm />
      <FAQSection />
    </main>
    <Footer />
  </div>
);

export default Contact;
