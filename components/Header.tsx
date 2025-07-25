import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-green-700">
          <Link href="/">EduPlatform</Link>
        </div>

        {/* Navigation */}
        <nav className="space-x-6 hidden md:flex">
          <Link
            href="/courses"
            className="text-gray-700 hover:text-green-700 font-medium"
          >
            Courses
          </Link>
          <Link
            href="/blog"
            className="text-gray-700 hover:text-green-700 font-medium"
          >
            Blog
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-green-700 font-medium"
          >
            About
          </Link>
        </nav>

        {/* Call href action */}
        <div className="space-x-4">
          <Link href="/login" className="text-gray-600 hover:text-green-700">
            Login
          </Link>
          <Link
            href="/register"
            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
