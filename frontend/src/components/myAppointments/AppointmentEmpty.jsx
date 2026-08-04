import React from "react";
import { useNavigate } from "react-router-dom";

const AppointmentEmpty = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center">

      <img
        src="https://cdn-icons-png.flaticon.com/512/4076/4076478.png"
        alt="No Appointments"
        className="w-32 h-32 mb-6 opacity-90"
      />

      <h2 className="text-2xl font-bold text-gray-800">
        No Appointments Yet
      </h2>

      <p className="text-gray-500 mt-3 max-w-md">
        You haven't booked any appointments yet.
        Browse our doctors and schedule your first consultation.
      </p>

      <button
        onClick={() => navigate("/doctors")}
        className="mt-8 bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition"
      >
        Book Appointment
      </button>

    </div>
  );
};

export default AppointmentEmpty;