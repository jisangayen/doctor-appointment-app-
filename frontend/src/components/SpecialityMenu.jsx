import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";

function SpecialityMenu() {
  return (
    <section className="py-16 md:py-5 text-slate-800" id="speciality">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-3 text-center px-4 max-w-2xl mx-auto">
        <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3.5 py-1 rounded-full border border-primary/20">
          Medical Specialties
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          Find Doctor by Speciality
        </h2>
        <p className="text-slate-500 text-sm leading-relaxed">
          Simply browse through our extensive list of trusted specialties and schedule your appointment hassle-free.
        </p>
      </div>

      {/* Horizontal Speciality Slider */}
      <div className="flex items-center gap-4 sm:gap-6 overflow-x-auto pb-6 pt-2 px-6 sm:px-12 scrollbar-none snap-x snap-mandatory scroll-smooth max-w-7xl mx-auto justify-start sm:justify-center">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => window.scrollTo(0, 0)}
            className="snap-center shrink-0 group flex flex-col items-center justify-between w-28 sm:w-36 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-primary/40 shadow-xs hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 transition-all duration-300 select-none cursor-pointer"
          >
            {/* Image Glow Container */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-b from-blue-50/80 to-indigo-50/50 group-hover:from-primary/10 group-hover:to-primary/20 flex items-center justify-center transition-colors duration-300 mb-3">
              <img
                className="w-12 sm:w-14 h-12 sm:h-14 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-sm"
                src={item.image}
                alt={item.speciality}
              />
            </div>

            {/* Label */}
            <span className="text-xs sm:text-sm font-bold text-slate-700 group-hover:text-primary transition-colors text-center truncate w-full">
              {item.speciality}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SpecialityMenu;