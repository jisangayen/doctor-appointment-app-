import React from "react";

const AppointmentInfo = ({ item, slotdateFormat }) => {
  const { docData, patientData, slotDate, slotTime, amount } = item || {};

  return (
    <div className="flex flex-col sm:flex-row gap-5 flex-1 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      {/* Doctor Thumbnail */}
      <div className="relative shrink-0">
        <img
          src={docData?.image}
          alt={docData?.name || "Doctor"}
          className="w-28 h-28 sm:w-32 sm:h-32 bg-slate-100 rounded-xl object-cover object-top border border-slate-200/60"
        />
      
      </div>

      {/* Main Details */}
      <div className="flex-1 flex flex-col justify-between text-sm text-slate-600">
        <div>
          {/* Header & Specialty */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                {docData?.name}
              </h2>
              <span className="inline-block mt-0.5 px-2.5 py-0.5 text-xs font-medium text-primary bg-primary/10 rounded-full">
                {docData?.speciality}
              </span>
            </div>
          </div>

          {/* Patient Details Chip Badge */}
          {patientData && (
            <div className="mt-3.5 p-2.5 bg-slate-50 border border-slate-100 rounded-xl flex flex-wrap items-center gap-x-4 gap-y-1 text-xs">
              <p className="text-slate-900 font-semibold">
                Patient: <span className="text-slate-700 font-normal">{patientData.name || "Self"}</span>
              </p>
              {patientData.relation && (
                <p className="text-slate-500">
                  Relation: <span className="font-medium text-slate-700">{patientData.relation}</span>
                </p>
              )}
              {patientData.gender && (
                <p className="text-slate-500">
                  Gender: <span className="font-medium text-slate-700">{patientData.gender}</span>
                </p>
              )}
              {patientData.age && (
                <p className="text-slate-500">
                  Age: <span className="font-medium text-slate-700">{patientData.age} yrs</span>
                </p>
              )}
            </div>
          )}
        </div>

        {/* Footer Meta: Address & Schedule */}
        <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {/* Clinic Address */}
          <div>
            <span className="font-semibold text-slate-800 uppercase tracking-wider text-[10px] block mb-0.5">
              Clinic Location
            </span>
            <p className="text-slate-600 truncate">{docData?.address?.line1 || "Address unavailable"}</p>
            {docData?.address?.line2 && (
              <p className="text-slate-500 truncate">{docData.address.line2}</p>
            )}
          </div>

          {/* Date & Fee */}
          <div className="md:text-right">
            <span className="font-semibold text-slate-800 uppercase tracking-wider text-[10px] block mb-0.5">
              Slot & Payment
            </span>
            <p className="text-slate-900 font-semibold">
              {slotDate ? slotdateFormat(slotDate) : "--"} | {slotTime || "--"}
            </p>
            <p className="text-slate-500 mt-0.5">
              Consultation Fee: <span className="font-bold text-slate-900">₹{amount || docData?.fees}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentInfo;