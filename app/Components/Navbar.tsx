"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname(); // Get the current pathname
  const isHome = pathname === "/"; // Check if the current route is the homepage

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar links */}
        <div className="flex items-center space-x-6">
          <Link
            href="/"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            About
          </Link>
          <Link
            href="/Experience"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Experience
          </Link>
          <Link
            href="/Projects"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/Videography"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Videography
          </Link>
          <Link
            href="/Interests"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Interests
          </Link>
          <Link
            href="/Blog"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
