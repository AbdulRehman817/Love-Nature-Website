import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="relative">
      {/* Navbar */}
      <div className="absolute top-0 left-0 w-full text-white z-10">
        <div className="flex justify-between items-center px-6 py-4 mt-[10px]">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/logo-white.svg"
              alt="Logo"
              className="h-10"
            />
          </div>

          {/* Menu */}
          <div className="mr-5 ">
            <ul className="flex space-x-4 justify-between gap-[20px]">
              <li>
                <Link to="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[white] border-[white] border-2 w-40 p-4 rounded-[4px]"
                >
                  202-555-0188
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Background Image */}
    </div>
  );
};

export default Navbar;
