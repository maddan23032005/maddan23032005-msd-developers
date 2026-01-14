'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <img
              src="/logo.png"
              alt="MSD Developers"
              className="h-10 cursor-pointer"
            />
          </Link>
        </div>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link
            href="/"
            className="hover:text-green-600 transition"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="hover:text-green-600 transition"
          >
            About
          </Link>

          <Link
            href="/services"
            className="hover:text-green-600 transition"
          >
            Services
          </Link>

          <Link
            href="/projects"
            className="hover:text-green-600 transition"
          >
            Projects
          </Link>
        </nav>

        {/* CONTACT BUTTON */}
        <Link
          href="/contact"
          className="bg-green-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-green-700 transition"
        >
          Contact Us
        </Link>

      </div>
    </header>
  )
}
