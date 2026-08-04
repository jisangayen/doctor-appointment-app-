import React from "react";

const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

const BookingSlots = ({ docSlots = [], slotIndex, setSlotIndex }) => {
  const hasSlots = docSlots && docSlots.length > 0;

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-lg font-bold text-slate-900 tracking-tight">
          Booking Slots
        </h2>
        <span className="text-xs font-medium text-slate-400">
          Select Date
        </span>
      </div>

      {/* Date Carousel Container */}
      <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth">
        {hasSlots ? (
          docSlots.map((item, index) => {
            const isSelected = slotIndex === index;
            const slotDate = item[0]?.datetime;
            const dayName = slotDate ? daysOfWeek[slotDate.getDay()] : "";
            const dayNum = slotDate ? slotDate.getDate() : "";
            const monthName = slotDate ? months[slotDate.getMonth()] : "";

            return (
              <div
                key={index}
                onClick={() => setSlotIndex && setSlotIndex(index)}
                className={`snap-start min-w-[72px] sm:min-w-[80px] py-3.5 px-3 rounded-2xl text-center cursor-pointer transition-all duration-200 select-none flex flex-col items-center justify-center ${
                  isSelected
                    ? "bg-primary text-white shadow-md shadow-primary/25 ring-2 ring-primary ring-offset-2"
                    : "bg-white border border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {/* Day of Week */}
                <span
                  className={`text-[11px] font-bold tracking-wider uppercase ${
                    isSelected ? "text-white/80" : "text-slate-400"
                  }`}
                >
                  {dayName}
                </span>

                {/* Date Number */}
                <span className="text-lg font-extrabold my-0.5 leading-none">
                  {dayNum}
                </span>

                {/* Month Name */}
                <span
                  className={`text-[10px] font-semibold tracking-tight ${
                    isSelected ? "text-white/90" : "text-slate-500"
                  }`}
                >
                  {monthName}
                </span>
              </div>
            );
          })
        ) : (
          <div className="w-full border border-dashed border-slate-200/80 rounded-2xl p-6 text-center bg-slate-50/50">
            <p className="text-xs font-medium text-slate-400">
              No available dates found for booking.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingSlots;