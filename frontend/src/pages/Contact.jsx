import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          CONTACT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.contact_image}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6 ">
          <b className="font-semibold text-lg text-gray-600">Our OFFICE</b>
          <p className="text-gray-500">
            54709 Willms Station <br />
            Suite 350, Washington, USA
          </p>

          <p className="text-gray-500">
            Tel: (415) 5550132 <br />
            Email: greatstackdev@gmail.com
          </p>

          <b className="text-gray-600 font-semibold text-lg">Careers at PRESCRIPTO</b>

          <p className="text-gray-500">Learn more about our teams and job openings</p>

          <button className="sm:w-auto px-8 py-4 bg-primary text-white font-medium  border border-primary hover:bg-white hover:text-primary hover:border-primary transition-colors duration-300 ease-in-out text-sm">
            Explore Jobs
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
