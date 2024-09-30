import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">WiseCare</h3>
            <p className="text-gray-400">Providing innovative healthcare solutions.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-500 transition duration-300">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition duration-300">Our Services</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition duration-300">Contact</Link></li>
              <li><Link to="/careers" className="hover:text-orange-500 transition duration-300">Careers</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">123 Health Street</p>
            <p className="text-gray-400">Wellness City, WC 12345</p>
            <p className="text-gray-400">Phone: (123) 456-7890</p>
            <p className="text-gray-400">Email: info@wisecare.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-500 transition duration-300">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2024 WiseCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};