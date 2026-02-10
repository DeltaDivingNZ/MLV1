import Image from "next/image";
import Link from "next/link";

export default function HedgeTrimmingPage() {
  return (
    <section className="bg-[#f6faf7] py-20 font-body text-[#1f2933]">
      <div className="max-w-6xl mx-auto px-6 space-y-16">

        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700">
            Hedge Trimming
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-[#4b5563]">
            Keep your hedges neat, healthy, and under control.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p>
              Overgrown hedges can quickly make a property look untidy.
              Matt’s Lawns offers precise hedge trimming and shaping to
              keep your garden looking sharp year-round.
            </p>

            <ul className="list-disc list-inside space-y-2">
              <li>Hedge and shrub trimming</li>
              <li>Height reduction</li>
              <li>Shaping and maintenance cuts</li>
              <li>Seasonal tidy-ups</li>
              <li>Green waste removal</li>
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
              src="/images/hedge-trimming.jpg"
              alt="Hedge trimming service"
              fill
              className="object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
