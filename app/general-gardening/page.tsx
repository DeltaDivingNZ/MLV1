import Image from "next/image";
import Link from "next/link";

export default function GeneralGardeningPage() {
  return (
    <section className="bg-[#f6faf7] py-20 font-body text-[#1f2933]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            General Gardening
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#4b5563]">
            Garden clean-ups, maintenance, and the jobs you don’t have time for.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p>
              From one-off clean-ups to ongoing garden maintenance,
              Matt’s Lawns helps keep your outdoor spaces healthy,
              tidy, and enjoyable.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Garden clean-ups</li>
              <li>Weeding of garden beds</li>
              <li>Green waste removal</li>
              <li>Light planting and garden maintenance</li>
              <li>Pre-sale or rental tidy-ups</li>
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
              src="/images/general-gardening.jpg"
              alt="General garden maintenance"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
