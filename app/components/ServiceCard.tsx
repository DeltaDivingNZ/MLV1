import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  prices: { size: string; price: string }[];
  features: string[];
  anchor?: string;
}

export default function ServiceCard({
  title,
  image,
  prices,
  features,
  anchor,
}: Props) {
  return (
    <div
      id={anchor}
      className="bg-[#141414] rounded-2xl overflow-hidden shadow-lg"
    >
      {/* IMAGE */}
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CONTENT */}
      <div className="p-8 space-y-6">
        <h3 className="text-2xl font-bold text-[#538e79]">{title}</h3>

        {/* PRICES - 2x2 grid */}
        <div className="grid grid-cols-2 gap-4 text-sm text-[#d0d0d0] mb-4">
          {prices.map((p) => (
            <div
              key={p.size}
              className="flex justify-between border-b border-[#2c2c2c] pb-1"
            >
              <span>{p.size}</span>
              <span className="font-semibold">{p.price}</span>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <ul className="list-disc list-inside text-[#bfbfbf] space-y-1">
          {features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>

        {/* BOOK BUTTON */}
        <Link
          href="/booking"
          className="inline-block mt-4 bg-[#538e79] hover:bg-[#437564] text-black font-semibold px-6 py-3 rounded-lg transition"
        >
          Book this service
        </Link>
      </div>
    </div>
  );
}
