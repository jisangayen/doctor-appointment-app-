import React, { useState } from "react";

const mockAppointments = [
  { id: 1,  name: "Priya Sharma",  age: 28, date: "25 Jun 2025", time: "09:00 AM", initials: "PS", color: "bg-violet-100 text-violet-600", fees: "$40",  status: "pending"   },
  { id: 2,  name: "Arjun Mehta",   age: 34, date: "25 Jun 2025", time: "10:30 AM", initials: "AM", color: "bg-blue-100 text-blue-600",     fees: "$60",  status: "completed" },
  { id: 3,  name: "Lakshmi Rao",   age: 45, date: "25 Jun 2025", time: "12:00 PM", initials: "LR", color: "bg-green-100 text-green-600",   fees: "$40",  status: "pending"   },
  { id: 4,  name: "Rohan Verma",   age: 22, date: "26 Jun 2025", time: "02:15 PM", initials: "RV", color: "bg-red-100 text-red-500",       fees: "$80",  status: "cancelled" },
  { id: 5,  name: "Sneha Nair",    age: 31, date: "26 Jun 2025", time: "04:00 PM", initials: "SN", color: "bg-orange-100 text-orange-600", fees: "$40",  status: "pending"   },
  { id: 6,  name: "Karan Patel",   age: 52, date: "27 Jun 2025", time: "09:30 AM", initials: "KP", color: "bg-teal-100 text-teal-600",     fees: "$100", status: "pending"   },
  { id: 7,  name: "Meera Iyer",    age: 38, date: "27 Jun 2025", time: "11:00 AM", initials: "MI", color: "bg-pink-100 text-pink-600",     fees: "$60",  status: "completed" },
  { id: 8,  name: "Vivek Joshi",   age: 60, date: "28 Jun 2025", time: "03:30 PM", initials: "VJ", color: "bg-indigo-100 text-indigo-600", fees: "$80",  status: "cancelled" },
];

const FILTERS = ["All", "Pending", "Completed", "Cancelled"];

const DoctorAppointments = () => {
  const [list, setList]         = useState(mockAppointments);
  const [filter, setFilter]     = useState("All");
  const [search, setSearch]     = useState("");

  const cancel   = (id) => setList(l => l.map(a => a.id === id ? { ...a, status: "cancelled"  } : a));
  const complete = (id) => setList(l => l.map(a => a.id === id ? { ...a, status: "completed"  } : a));

  const visible = list.filter(a => {
    const matchFilter = filter === "All" || a.status === filter.toLowerCase();
    const matchSearch = a.name.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  // counts for badges
  const counts = {
    All:       list.length,
    Pending:   list.filter(a => a.status === "pending").length,
    Completed: list.filter(a => a.status === "completed").length,
    Cancelled: list.filter(a => a.status === "cancelled").length,
  };

  return (
    <div className="m-5 w-full">

      {/* ── Page Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
        <div>
          <h2 className="text-xl font-bold text-[#3d3d3d]">All Appointments</h2>
          <p className="text-sm text-[#515151] mt-0.5">{list.length} total bookings</p>
        </div>

        {/* Search */}
        <div className="relative">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
          <input
            type="text"
            placeholder="Search patient…"
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-primary w-56 text-[#3d3d3d] placeholder-gray-400"
          />
        </div>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="flex gap-2 mb-5 flex-wrap">
        {FILTERS.map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-medium transition-all border
              ${filter === f
                ? "bg-primary text-white border-primary shadow-sm"
                : "bg-white text-[#515151] border-gray-200 hover:border-primary hover:text-primary"
              }`}
          >
            {f}
            <span className={`text-xs rounded-full px-1.5 py-0.5 font-semibold
              ${filter === f ? "bg-white/20 text-white" : "bg-gray-100 text-[#515151]"}`}>
              {counts[f]}
            </span>
          </button>
        ))}
      </div>

      {/* ── Table ── */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">

        {/* Table Head */}
        <div className="hidden sm:grid grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 px-6 py-3 bg-gray-50 border-b border-gray-100 text-xs font-semibold text-[#515151] uppercase tracking-wide">
          <span>Patient</span>
          <span>Date & Time</span>
          <span>Fees</span>
          <span>Status</span>
          <span className="text-right">Action</span>
        </div>

        {/* Rows */}
        <div className="divide-y divide-gray-50">
          {visible.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-4xl mb-3">🗓️</p>
              <p className="text-[#515151] text-sm">No appointments found</p>
            </div>
          ) : (
            visible.map((item, index) => (
              <div
                key={item.id}
                className="grid sm:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-4 items-center px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                {/* Patient */}
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${item.color}`}>
                    {item.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#3d3d3d]">{item.name}</p>
                    <p className="text-xs text-[#515151]">{item.age} yrs</p>
                  </div>
                </div>

                {/* Date & Time */}
                <div>
                  <p className="text-sm text-[#3d3d3d] font-medium">{item.date}</p>
                  <p className="text-xs text-[#515151]">{item.time}</p>
                </div>

                {/* Fees */}
                <p className="text-sm font-semibold text-[#3d3d3d]">{item.fees}</p>

                {/* Status Badge */}
                <div>
                  {item.status === "completed" && (
                    <span className="text-xs font-medium text-green-600 bg-green-50 border border-green-100 rounded-full px-3 py-1">
                      Completed
                    </span>
                  )}
                  {item.status === "cancelled" && (
                    <span className="text-xs font-medium text-red-500 bg-red-50 border border-red-100 rounded-full px-3 py-1">
                      Cancelled
                    </span>
                  )}
                  {item.status === "pending" && (
                    <span className="text-xs font-medium text-yellow-600 bg-yellow-50 border border-yellow-100 rounded-full px-3 py-1">
                      Pending
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-1">
                  {item.status === "pending" ? (
                    <>
                      <button
                        onClick={() => cancel(item.id)}
                        title="Cancel appointment"
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors text-base font-bold"
                      >
                        ✕
                      </button>
                      <button
                        onClick={() => complete(item.id)}
                        title="Mark as completed"
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-green-50 text-gray-400 hover:text-green-500 transition-colors text-base font-bold"
                      >
                        ✓
                      </button>
                    </>
                  ) : (
                    <span className="text-xs text-gray-300 pr-2">—</span>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer count */}
        {visible.length > 0 && (
          <div className="px-6 py-3 bg-gray-50 border-t border-gray-100">
            <p className="text-xs text-[#515151]">
              Showing <span className="font-semibold text-[#3d3d3d]">{visible.length}</span> of{" "}
              <span className="font-semibold text-[#3d3d3d]">{list.length}</span> appointments
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DoctorAppointments;