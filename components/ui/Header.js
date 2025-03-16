"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {

  const handleAuthRedirect = (e, path) => {
    e.preventDefault();
    window.location.href = path; // Redirect to the desired path
  };
  return (
    <div className="hero-section bg-black text-white">
      {/* Navigation Bar */}
      <nav className="flex flex-wrap justify-between items-center px-6 md:px-8 py-4">
        <div className="text-purple-500 text-xl md:text-2xl font-bold">
        <Link href="/" className="hover:text-purple-500">
          <span className="text-white">V</span>Mock <span className="text-xs">Ai</span>
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center space-x-6 md:space-x-8 text-sm md:text-lg mt-2 md:mt-0">
          <li>
            <Link href="/" className="hover:text-purple-500">
              Home
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="hover:text-purple-500">
              Pricing
            </Link>
          </li>
          <li>
            <Link href="/help" className="hover:text-purple-500">
            Help
            </Link>
          </li>

        </ul>
        <div className="mt-4 md:mt-0">
          <Link
            href="/sign-in"
            className="bg-purple-500 px-4 py-2 rounded-full text-white hover:bg-purple-600 transition text-sm md:text-base"
          >
            Get Started
          </Link>
        </div>
      </nav>
    </div>
  );
}
