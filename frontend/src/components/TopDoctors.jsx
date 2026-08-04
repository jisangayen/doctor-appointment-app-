import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <div className="flex flex-col items-center gap-4 my-12 md:my-16 text-slate-900 mx-4 sm:mx-10">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-2">
        <span className="text-xs font-bold text-primary uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
          Trusted Healthcare
        </span>
        <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight mt-2 text-slate-900">
          Top Doctors to Book
        </h1>
        <p className="text-sm sm:text-base text-slate-500 mt-2 leading-relaxed">
          Simply browse through our extensive list of trusted doctors and schedule your visit instantly.
        </p>
      </div>

      {/* Doctors Grid */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 pt-4">
        {doctors &&
          doctors.slice(0, 12).map((item, index) => (
            <div
              key={item._id || index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                window.scrollTo(0, 0);
              }}
              className="group relative bg-white border border-slate-200/80 rounded-2xl overflow-hidden cursor-pointer hover:border-slate-300 hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative aspect-[4/3] bg-gradient-to-b from-blue-50 to-indigo-50/60 overflow-hidden">
                <img
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
                  src={item.image}
                  alt={item.name}
                />

                {/* Available Status Pill Overlay */}
                <div className="absolute top-3 left-3 backdrop-blur-md bg-white/80 border border-white/60 px-2.5 py-1 rounded-full shadow-xs flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-semibold text-slate-700">Available</span>
                </div>
              </div>

              {/* Doctor Details */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-[11px] font-bold text-primary uppercase tracking-wider block">
                    {item.speciality}
                  </span>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors mt-0.5 truncate">
                    {item.name}
                  </h3>
                </div>

                {/* Action Link Footer */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-primary transition-colors">
                  <span>Book Appointment</span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 group-hover:bg-primary group-hover:text-white transition-all flex items-center justify-center text-sm">
                    →
                  </span>
                </div>
              </div>
            </div>
          ))}
      </div>

      {/* View All Button */}
      <button
        type="button"
        onClick={() => {
          navigate("/doctors");
          window.scrollTo(0, 0);
        }}
        className="mt-8 px-10 py-3.5 bg-slate-100 hover:bg-primary text-slate-700 hover:text-white font-semibold text-sm rounded-full shadow-xs transition-all duration-300 active:scale-95 cursor-pointer"
      >
        View All Doctors
      </button>
    </div>
  );
};

export default TopDoctors;