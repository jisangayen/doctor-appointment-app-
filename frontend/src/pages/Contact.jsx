import React from "react";
import { assets } from "../assets/assets";

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8  text-slate-800">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-6">
        <h1 className="text-3xl sm:text-4xl font-light tracking-tight text-slate-800">
          CONTACT{" "}
          <span className="font-extrabold text-slate-900 relative">
            US
            <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/40 rounded-full" />
          </span>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Column: Glassmorphic Visual Card */}
        <div className="md:col-span-5 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-indigo-500/20 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500 pointer-events-none" />
          
          <div className="relative h-full rounded-3xl overflow-hidden border border-white/60 bg-white/70 backdrop-blur-md shadow-xl shadow-slate-200/50 p-3 flex flex-col justify-between">
            {/* Inner Image Frame */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] bg-slate-100">
              <img
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                src={assets.contact_image}
                alt="ClinicGo Office"
              />
              
              {/* Floating Top Badge */}
              <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/50 text-[11px] font-bold text-slate-800 shadow-xs">
                ClinicGo HQ
              </div>
            </div>

            {/* Card Footer Highlights */}
            <div className="mt-4 p-3 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Support Available 24/7
              </span>
              <span className="text-slate-400">HQ • Bengalore, IND</span>
            </div>
          </div>
        </div>

        {/* Right Column: Information Cards */}
        <div className="md:col-span-7 flex flex-col mt-10 gap-6">
          
          {/* Office Info Glass Card */}
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-primary" />
              Our Office
            </h2>

            <div className="text-slate-700 text-sm leading-relaxed mb-6 font-medium">
              <p className="text-base font-bold text-slate-900">54709 Willms Station</p>
              <p className="text-slate-500">257/258 Whitefield, Bengalore, IND</p>
            </div>

            {/* Contact Pills */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100">
              <a
                href="tel:4155550132"
                className="flex-1 bg-slate-50 hover:bg-primary/5 border border-slate-200/80 hover:border-primary/30 p-3 rounded-2xl flex items-center gap-3 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-primary flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-primary group-hover:text-white transition-colors">
                  📞
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Phone</p>
                  <p className="text-xs font-bold text-slate-800">(415) 555-0132</p>
                </div>
              </a>

              <a
                href="mailto:hello@prescripto.com"
                className="flex-1 bg-slate-50 hover:bg-primary/5 border border-slate-200/80 hover:border-primary/30 p-3 rounded-2xl flex items-center gap-3 transition-all group"
              >
                <div className="w-9 h-9 rounded-xl bg-white text-primary flex items-center justify-center font-bold text-base shadow-xs group-hover:bg-primary group-hover:text-white transition-colors">
                  ✉️
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-slate-400">Email</p>
                  <p className="text-xs font-bold text-slate-800 truncate">hello@prescripto.com</p>
                </div>
              </a>
            </div>
          </div>

          {/* Careers Section Glass Card */}
          <div className="bg-white/80 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-1">
                Careers at ClinicGo
              </h2>
              <h3 className="text-lg font-bold text-slate-900">
                Join Our Global Team
              </h3>
              <p className="text-slate-500 text-xs mt-1 max-w-sm">
                We are always looking for dynamic talent to help us build the future of healthcare.
              </p>
            </div>

            <button
              type="button"
              className="group shrink-0 bg-slate-900 hover:bg-primary text-white font-semibold text-xs px-6 py-3.5 rounded-2xl shadow-md transition-all duration-300 active:scale-95 flex items-center gap-2 cursor-pointer"
            >
              <span>Explore Openings</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;