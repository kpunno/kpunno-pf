"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-sm shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="md:flex space-x-4">
          <Link
            href="/"
            className="text-gray-700 hover:text-[#FFAA00] transition-all"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-700 hover:text-[#FFAA00] transition-all"
          >
            Projects
          </Link>
          {/*
          <Link
            href="/about"
            className="text-gray-700 hover:text-[#FFAA00] transition-all"
          >
            About
          </Link>
          */}
        </div>
      </div>
    </nav>
  );
}
