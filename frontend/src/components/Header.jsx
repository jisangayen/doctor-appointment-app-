import React from "react";
import { assets } from "../assets/assets";

function Header() {
  return (
    <div className="flex flex-col md:flex-row bg-primary rounded-lg md:px-20 md:pt-20 pt-10">
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 md:py-10 w-full md:w-1/2">
        <p className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br />
          With Trusted Doctors
        </p>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 text-sm text-white">
          <img className="w-28" src={assets.group_profiles} alt="Group Profiles" /> {/* Group profiles image */}
          <p className="font-light">
            Simply browse through our extensive list of trusted doctors, <br className="hidden sm:block" />
            schedule your appointment hassle-free !
          </p> {/* Appointment description */}
        </div>

        <a
          href="#speciality"
          className="flex items-center gap-2 bg-white px-6 py-3 rounded-full text-gray-600 text-sm hover:scale-105 transition-transform duration-300"
        >
          Book appointment <img className="w-3" src={assets.arrow_icon} alt="Arrow Icon" /> {/* Book appointment button */}
        </a>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 relative">
        <img
          className="w-full h-auto md:max-w-full md:absolute bottom-0 rounded-lg"
          src={assets.header_img}
          alt="Header Image"
        /> {/* Right side image */}
      </div>
    </div>
  );
}

export default Header;
