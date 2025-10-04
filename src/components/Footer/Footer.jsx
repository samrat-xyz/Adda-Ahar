import React from "react";
import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">🍽 আড্ডা আহার</h2>
          <p className="text-sm leading-relaxed">
            Discover delicious recipes, learn cooking tips, and explore a world
            of taste. Fresh ingredients, simple steps, amazing meals.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-amber-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-amber-400 transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-amber-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-amber-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Cumilla, Bangladesh</li>
            <li>📞 +880 1XXXXXXXX</li>
            <li>📧 support@AddaAhar.com</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-sky-400 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-500 transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} আড্ডা আহার. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
