"use client";

import { FaLeaf, FaClock, FaThumbsUp } from "react-icons/fa";

const reasons = [
  {
    title: "Professional & Reliable",
    description:
      "Matt’s Lawns provides dependable lawn care and gardening services that you can count on — every visit, on time, and done right.",
    icon: FaLeaf,
  },
  {
    title: "Flexible Scheduling",
    description:
      "Whether you need a one-off tidy-up or regular maintenance, we work around your schedule for minimal disruption.",
    icon: FaClock,
  },
  {
    title: "Trusted & Experienced",
    description:
      "With years of hands-on gardening experience, we know how to keep your lawn and garden healthy, tidy, and thriving.",
    icon: FaThumbsUp,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-20 bg-[#f6faf7] font-body text-[#1f2933]">
      <div className="max-w-6xl mx-auto px-6 space-y-12">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700">
            Why Choose Matt’s Lawns
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#4b5563]">
            Professional lawn and garden care that keeps your property looking its best.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-8 flex flex-col items-center text-center space-y-4"
            >
              <reason.icon className="text-green-700 w-12 h-12" />
              <h3 className="text-2xl font-bold text-green-700">{reason.title}</h3>
              <p className="text-[#4b5563]">{reason.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
