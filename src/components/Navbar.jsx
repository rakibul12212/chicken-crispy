import React, { useState } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi"; // Hamburger and Close Icons

const Navbar = ({ cartCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-100 py-2 px-10 flex justify-between items-center shadow">
      <div className="flex items-center space-x-4">
        <img
          src="https://i.ibb.co.com/k20XXwh/download.png"
          alt="Logo"
          className="w-10 h-10 rounded-full"
        />

        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-6 text-lg font-medium absolute md:static top-16 left-0 w-full md:w-auto bg-red-100 md:bg-transparent p-4 md:p-0`}
        >
          <li className="py-2 md:py-0">Menu</li>
          <li className="py-2 md:py-0">Rewards</li>
          <li className="py-2 md:py-0">Locations</li>
          <li className="py-2 md:py-0">Gift Cards</li>
          <li className="py-2 md:py-0">Log In</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-4">
          <button className="relative">
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-sm px-1">
                {cartCount}
              </span>
            )}
            <FaShoppingBag className="w-8 h-6" />
          </button>
          <button className="bg-red-500 text-white px-4 py-1 rounded">
            Order Now
          </button>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <FiX className="w-8 h-8" />
          ) : (
            <FiMenu className="w-8 h-8" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;