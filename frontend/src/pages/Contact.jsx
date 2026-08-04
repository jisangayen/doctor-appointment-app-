import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      {/* Header - Simple & Spaced */}
      <div className="text-center mb-20">
        <h1 className="text-3xl font-light tracking-tight text-slate-800">
          CONTACT <span className="font-semibold text-slate-950 underline underline-offset-12 decoration-1 decoration-slate-200">US</span>
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-16 md:gap-24">
        
        {/* Visual Aspect - Clean border-radius */}
        <div className="w-full md:w-1/2">
          <img
            className="w-full max-w-md mx-auto rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
            src={assets.contact_image}
            alt="Office space"
          />
        </div>

        {/* Content Aspect - Organized by hierarchy */}
        <div className="w-full md:w-1/2 flex flex-col gap-10 text-sm md:text-base">
          
          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Our Office</h2>
            <div className="text-slate-600 leading-relaxed">
              <p>54709 Willms Station</p>
              <p>Suite 350, Washington, USA</p>
              <div className="mt-4">
                <p>Tel: <span className="text-slate-900">(415) 555-0132</span></p>
                <p>Email: <span className="text-slate-900 underline decoration-slate-200">hello@prescripto.com</span></p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xs uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Careers</h2>
            <p className="text-slate-600 mb-6">
              Always looking for talent to join our global teams.
            </p>
            <button className="group relative px-10 py-4 overflow-hidden border border-slate-900 bg-white text-slate-900 transition-all duration-300 hover:text-white">
              <span className="absolute inset-0 w-0 bg-slate-900 transition-all duration-300 ease-out group-hover:w-full"></span>
              <span className="relative">Explore Openings</span>
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Contact;