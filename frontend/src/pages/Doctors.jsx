import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false)
  const [activeSpeciality, setActiveSpeciality] = useState(speciality || ""); // Track the active speciality
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
          : `/doctors/${encodeURIComponent(spec)}`
      );
    }
  };
  const getSpecialityClass = (spec) => {
    return spec === activeSpeciality
    ? "bg-primary text-white cursor-pointer pl-4 py-2 pr-6 rounded text-sm sm:text-base sm:pl-6 sm:py-3 sm:pr-8"
    : "text-gray-600 hover:bg-gray-200 cursor-pointer pl-4 py-2 pr-6 rounded border border-gray-200 text-sm sm:text-base sm:pl-6 sm:py-3 sm:pr-8";
};
  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist.</p>
      <div className="flex flex-col sm:flex-row  items-start gap-5 mt-5">
      <button
          onClick={() => setShowFilter(!showFilter)}
          className="sm:hidden px-9 py-2 bg-primary text-white rounded-md"
        >
          {showFilter ? "Close Filters" : "Show Filters"}
        </button>

        <div className={`flex flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>

          <p
            onClick={() => handleNavigation("General physician")}
            className={getSpecialityClass("General physician")}
          >
            General physician
          </p>
          <p
            onClick={() => handleNavigation("Gynecologist")}
            className={getSpecialityClass("Gynecologist")}
          >
            Gynecologist
          </p>
          <p
            onClick={() => handleNavigation("Dermatologist")}
            className={getSpecialityClass("Dermatologist")}
          >
            Dermatologist
          </p>
          <p
            onClick={() => handleNavigation("Pediatricians")}
            className={getSpecialityClass("Pediatricians")}
          >
            Pediatricians
          </p>
          <p
            onClick={() => handleNavigation("Neurologist")}
            className={getSpecialityClass("Neurologist")}
          >
            Neurologist
          </p>
          <p
            onClick={() => handleNavigation("Gastroenterologist")}
            className={getSpecialityClass("Gastroenterologist")}
          >
            Gastroenterologist
          </p>
        </div>

        <div className="w-full grid grid-cols-auto gap-4 gap-y-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
              key={index}
            >
              <img className="bg-blue-300" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 rounded-full bg-green-500"></p>
                  <p>Available</p>
                </div>
                <p className="text-lg font-medium text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-600">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
