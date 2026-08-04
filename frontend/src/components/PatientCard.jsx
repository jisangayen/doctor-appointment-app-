import React from "react";
import { Pencil, Trash2, Phone, Calendar, User } from "lucide-react";

const PatientCard = ({
  patient,
  onEdit,
  onDelete,
  onSelect,
  selected = false,
}) => {
  return (
    <div
      onClick={() => onSelect && onSelect(patient)}
      className={`border rounded-xl p-5 transition-all cursor-pointer ${
        selected
          ? "border-primary bg-blue-50"
          : "border-gray-200 hover:border-primary hover:shadow-md"
      }`}
    >
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-4">

          <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold">
            {patient.name.charAt(0).toUpperCase()}
          </div>

          <div>
            <h2 className="text-lg font-semibold">
              {patient.name}
            </h2>

            <p className="text-sm text-gray-500">
              {patient.relation}
            </p>
          </div>

        </div>

        <div className="flex gap-3">

          {onEdit && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit(patient);
              }}
              className="text-blue-600 hover:text-blue-800"
            >
              <Pencil size={18} />
            </button>
          )}

          {onDelete && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(patient._id);
              }}
              className="text-red-500 hover:text-red-700"
            >
              <Trash2 size={18} />
            </button>
          )}

        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mt-5">

        <div className="flex items-center gap-2 text-gray-600">
          <User size={18} />
          <span>
            {patient.gender} • {patient.age} Years
          </span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Phone size={18} />
          <span>{patient.phone}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <Calendar size={18} />
          <span>{patient.dob || "Not Available"}</span>
        </div>

        <div className="text-gray-600">
          <span className="font-medium">
            Blood Group:
          </span>{" "}
          {patient.bloodGroup || "-"}
        </div>

      </div>

      {(patient.address?.line1 || patient.address?.line2) && (
        <div className="mt-4 border-t pt-4">
          <p className="text-sm text-gray-500">
            Address
          </p>

          <p className="text-gray-700">
            {patient.address?.line1}
          </p>

          <p className="text-gray-700">
            {patient.address?.line2}
          </p>
        </div>
      )}
    </div>
  );
};

export default PatientCard;