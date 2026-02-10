"use client";

import { useState } from "react";
import TestimonialsSlider from "../components/TestimonialsSlider";

const faqs = [
  {
    question: "Do you offer regular lawn mowing?",
    answer:
      "Yes. Weekly, fortnightly, and monthly maintenance plans are available.",
  },
  {
    question: "Do you remove grass clippings?",
    answer:
      "Absolutely. Clippings can be removed or mulched depending on your preference.",
  },
  {
    question: "Can you handle overgrown lawns?",
    answer:
      "Yes. Long, thick, or neglected lawns are no problem.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "No — as long as access is available, we’ll take care of everything.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. Matt’s Lawns is fully insured for your peace of mind.",
  },
];

export default function AboutPage() {
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20 font-body text-gray-700">

      <section className="space-y-8">
        <h1 className="font-title text-5xl md:text-6xl text-center text-green-700">
          About Matt’s Lawns
        </h1>
        <p>
          Matt’s Lawns was built on a simple idea: do the job properly, every time.
        </p>
        <p>
          Lawn care isn’t just about cutting grass — it’s about reliability, pride
          in workmanship, and leaving every property looking clean and cared for.
        </p>
        <p>
          With quality equipment and years of hands-on experience, Matt’s Lawns
          delivers consistent results whether it’s a small residential lawn or a
          full section clean-up.
        </p>
        <p>
          One-off jobs or regular maintenance — you can count on Matt’s Lawns to
          keep your property looking its best year-round.
        </p>
      </section>

      <section className="space-y-8">
        <h2 className="font-title text-4xl md:text-5xl text-center text-green-700">
          FAQ
        </h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="border-b border-gray-300">
              <button
                onClick={() => setActiveFAQ(activeFAQ === i ? null : i)}
                className="w-full text-left py-4 font-semibold text-lg flex justify-between items-center"
              >
                {faq.question}
                <span>{activeFAQ === i ? "−" : "+"}</span>
              </button>
              <div
                className={`overflow-hidden transition-max-height duration-500 ${
                  activeFAQ === i ? "max-h-96 mt-2" : "max-h-0"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsSlider />
    </div>
  );
}
