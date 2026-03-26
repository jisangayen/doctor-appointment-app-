import React, { useState } from "react";

const defaultProfile = {
  name:        "Dr. Ananya Krishnan",
  specialty:   "Cardiologist",
  degree:      "MBBS, MD Cardiology",
  experience:  "14",
  about:       "Dr. Ananya Krishnan is a highly experienced cardiologist with over 14 years of expertise in diagnosing and treating cardiovascular diseases. She is known for her patient-centered approach and commitment to preventive care.",
  fees:        "60",
  email:       "ananya.krishnan@apollo.in",
  phone:       "+91 98450 12345",
  hospital:    "Apollo Hospitals, Bengaluru",
  address1:    "Bannerghatta Main Road",
  address2:    "Bengaluru, Karnataka 560076",
  available:   true,
  initials:    "AK",
};

const SPECIALTIES = [
  "General physician", "Gynecologist", "Dermatologist",
  "Pediatricians", "Neurologist", "Gastroenterologist", "Cardiologist",
];

const DoctorProfile = () => {
  const [profile, setProfile] = useState(defaultProfile);
  const [editing, setEditing] = useState(false);
  const [form,    setForm]    = useState(defaultProfile);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(f => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSave = () => {
    setProfile(form);
    setEditing(false);
  };

  const handleCancel = () => {
    setForm(profile);
    setEditing(false);
  };

  const data = editing ? form : profile;

  return (
    <div className="m-5 w-full max-w-4xl">

      {/* ── Top Card: Avatar + Basic Info ── */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden mb-5">

        {/* Coloured banner */}
        <div className="h-24 bg-gradient-to-r from-primary/10 to-primary/5" />

        <div className="px-6 pb-6">
          {/* Avatar */}
          <div className="flex items-end justify-between -mt-10 mb-4">
            <div className="w-20 h-20 rounded-full bg-primary/10 border-4 border-white shadow flex items-center justify-center text-2xl font-bold text-primary">
              {profile.initials}
            </div>

            {/* Edit / Save buttons */}
            {!editing ? (
              <button
                onClick={() => setEditing(true)}
                className="flex items-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg text-sm font-medium hover:bg-primary hover:text-white transition-colors"
              >
                ✏️ Edit Profile
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border border-gray-200 text-[#515151] rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  Save Changes
                </button>
              </div>
            )}
          </div>

          {/* Name & role */}
          {editing ? (
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="text-xl font-bold text-[#3d3d3d] border-b border-primary outline-none bg-transparent w-full mb-1"
            />
          ) : (
            <h2 className="text-xl font-bold text-[#3d3d3d]">{profile.name}</h2>
          )}

          <div className="flex flex-wrap items-center gap-3 mt-2">
            {/* Specialty */}
            {editing ? (
              <select
                name="specialty"
                value={form.specialty}
                onChange={handleChange}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-[#3d3d3d] outline-none focus:border-primary"
              >
                {SPECIALTIES.map(s => <option key={s}>{s}</option>)}
              </select>
            ) : (
              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                {profile.specialty}
              </span>
            )}

            {/* Degree */}
            {editing ? (
              <input
                name="degree"
                value={form.degree}
                onChange={handleChange}
                className="text-sm border border-gray-200 rounded-lg px-3 py-1.5 text-[#515151] outline-none focus:border-primary"
              />
            ) : (
              <span className="text-sm text-[#515151] bg-gray-100 px-3 py-1 rounded-full">
                {profile.degree}
              </span>
            )}

            {/* Experience */}
            <span className="text-sm text-[#515151] bg-gray-100 px-3 py-1 rounded-full flex items-center gap-1">
              {editing ? (
                <>
                  <input
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    className="w-10 border-b border-primary outline-none bg-transparent text-center text-[#3d3d3d]"
                  />
                  yrs exp
                </>
              ) : (
                `${profile.experience} yrs exp`
              )}
            </span>

            {/* Availability toggle */}
            <label className="flex items-center gap-2 cursor-pointer select-none ml-auto">
              <span className="text-sm text-[#515151]">Available</span>
              <div
                onClick={() => editing && setForm(f => ({ ...f, available: !f.available }))}
                className={`relative w-10 h-5 rounded-full transition-colors ${
                  data.available ? "bg-primary" : "bg-gray-300"
                } ${editing ? "cursor-pointer" : "cursor-default"}`}
              >
                <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full shadow transition-all ${
                  data.available ? "left-5" : "left-0.5"
                }`} />
              </div>
            </label>
          </div>
        </div>
      </div>

      {/* ── Details Grid ── */}
      <div className="grid sm:grid-cols-2 gap-5 mb-5">

        {/* Contact Info */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-semibold text-[#3d3d3d] uppercase tracking-wide mb-4 flex items-center gap-2">
            📞 Contact Information
          </h3>
          <div className="space-y-4">
            {[
              { label: "Email",    name: "email",    type: "email" },
              { label: "Phone",    name: "phone",    type: "tel"   },
              { label: "Hospital", name: "hospital", type: "text"  },
            ].map(f => (
              <div key={f.name}>
                <p className="text-xs text-[#515151] uppercase tracking-wide mb-1">{f.label}</p>
                {editing ? (
                  <input
                    name={f.name}
                    type={f.type}
                    value={form[f.name]}
                    onChange={handleChange}
                    className="w-full text-sm text-[#3d3d3d] border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-primary"
                  />
                ) : (
                  <p className="text-sm text-[#3d3d3d] font-medium">{profile[f.name]}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Address & Fees */}
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
          <h3 className="text-sm font-semibold text-[#3d3d3d] uppercase tracking-wide mb-4 flex items-center gap-2">
            📍 Address & Fees
          </h3>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-[#515151] uppercase tracking-wide mb-1">Address Line 1</p>
              {editing ? (
                <input
                  name="address1"
                  value={form.address1}
                  onChange={handleChange}
                  className="w-full text-sm text-[#3d3d3d] border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-primary"
                />
              ) : (
                <p className="text-sm text-[#3d3d3d] font-medium">{profile.address1}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-[#515151] uppercase tracking-wide mb-1">Address Line 2</p>
              {editing ? (
                <input
                  name="address2"
                  value={form.address2}
                  onChange={handleChange}
                  className="w-full text-sm text-[#3d3d3d] border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-primary"
                />
              ) : (
                <p className="text-sm text-[#3d3d3d] font-medium">{profile.address2}</p>
              )}
            </div>
            <div>
              <p className="text-xs text-[#515151] uppercase tracking-wide mb-1">Appointment Fees</p>
              {editing ? (
                <div className="flex items-center gap-1">
                  <span className="text-sm text-[#515151]">$</span>
                  <input
                    name="fees"
                    type="number"
                    value={form.fees}
                    onChange={handleChange}
                    className="w-full text-sm text-[#3d3d3d] border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-primary"
                  />
                </div>
              ) : (
                <p className="text-sm text-[#3d3d3d] font-semibold text-green-600">${profile.fees}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── About ── */}
      <div className="bg-white border border-gray-100 rounded-xl shadow-sm p-6">
        <h3 className="text-sm font-semibold text-[#3d3d3d] uppercase tracking-wide mb-4 flex items-center gap-2">
          🩺 About
        </h3>
        {editing ? (
          <textarea
            name="about"
            value={form.about}
            onChange={handleChange}
            rows={4}
            className="w-full text-sm text-[#3d3d3d] border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-primary resize-none leading-relaxed"
          />
        ) : (
          <p className="text-sm text-[#515151] leading-relaxed">{profile.about}</p>
        )}
      </div>

    </div>
  );
};

export default DoctorProfile;