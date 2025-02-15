import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { GiCrossedBones } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <h1 className="text-2xl font-bold">Brand</h1>

        {/* Hamburger Menu Button */}
        <div className="flex md:hidden">
          <button
            onClick={toggleMenu}
            className="focus:outline-none"
          >
            <span className="hamburger-icon">
              {isMenuOpen ? (
                <GiCrossedBones />
              ) : (
                <FaBarsStaggered />
              )}
            </span>
          </button>
        </div>

        {/* Menu */}
        <div className={`hidden w-full md:flex md:w-auto md:space-x-6 text-center md:text-left`}>
          <ul className="space-y-2 md:space-y-0 md:flex">
            <li className="hover:text-gray-200">
              <a href="#home" className="block px-4 py-2">
                Home
              </a>
            </li>
            <li className="hover:text-gray-200">
              <a href="#about" className="block px-4 py-2">
                About
              </a>
            </li>
            <li className="hover:text-gray-200">
              <a href="#services" className="block px-4 py-2">
                Services
              </a>
            </li>
            <li className="hover:text-gray-200">
              <a href="#contact" className="block px-4 py-2">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Mobile Screens */}
        {
          isMenuOpen && (
            <div className={`w-full h-screen flex justify-center items-center fixed top-14 bg-blue-500 left-0`}>
              <ul onClick={() => setIsMenuOpen(false)}>
                <li className="hover:text-gray-200">
                  <a href="#home" className="block px-4 py-2">
                    Home
                  </a>
                </li>
                <li className="hover:text-gray-200">
                  <a href="#about" className="block px-4 py-2">
                    About
                  </a>
                </li>
                <li className="hover:text-gray-200">
                  <a href="#services" className="block px-4 py-2">
                    Services
                  </a>
                </li>
                <li className="hover:text-gray-200">
                  <a href="#contact" className="block px-4 py-2">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          )
        }
      </div>
    </nav>
  );
};

export default Navbar;
