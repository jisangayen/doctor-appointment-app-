import React from "react";

const TimeSlots = ({
  docSlots = [],
  slotIndex = 0,
  slotTime,
  setSlotTime,
}) => {
  const currentSlots = docSlots[slotIndex] || [];
  const hasTimeSlots = currentSlots.length > 0;

  return (
    <div className="mt-6">
      {/* Header with Slot Counter */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-bold text-slate-800 tracking-tight">
          Available Time Slots
        </h3>
        {hasTimeSlots && (
          <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
            {currentSlots.length} slots available
          </span>
        )}
      </div>

      {/* Time Chips Carousel */}
      <div className="flex gap-2.5 items-center w-full overflow-x-auto pb-2 pt-1 scrollbar-none snap-x snap-mandatory scroll-smooth">
        {hasTimeSlots ? (
          currentSlots.map((item, index) => {
            const isSelected = slotTime === item.time;

            return (
              <button
                key={index}
                type="button"
                onClick={() => setSlotTime && setSlotTime(item.time)}
                className={`snap-start shrink-0 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 select-none cursor-pointer active:scale-95 ${
                  isSelected
                    ? "bg-primary text-white shadow-sm shadow-primary/30 ring-2 ring-primary ring-offset-1"
                    : "bg-white border border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                {item.time}
              </button>
            );
          })
        ) : (
          <div className="w-full border border-dashed border-slate-200/80 rounded-xl p-4 text-center bg-slate-50/50">
            <p className="text-xs font-medium text-slate-400">
              No time slots available for this date.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimeSlots;