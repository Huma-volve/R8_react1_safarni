import { Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="bg-white mb-5 w-[90%] mx-auto">
      <div className="max-w-7xl mx-auto px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center">
            <div className="w-20 h-20">
              <img
                className="w-full h-full"
                src="/logo.png"
                alt="logo"
              />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 text-[20px] font-semibold">
            <a href="/" className="text-blue-800 font-medium hover:text-blue-600 transition">
              Home
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Favorite
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Compare
            </a>
            <a href="#" className="hover:text-blue-600 transition">
              Maps
            </a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">

            <button className="p-2 hover:bg-gray-100 rounded-full transition">
              <Search className="w-5 h-5 text-gray-600" />
            </button>

            {/* Sliders icon (all screens) */}
            <button
              className="p-2 hover:bg-gray-100 rounded-full transition"
              onClick={() => setOpenMenu(!openMenu)}
            >
              <SlidersHorizontal className="w-5 h-5 text-gray-600" />
            </button>

            {/* User Avatar */}
            <button className="relative">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img
                  src="src/assets/Avatar.png"
                  alt="User"
                  className="w-full h-full object-cover"
                />
              </div>
            </button>

          </div>
        </div>

        {/* Mobile Menu (links only on small screens) */}
        {openMenu && (
          <div className="md:hidden w-full mt-4 bg-white shadow-lg rounded-xl">
            <div className="flex justify-around py-4 text-lg font-medium">
              <a href="/" onClick={() => setOpenMenu(false)} className="text-blue-800">Home</a>
              <a href="#" onClick={() => setOpenMenu(false)}>Favorite</a>
              <a href="#" onClick={() => setOpenMenu(false)}>Compare</a>
              <a href="#" onClick={() => setOpenMenu(false)}>Maps</a>
            </div>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
