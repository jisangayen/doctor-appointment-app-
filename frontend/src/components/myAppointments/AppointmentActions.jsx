import React from "react";

const AppointmentActions = ({ item, onCancel, onPay }) => {
  const isCancelled = item?.cancelled;
  const isCompleted = item?.isCompleted;
  const isPaid = item?.isPaid;

  return (
    <div className="flex flex-col justify-center gap-2.5 sm:items-end items-stretch w-full sm:w-auto shrink-0 p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
      {isCancelled ? (
        <div className="w-full sm:w-48 py-2.5 px-4 bg-rose-50 border border-rose-200/80 rounded-xl flex items-center justify-center gap-2 text-rose-600 text-xs font-semibold select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-rose-500"></span>
          <span>Appointment Cancelled</span>
        </div>
      ) : isCompleted ? (
        <div className="w-full sm:w-48 py-2.5 px-4 bg-emerald-50 border border-emerald-200/80 rounded-xl flex items-center justify-center gap-2 text-emerald-700 text-xs font-semibold select-none">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span>Appointment Completed</span>
        </div>
      ) : (
        <>
          {/* Pay Online / Paid Button */}
          {isPaid ? (
            <div className="w-full sm:w-48 py-2.5 px-4 bg-slate-100 border border-slate-200 rounded-xl flex items-center justify-center text-slate-600 text-xs font-semibold select-none">
              Paid Online ✓
            </div>
          ) : (
            <button
              type="button"
              onClick={() => onPay && onPay(item._id)}
              className="w-full sm:w-48 py-2.5 px-4 bg-primary text-white hover:bg-primary/90 rounded-xl text-xs font-semibold shadow-sm shadow-primary/20 transition-all active:scale-[0.98] cursor-pointer"
            >
              Pay Online
            </button>
          )}

          {/* Cancel Appointment Button */}
          <button
            type="button"
            onClick={() => onCancel && onCancel(item._id)}
            className="w-full sm:w-48 py-2.5 px-4 bg-white hover:bg-rose-50 text-slate-600 hover:text-rose-600 border border-slate-200 hover:border-rose-200 rounded-xl text-xs font-semibold transition-all active:scale-[0.98] cursor-pointer"
          >
            Cancel Appointment
          </button>
        </>
      )}
    </div>
  );
};

export default AppointmentActions;