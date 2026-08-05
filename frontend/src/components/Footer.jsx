import React from "react";
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="mt-28 border-t border-slate-200/80 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Brand & Mission Column */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div
                  onClick={() => navigate("./")}
                  className="inline-flex items-center cursor-pointer group select-none"
                >
                  <img
                    className="w-12  md:w-20 cursor-pointer md:ml-25"
                    src={assets.doclogo}
                    alt="Logo"
                  />
                  <p className="text-md sm:text-xl font-extrabold tracking-tight text-slate-900">
                    Clinic
                    <span className="text-primary">Go</span>
                  </p>
                </div>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed max-w-md">
                Connecting patients with top-tier certified medical specialists.
                Streamlining healthcare scheduling for families with clarity,
                efficiency, and trust.
              </p>
            </div>

            <p className="text-xs text-slate-400 mt-6 hidden lg:block">
              Providing accessible, quality healthcare scheduling since 2024.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-3 lg:col-span-3">
            <h3 className="text-sm font-serif font-bold text-slate-900 uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li>
                <Link
                  to="/"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-slate-900 transition-colors inline-block"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="md:col-span-3 lg:col-span-4">
            <h3 className="text-sm font-serif font-bold text-slate-900 uppercase tracking-wider mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-3 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-slate-400">Phone:</span>
                <a
                  href="tel:+91259865824"
                  className="hover:text-slate-900 transition-colors"
                >
                  +91 25986 58240
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-slate-400">Email:</span>
                <a
                  href="mailto:support@clinicgo.com"
                  className="hover:text-slate-900 transition-colors"
                >
                  support@clinicgo.com
                </a>
              </li>
              <li className="text-xs text-slate-500 pt-2 leading-snug">
                Mon – Sat: 8:00 AM – 8:00 PM EST
              </li>
            </ul>
          </div>
        </div>

        {/* Classic Divider & Copyright */}
        <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} ClinicGo. All rights reserved.
          </p>
          <div className="flex gap-6 text-slate-400">
            <a href="#terms" className="hover:text-slate-600 transition-colors">
              Terms of Service
            </a>
            <a
              href="#security"
              className="hover:text-slate-600 transition-colors"
            >
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
