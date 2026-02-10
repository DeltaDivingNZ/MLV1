import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Lawn Mowing",
    description:
      "Professional lawn mowing with clean edges, tidy finishes, and reliable service.",
    image: "/images/lawn-mowing.jpg",
    href: "/lawn-mowing",
    items: [
      "Regular or one-off mowing",
      "Edging & line trimming",
      "Paths and driveways blown down",
    ],
  },
  {
    title: "Hedge Trimming",
    description:
      "Keep your hedges and shrubs neat, healthy, and under control year-round.",
    image: "/images/hedge-trimming.jpg",
    href: "/hedge-trimming",
    items: [
      "Hedge & shrub trimming",
      "Height reduction",
      "Green waste removal",
    ],
  },
  {
    title: "General Gardening",
    description:
      "Garden clean-ups and maintenance for homes, rentals, and pre-sale properties.",
    image: "/images/general-gardening.jpg",
    href: "/general-gardening",
    items: [
      "Weeding & garden clean-ups",
      "Green waste removal",
      "Ongoing garden maintenance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="bg-[#f6faf7] py-20 font-body text-[#1f2933]">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#4b5563]">
            Reliable lawn care and garden maintenance to keep your property looking its best.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service) => (
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

              <div className="p-6 space-y-4 flex-1">
                <h2 className="text-2xl font-bold text-green-700">
                  {service.title}
                </h2>

                <p className="text-[#4b5563]">
                  {service.description}
                </p>

                <ul className="list-disc list-inside space-y-1 text-[#374151]">
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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

        {/* Call to Action */}
        <div className="text-center">
          <Link
            href="/quote"
            className="inline-block bg-green-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-800 transition"
          >
            Request a Free Quote
          </Link>
        </div>

      </div>
    </section>
  );
}
