import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-4">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        {/* Left: Links */}
        <ul className="flex space-x-4 text-sm mb-4 sm:mb-0">
          <li>
            <a href="#home" className="hover:text-gray-900 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-900 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-gray-900 transition">
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-900 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right: Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center mt-4 text-xs text-gray-500">
        © 2024 Modern Footer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
