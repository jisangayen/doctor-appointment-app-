import React from "react";

const CancelAppointmentModal = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-xl animate-fadeIn">

        {/* Icon */}

        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 h-7 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 3C7.03 3 3 7.03 3 12s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9z"
            />
          </svg>

        </div>

        {/* Title */}

        <h2 className="text-xl font-semibold text-center text-gray-800">
          Cancel Appointment?
        </h2>

        {/* Description */}

        <p className="text-gray-500 text-center mt-2">
          Are you sure you want to cancel this appointment?
          <br />
          This action cannot be undone.
        </p>

        {/* Buttons */}

        <div className="flex gap-3 mt-6">

          <button
            onClick={onClose}
            className="flex-1 py-3 border border-gray-300 rounded-xl font-medium hover:bg-gray-100 transition"
          >
            Keep Appointment
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-3 bg-red-500 text-white rounded-xl font-medium hover:bg-red-600 transition"
          >
            Yes, Cancel
          </button>

        </div>

      </div>

    </div>
  );
};

export default CancelAppointmentModal;