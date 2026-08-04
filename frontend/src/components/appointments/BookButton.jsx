import React from "react";

const BookButton = ({
  onBook,
  disabled = false,
}) => {
  return (
    <button
      onClick={onBook}
      disabled={disabled}
      className={`mt-8 px-14 py-3 rounded-full text-white transition-all duration-300 ${
        disabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-primary hover:opacity-90"
      }`}
    >
      Book Appointment
    </button>
  );
};

export default BookButton;