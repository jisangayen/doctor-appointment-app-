import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [activeSpeciality, setActiveSpeciality] = useState(speciality || "");
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const handleNavigation = (spec) => {
    if (spec === activeSpeciality) {
      setActiveSpeciality("");
      navigate("/doctors");
    } else {
      setActiveSpeciality(spec);
      navigate(
        spec === "All Doctors"
          ? "/doctors"
          : `/doctors/${encodeURIComponent(spec)}`,
      );
    }
  };

  const getSpecialityClass = (spec) => {
    return spec === activeSpeciality
      ? "bg-primary text-white font-medium cursor-pointer px-4 py-2.5 rounded-xl text-sm transition-all shadow-sm shadow-primary/30 flex items-center justify-between"
      : "text-gray-600 bg-white hover:bg-gray-50 border border-gray-200 cursor-pointer px-4 py-2.5 rounded-xl text-sm font-medium transition-all hover:border-gray-300 flex items-center justify-between";
  };

  const specialtiesList = [
    "Generalphysician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
          Find Your Specialist
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-start gap-8">
        {/* Mobile Filter Toggle */}
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="sm:hidden w-full flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white font-medium rounded-xl shadow-md transition-all active:scale-95"
        >
          <span>{showFilter ? "Hide Filters" : "Filter by Specialty"}</span>
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${
              showFilter ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Specialty Filter Sidebar */}
        <div
          className={`w-full sm:w-64 flex-shrink-0 flex flex-col gap-2 text-sm ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-1 mb-1 hidden sm:block">
            Specialties
          </span>
          {specialtiesList.map((spec) => (
            <p
              key={spec}
              onClick={() => handleNavigation(spec)}
              className={getSpecialityClass(spec)}
            >
              <span>{spec}</span>
              {spec === activeSpeciality && (
                <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
              )}
            </p>
          ))}
        </div>

        {/* Doctors Grid Container */}
        <div className="w-full">
          {filterDoc.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-12 bg-gray-50 rounded-2xl border border-dashed border-gray-200 text-center">
              <p className="text-gray-500 font-medium">
                No doctors found for this specialty.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filterDoc.map((item, index) => (
                <div
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="group bg-white border border-gray-100 rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  key={index}
                >
                  {/* Doctor Image Container */}
                  <div className="relative bg-gradient-to-b from-blue-50 to-blue-100/60 overflow-hidden aspect-[4/3]">
                    {/* --- START: Available Overlay --- */}
                    <div className="absolute top-1 right-1 z-10 flex items-center gap-1.5 text-xs font-medium text-emerald-700 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                      </span>
                      <span>Available</span>
                    </div>
                    {/* --- END: Available Overlay --- */}

                    <img
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>

                  {/* Doctor Card Content */}
                  <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mt-0.5">
                      {item.speciality}
                    </p>

                    <div className="mt-4 pt-3 border-t border-gray-50 flex items-center justify-between text-xs font-semibold text-primary">
                      <span>Book Appointment</span>
                      <svg
                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
