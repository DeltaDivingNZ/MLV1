"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false); // Desktop Services dropdown
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // Mobile Services dropdown

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0e0e0e] shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center h-20 relative">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            height={80} // matches h-20 navbar
            width={80}  // scales naturally
            className="object-contain"
          />
        </div>

        {/* Centered title */}
        <div className="absolute left-1/2 transform -translate-x-1/2 font-bold text-[#538e79] text-2xl">
          Delta Detailing
        </div>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center space-x-6">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>

          {/* Desktop Services dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <Link href="/detailing" className="hover:underline">
              Services
            </Link>
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
                <Link href="/detailing" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Detailing
                </Link>
              </li>
              <li>
                <Link href="/paint-correction" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Paint Correction
                </Link>
              </li>
              <li>
                <Link href="/ceramic-coating" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/other-services" className="block px-4 py-2 hover:bg-[#538e79]/20">
                  Other Services
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="/about" className="hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link href="/booking" className="hover:underline">
              Book
            </Link>
          </li>
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
                d={
                  mobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <ul className="md:hidden bg-[#0e0e0e] px-4 pb-4 space-y-2 shadow-md">
          <li>
            <Link href="/" className="block py-2 hover:text-[#538e79]" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>

          {/* Mobile Services dropdown */}
          <li>
            <button
              onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
              className="w-full text-left py-2 flex justify-between items-center hover:text-[#538e79]"
            >
              Services
              <span className="ml-2">{mobileDropdownOpen ? "▲" : "▼"}</span>
            </button>
            {mobileDropdownOpen && (
              <ul className="pl-4 mt-1 space-y-1">
                <li>
                  <Link
                    href="/detailing"
                    className="block py-1 hover:text-[#538e79]"
                    onClick={closeMobileMenu}
                  >
                    Detailing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/paint-correction"
                    className="block py-1 hover:text-[#538e79]"
                    onClick={closeMobileMenu}
                  >
                    Paint Correction
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ceramic-coating"
                    className="block py-1 hover:text-[#538e79]"
                    onClick={closeMobileMenu}
                  >
                    Ceramic Coating
                  </Link>
                </li>
                <li>
                  <Link
                    href="/other-services"
                    className="block py-1 hover:text-[#538e79]"
                    onClick={closeMobileMenu}
                  >
                    Other Services
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/about"
              className="block py-2 hover:text-[#538e79]"
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/booking"
              className="block py-2 hover:text-[#538e79]"
              onClick={closeMobileMenu}
            >
              Book
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
