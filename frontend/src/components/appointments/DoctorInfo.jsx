import React from "react";
import { assets } from "../../assets/assets";

const DoctorInfo = ({ docInfo, currencySymbol }) => {
  if (!docInfo) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-6 items-stretch">
      {/* Doctor Image Container */}
      <div className="relative shrink-0 rounded-2xl overflow-hidden bg-gradient-to-b from-blue-50 to-indigo-100/60 border border-slate-200/80 shadow-sm sm:max-w-72 w-full">
        <img
          src={docInfo.image}
          alt={docInfo.name}
          className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500 ease-out"
        />
      </div>

      {/* Doctor Info Details Card */}
      <div className="flex-1 bg-white border border-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col justify-between -mt-12 sm:mt-0 relative z-10 mx-2 sm:mx-0">
        <div>
          {/* Doctor Header & Verification */}
          <div className="flex items-center gap-2 flex-wrap">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              {docInfo.name}
            </h1>
            <img
              src={assets.verified_icon}
              alt="Verified"
              className="w-5 h-5 shrink-0"
            />
          </div>

          {/* Specialty & Degree */}
          <div className="flex items-center gap-3 mt-2 text-sm text-slate-600 flex-wrap">
            <p className="font-medium text-slate-700">
              {docInfo.degree} <span className="text-slate-300 mx-1">•</span> {docInfo.speciality}
            </p>
            <span className="px-3 py-0.5 text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200/80 rounded-full">
              {docInfo.experience}
            </span>
          </div>

          {/* About Section */}
          <div className="mt-6 pt-5 border-t border-slate-100">
            <p className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
              <span>About Doctor</span>
              <img src={assets.info_icon} alt="Info" className="w-3.5 h-3.5 opacity-60" />
            </p>
            <p className="text-slate-600 text-sm mt-2 leading-relaxed max-w-2xl">
              {docInfo.about}
            </p>
          </div>
        </div>

        {/* Consultation Fee Highlight Card */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between bg-slate-50/80 p-4 rounded-xl border border-slate-100">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
            Appointment Fee
          </span>
          <span className="text-xl font-extrabold text-primary">
            {currencySymbol}{docInfo.fees}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;