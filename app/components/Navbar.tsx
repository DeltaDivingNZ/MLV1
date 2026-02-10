"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // desktop services
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // mobile menu
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // mobile services
  const pathname = usePathname();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/lawn-mowing", hasDropdown: true },
    { label: "About", href: "/about" },
    { label: "Get a Quote", href: "/quote" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20 relative">

        {/* Logo */}
        <Link href="/" className="relative h-20 w-20 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Delta Detailing logo"
            fill
            className="object-contain"
            priority
          />
        </Link>

        {/* Centered title */}
        <Link
          href="/"
          className="absolute left-1/2 transform -translate-x-1/2 font-bold text-green-700 text-2xl whitespace-nowrap"
        >
          Matt's Lawns
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const isServices = item.hasDropdown;

            return (
              <li
                key={item.href}
                className={`relative ${isServices ? "group" : ""}`}
                onMouseEnter={() => isServices && setDropdownOpen(true)}
                onMouseLeave={() => isServices && setDropdownOpen(false)}
              >
                <Link
                  href={item.href}
                  className="px-1 py-2 text-[#d0d0d0] font-semibold group"
                >
                  {item.label}

                  {/* Hover & Active underline */}
                  <span
                    className={`
                      block h-0.5 bg-[#538e79] mt-1
                      transition-all duration-300 ease-out
                      ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                    `}
                  />
                </Link>

                {/* Services Dropdown */}
                {isServices && (
                  <ul
                    className={`absolute left-0 mt-1 transition-all duration-150 ${
                      dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    style={{
                      backgroundColor: "#1e1e1e",
                      borderRadius: "0.25rem",
                      boxShadow: "0 8px 20px rgba(0,0,0,0.35)",
                      width: "12rem",
                    }}
                  >
                    <li>
  <Link href="/lawn-mowing" className="block px-4 py-2 hover:bg-[#538e79]/20">
    Lawn Mowing
  </Link>
</li>
<li>
  <Link href="/hedge-trimming" className="block px-4 py-2 hover:bg-[#538e79]/20">
    Hedge Trimming
  </Link>
</li>
<li>
  <Link href="/general-gardening" className="block px-4 py-2 hover:bg-[#538e79]/20">
    General Gardening
  </Link>
</li>

                  </ul>
                )}
              </li>
            );
          })}
        </ul>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 text-[#538e79]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-[#0e0e0e] px-4 pb-4 space-y-2 shadow-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            if (item.hasDropdown) {
              return (
                <li key={item.href}>
                  <button
                    onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                    className={`w-full text-left py-2 flex justify-between items-center font-semibold ${
                      isActive ? "text-[#538e79]" : "text-[#d0d0d0]"
                    }`}
                  >
                    {item.label}
                    <span className="ml-2">{mobileDropdownOpen ? "▲" : "▼"}</span>
                  </button>

                  {mobileDropdownOpen && (
                    <ul className="pl-4 mt-1 space-y-1">
                      <li>
  <Link href="/lawn-mowing" className="block px-4 py-2 hover:bg-[#538e79]/20">
    Lawn Mowing
  </Link>
</li>
<li>
  <Link href="/hedge-trimming" className="block px-4 py-2 hover:bg-[#538e79]/20">
    Hedge Trimming
  </Link>
</li>
<li>
  <Link href="/general-gardening" className="block px-4 py-2 hover:bg-[#538e79]/20">
    General Gardening
  </Link>
</li>

                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block py-2 font-semibold ${
                    isActive ? "text-[#538e79]" : "text-[#d0d0d0]"
                  } hover:text-[#538e79]`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
}
