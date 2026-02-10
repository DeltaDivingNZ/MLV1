import Image from "next/image";
import Link from "next/link";

export default function LawnMowingPage() {
  return (
    <section className="bg-[#f6faf7] py-20 font-body text-[#1f2933]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            Lawn Mowing
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#4b5563]">
            Reliable, tidy lawn mowing with sharp edges and a clean finish — every time.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p>
              Matt’s Lawns provides professional lawn mowing services for residential
              and small commercial properties. Whether you need a regular schedule or
              a one-off tidy-up, your lawn will be left clean, even, and well presented.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Regular or one-off lawn mowing</li>
              <li>Edging along paths, driveways, and garden borders</li>
              <li>Weed eating / line trimming</li>
              <li>Blowing down paths and hard surfaces</li>
              <li>Clipping removal if required</li>
            </ul>

            <Link
              href="/quote"
              className="inline-block bg-green-700 text-white px-6 py-3 rounded font-semibold hover:bg-green-800 transition"
            >
              Get a Free Quote
            </Link>
          </div>

          <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden shadow">
            <Image
              src="/images/lawn-mowing.jpg"
              alt="Freshly mown lawn"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
