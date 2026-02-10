"use client";

import { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sarah T.",
    feedback:
      "Matt’s Lawns transformed our garden! Our hedges and lawn have never looked so tidy. Highly recommend!",
  },
  {
    name: "James L.",
    feedback:
      "Reliable and professional. The team mowed our lawn, trimmed edges, and left everything spotless.",
  },
  {
    name: "Emily R.",
    feedback:
      "Excellent service! They cleaned up my garden, removed green waste, and even suggested improvements for next season.",
  },
];

export default function TestimonialsSlider() {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length === 0) return null;

  return (
    <section className="py-20 bg-[#f6faf7] font-body text-[#1f2933]">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">

        <h2 className="text-4xl md:text-5xl font-bold text-green-700">
          What Our Customers Say
        </h2>

        <div className="relative bg-white rounded-xl shadow p-10 space-y-4">
          <FaQuoteLeft className="text-green-700 w-10 h-10 mx-auto" />

          <p className="text-[#4b5563] text-lg">{testimonials[current].feedback}</p>
          <p className="font-semibold text-green-700">— {testimonials[current].name}</p>

          {/* Arrows */}
          <div className="absolute top-1/2 transform -translate-y-1/2 left-6 cursor-pointer text-green-700 text-2xl" onClick={prevSlide}>
            ‹
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-6 cursor-pointer text-green-700 text-2xl" onClick={nextSlide}>
            ›
          </div>
        </div>

      </div>
    </section>
  );
}
