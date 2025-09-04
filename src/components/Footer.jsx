import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import logo from "../assets/Fav.png"; // Assuming your transparent logo is named Fav.png

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="DevSites404 Logo"
                // 👇 UPDATED CLASSES HERE FOR MUCH BIGGER SIZE
                className="h-24 w-24 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-white to-blue-400 bg-clip-text text-transparent">
                DEVSITES404
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional web development company specializing in React
              applications and custom websites. Certified full-stack developer
              with 2-week turnaround.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Products & Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Services</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>• React Web Applications</li>
              <li>• Python 3 Backend Development</li>
              <li>• Database Setup & Management</li>
              <li>• Domain Registration & Setup</li>
              <li>• Custom Website Development</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  contact@devsites404.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-gray-300 text-sm">
                  Remote Development Services
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
            >
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 DEVSITES404. All rights reserved. Built with React & FastAPI.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;