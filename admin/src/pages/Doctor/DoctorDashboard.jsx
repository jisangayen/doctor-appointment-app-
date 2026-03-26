import React, { useState } from "react";

const stats = [
  { label: "TOTAL EARNINGS", value: "$2,450", change: "+12.5%", color: "text-emerald-700", bg: "bg-emerald-50", border: "border-emerald-100" },
  { label: "APPOINTMENTS", value: "128", change: "+4.2%", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-100" },
  { label: "NEW PATIENTS", value: "74", change: "+18.0%", color: "text-violet-700", bg: "bg-violet-50", border: "border-violet-100" },
];

const initialAppointments = [
  { id: 1, name: "Priya Sharma", date: "25 Jun 2025", time: "09:00 AM", initials: "PS", theme: "bg-violet-100 text-violet-700", status: "pending" },
  { id: 2, name: "Arjun Mehta", date: "25 Jun 2025", time: "10:30 AM", initials: "AM", theme: "bg-blue-100 text-blue-700", status: "completed" },
  { id: 3, name: "Lakshmi Rao", date: "25 Jun 2025", time: "12:00 PM", initials: "LR", theme: "bg-emerald-100 text-emerald-700", status: "pending" },
  { id: 4, name: "Rohan Verma", date: "26 Jun 2025", time: "02:15 PM", initials: "RV", theme: "bg-rose-100 text-rose-700", status: "cancelled" },
];

const DoctorDashboard = () => {
  const [list, setList] = useState(initialAppointments);

  const updateStatus = (id, newStatus) => {
    setList(prev => prev.map(item => item.id === id ? { ...item, status: newStatus } : item));
  };

  return (
    <div className="p-8 bg-gray-50 min-h-screen w-full font-sans antialiased">
      {/* Header */}
      <div className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-light text-slate-900 tracking-tight">Overview</h1>
          <p className="text-slate-500 text-sm mt-1 uppercase tracking-wider font-medium">Dr. Smith • Hospital Wing A</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-slate-400 font-bold uppercase">Current Date</p>
          <p className="text-sm font-semibold text-slate-700">March 26, 2026</p>
        </div>
      </div>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((s, i) => (
          <div key={i} className={`bg-white p-6 rounded-lg border-l-4 ${s.border} shadow-sm transition-transform hover:-translate-y-1`}>
            <p className="text-[10px] font-black text-slate-400 tracking-widest mb-1">{s.label}</p>
            <div className="flex items-baseline gap-3">
              <h3 className="text-3xl font-bold text-slate-800">{s.value}</h3>
              <span className={`text-xs font-bold ${s.color}`}>{s.change}</span>
            </div>
          </div>
        ))}
      </div>

      {/* ── Latest Bookings Table ── */}
      <div className="bg-white border border-slate-200 rounded-lg shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-100 flex justify-between items-center bg-white">
          <h2 className="text-sm font-black text-slate-800 uppercase tracking-tighter">Latest Bookings</h2>
          <button className="text-xs font-bold text-slate-400 hover:text-indigo-600 transition-colors">EXPORT DATA</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50">
                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Patient Details</th>
                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Schedule</th>
                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</th>
                <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {list.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded flex items-center justify-center font-bold text-xs ${item.theme}`}>
                        {item.initials}
                      </div>
                      <span className="font-bold text-slate-700 text-sm">{item.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-slate-600 font-medium">{item.date}</div>
                    <div className="text-[11px] text-slate-400 font-bold uppercase">{item.time}</div>
                  </td>
                  <td className="px-6 py-4">
                    <StatusTag status={item.status} />
                  </td>
                  <td className="px-6 py-4 text-right">
                    {item.status === "pending" ? (
                      <div className="flex justify-end gap-3">
                        <button 
                          onClick={() => updateStatus(item.id, 'cancelled')}
                          className="text-[10px] font-black text-rose-500 hover:underline tracking-widest"
                        >
                          CANCEL
                        </button>
                        <button 
                          onClick={() => updateStatus(item.id, 'completed')}
                          className="text-[10px] font-black text-emerald-600 hover:underline tracking-widest"
                        >
                          COMPLETE
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] font-bold text-slate-300 tracking-widest cursor-default">ARCHIVED</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Simplified status labels (No icons)
const StatusTag = ({ status }) => {
  const styles = {
    pending: "text-amber-600",
    completed: "text-emerald-600",
    cancelled: "text-rose-600",
  };

  return (
    <div className="flex items-center gap-2">
      <div className={`w-1.5 h-1.5 rounded-full ${status === 'pending' ? 'bg-amber-400' : status === 'completed' ? 'bg-emerald-400' : 'bg-rose-400'}`} />
      <span className={`text-[10px] font-black uppercase tracking-widest ${styles[status]}`}>
        {status}
      </span>
    </div>
  );
};

export default DoctorDashboard;