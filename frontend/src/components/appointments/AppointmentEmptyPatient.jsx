import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import { toast } from "react-toastify";

const AppointmentEmptyPatient = ({ onAddPatient }) => {
  const navigate = useNavigate();
  const { token } = useContext(AppContext);

  const handleAddPatient = () => {
    if (!token) {
      toast.warning("Please login to add a patient.");
      navigate("/login");
      return;
    }

    onAddPatient();
  };

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-2xl p-10 text-center bg-gray-50">
      <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center text-primary text-3xl">
        👤
      </div>

      <h2 className="mt-5 text-xl font-semibold text-gray-800">
        No Patient Found
      </h2>

      <p className="mt-2 text-gray-500 max-w-sm mx-auto">
        Add your first patient profile before booking an appointment with a doctor.
      </p>

      <button
        onClick={handleAddPatient}
        className="mt-6 bg-primary text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
      >
        + Add First Patient
      </button>
    </div>
  );
};

export default AppointmentEmptyPatient;