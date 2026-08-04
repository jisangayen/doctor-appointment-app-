import React from "react";

const PatientSelector = ({
  patients = [],
  selectedPatient,
  setSelectedPatient,
  onAddPatient,
}) => {
  const hasPatients = patients && patients.length > 0;

  return (
    <div className="sm:ml-72 sm:pl-4 mt-8">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 tracking-tight">
            Appointment For
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Select who will be seeing the doctor
          </p>
        </div>

        <button
          type="button"
          onClick={onAddPatient}
          className="text-xs font-semibold text-primary bg-primary/10 hover:bg-primary/20 px-3 py-1.5 rounded-lg transition-all active:scale-95 flex items-center gap-1 cursor-pointer"
        >
          <span>+ Add Patient</span>
        </button>
      </div>

      {/* HORIZONTAL SLIDER CONTAINER */}
      <div className="flex gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth">
        {hasPatients &&
          patients.map((patient) => {
            const isSelected = selectedPatient?._id === patient._id;
            const initial = patient?.name
              ? patient.name.charAt(0).toUpperCase()
              : "?";

            return (
              <div
                key={patient._id || patient.id}
                onClick={() => setSelectedPatient && setSelectedPatient(patient)}
                className={`snap-start w-60 sm:w-64 shrink-0 relative cursor-pointer rounded-2xl border p-4 transition-all duration-200 flex items-center justify-between select-none ${
                  isSelected
                    ? "border-primary bg-primary/[0.03] ring-2 ring-primary shadow-sm"
                    : "border-slate-200/80 bg-white hover:border-slate-300 hover:shadow-md"
                }`}
              >
                <div className="flex items-center gap-3 pr-4 truncate">
                  {/* Avatar */}
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-indigo-600 text-white flex items-center justify-center font-bold text-sm shadow-sm shadow-primary/20 shrink-0">
                    {initial}
                  </div>

                  {/* Details */}
                  <div className="truncate">
                    <h3 className="font-bold text-slate-900 text-sm leading-tight truncate">
                      {patient.name}
                    </h3>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <span className="text-xs font-medium text-slate-500">
                        {patient.relation || "Self"}
                      </span>
                      {patient.age && (
                        <span className="text-[10px] text-slate-400">
                          • {patient.age} yrs
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Selected Indicator Checkmark */}
                <div
                  className={`w-5 h-5 rounded-full border flex items-center justify-center text-[10px] font-bold transition-all shrink-0 ${
                    isSelected
                      ? "border-primary bg-primary text-white shadow-xs"
                      : "border-slate-300 bg-slate-50 text-transparent"
                  }`}
                >
                  ✓
                </div>
              </div>
            );
          })}

        {/* ADD PATIENT CARD AT END OF SLIDER */}
        <div
          onClick={onAddPatient}
          className="snap-start w-48 shrink-0 group cursor-pointer border-2 border-dashed border-primary/40 hover:border-primary rounded-2xl p-4 flex items-center justify-center gap-2 bg-primary/[0.01] hover:bg-primary/[0.04] transition-all active:scale-[0.98] select-none"
        >
          <div className="w-7 h-7 rounded-lg bg-primary/10 group-hover:bg-primary text-primary group-hover:text-white flex items-center justify-center text-base font-bold transition-colors">
            +
          </div>
          <span className="font-semibold text-xs text-primary">
            Add Patient
          </span>
        </div>
      </div>
    </div>
  );
};

export default PatientSelector;