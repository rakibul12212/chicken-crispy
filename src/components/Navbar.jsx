/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import { FaShoppingBag } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = ({ cartCount, openSidebar }) => {
  return (
    <nav className="bg-red-100 py-2 px-10 flex justify-between items-center shadow sticky top-0 z-10">
      <div className="flex items-center space-x-4">
        <img
          src="https://i.ibb.co.com/rySsMfZ/download-Photoroom.png"
          alt="Logo"
          className="w-16 h-16 rounded-full"
        />
        <ul className="hidden md:flex space-x-6 text-lg font-medium">
          <li>Menu</li>
          <li>Rewards</li>
          <li>Locations</li>
          <li>Gift Cards</li>
          <li>Log In</li>
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <button
          className="relative"
          onClick={openSidebar} 
        >
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
    </nav>
  );
};

export default Navbar;
