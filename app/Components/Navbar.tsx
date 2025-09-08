"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const NavBar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav className="absolute top-5 right-20 g-transparent p-4 z-10">
      <div className="container flex justify-between items-center flex-wrap space-x-96">
        <div className="flex items-center space-x-10 flex-wrap justify-center w-full md:w-auto ">
          <Link
            href="/"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Home
          </Link>
          <a
            href="https://garden.paultiberghien.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              isHome
                ? "text-white hover:text-gray-400"
                : "text-gray-800 hover:text-gray-600"
            }`}
          >
            Garden
          </a>
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
