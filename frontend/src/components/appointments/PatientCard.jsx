import React from "react";

const PatientCard = ({
  patient,
  selected = false,
  onSelect,
  onEdit,
  onDelete,
  showActions = false,
}) => {
  return (
    <div
      onClick={() => onSelect && onSelect(patient)}
      className={`relative cursor-pointer rounded-xl border p-5 transition-all duration-300 ${
        selected
          ? "border-primary bg-blue-50 shadow-md"
          : "border-gray-200 hover:border-primary hover:shadow-md"
      }`}
    >
      {/* Selected Badge */}

      {selected && (
        <div className="absolute top-3 right-3">
          <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">
            ✓
          </div>
        </div>
      )}

      {/* Avatar */}

      <div className="flex items-center gap-4">

        <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-semibold">
          {patient.name.charAt(0).toUpperCase()}
        </div>

        <div>

          <h3 className="font-semibold text-lg">
            {patient.name}
          </h3>

          <p className="text-sm text-gray-500">
            {patient.relation}
          </p>

        </div>

      </div>

      {/* Patient Info */}

      <div className="mt-5 space-y-2 text-sm text-gray-600">

        <div className="flex justify-between">
          <span>Gender</span>
          <span className="font-medium">
            {patient.gender}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Age</span>
          <span className="font-medium">
            {patient.age} Years
          </span>
        </div>

      </div>

      {/* Actions */}

      {showActions && (
        <div className="flex gap-3 mt-6">

          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit(patient);
            }}
            className="flex-1 border border-primary text-primary py-2 rounded-lg hover:bg-primary hover:text-white transition"
          >
            Edit
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(patient._id);
            }}
            className="flex-1 border border-red-500 text-red-500 py-2 rounded-lg hover:bg-red-500 hover:text-white transition"
          >
            Delete
          </button>

        </div>
      )}
    </div>
  );
};

export default PatientCard;