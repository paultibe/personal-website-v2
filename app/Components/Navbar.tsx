// import Link from next/link for navigation
import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Navbar links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className="text-white hover:text-gray-400">
            About
          </Link>
          <Link href="/Experience" className="text-white hover:text-gray-400">
            Experience
          </Link>
          <Link href="/Projects" className="text-white hover:text-gray-400">
            Projects
          </Link>
          <Link href="/Videography" className="text-white hover:text-gray-400">
            Videography
          </Link>
          <Link href="/Interests" className="text-white hover:text-gray-400">
            Interests
          </Link>
          <Link href="/Blog" className="text-white hover:text-gray-400">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
