"use client";

import Image from "next/image";
import Link from "next/link";

const coreServices = [
  {
    title: "Lawn Mowing",
    description:
      "Regular and one-off lawn mowing with clean edges, tidy finishes, and a healthy, even cut.",
    image: "/images/lawn-mowing.jpg",
    href: "/lawn-mowing",
  },
  {
    title: "Hedge Trimming",
    description:
      "Precise trimming and shaping of hedges and shrubs for a neat and healthy garden.",
    image: "/images/hedge-trimming.jpg",
    href: "/hedge-trimming",
  },
  {
    title: "General Gardening",
    description:
      "Weeding, garden clean-ups, green waste removal, and light maintenance to keep your garden looking great.",
    image: "/images/general-gardening.jpg",
    href: "/general-gardening",
  },
];

export default function ServiceGrid() {
  return (
    <section className="py-20 bg-[#f6faf7] font-body text-[#1f2933]">
      <div className="max-w-7xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700">
            Our Services
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-[#4b5563]">
            Helping you maintain a healthy, tidy, and beautiful garden.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {coreServices.map((service) => (
            <div
              key={service.title}
              className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex-1 space-y-4">
                <h3 className="text-2xl font-bold text-green-700">
                  {service.title}
                </h3>
                <p className="text-[#4b5563]">{service.description}</p>
              </div>

              <div className="p-6 pt-0">
                <Link
                  href={service.href}
                  className="inline-block text-green-700 font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
