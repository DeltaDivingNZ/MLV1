"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const linkClass = (href: string) =>
    path === href
      ? "border-b-2 border-[#538e79]"
      : "border-b-2 border-transparent hover:border-[#538e79]";

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 h-20">
        <Link href="/" className="text-xl font-bold text-[#538e79]">
          Delta Detailing
        </Link>

        <div className="hidden md:flex gap-8">
          <Link href="/" className={linkClass("/")}>Home</Link>
          <Link href="/about" className={linkClass("/about")}>About</Link>

          <div className="group relative">
            <span className="cursor-pointer">Services</span>
            <div className="absolute hidden group-hover:block bg-[#161616] mt-3 rounded shadow-lg">
              <Link href="/detailing" className="block px-4 py-2 hover:bg-[#1f1f1f]">Detailing</Link>
              <Link href="/paint-correction" className="block px-4 py-2 hover:bg-[#1f1f1f]">Paint Correction</Link>
              <Link href="/other-services" className="block px-4 py-2 hover:bg-[#1f1f1f]">Other Services</Link>
            </div>
          </div>

          <Link href="/booking" className={linkClass("/booking")}>Book</Link>
        </div>
      </div>
    </nav>
  );
}
