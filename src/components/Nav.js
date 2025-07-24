"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white bg-opacity-10 backdrop-blur-sm shadow-md px-6 py-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        <div className="md:flex space-x-4">
          {/* HOME */}
          {pathname === "/" ? (
            <span className="text-[#00AAFF] select-none">Home</span>
          ) : (
            <Link
              href="/"
              className="text-gray-700 hover:text-[#0000FF] transition-all"
            >
              Home
            </Link>
          )}
          {/* PROJECTS */}
          {pathname === "/projects" ? (
            <span className="text-[#00AAFF] select-none">Projects</span>
          ) : (
            <Link
              href="/projects"
              className="text-gray-700 hover:text-[#0000FF] transition-all"
            >
              Projects
            </Link>
          )}
          {/* BLOG */}
          {pathname === "/blog" ? (
            <span className="text-[#00AAFF] select-none">Blog</span>
          ) : (
            <Link
              href="/blog"
              className="text-gray-700 hover:text-[#0000FF] transition-all"
            >
              Blog
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
