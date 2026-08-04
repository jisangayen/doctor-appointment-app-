import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import PatientCard from "../components/PatientCard";
import AddPatientModal from "../components/AddPatientModal";

const Profile = () => {
  const { userData, patients } = useContext(AppContext);

  const [showAddPatient, setShowAddPatient] = useState(false);

  const handleEdit = (patient) => {
  setSelectedPatient(patient);
  setShowAddPatient(true);
};

  const handleDelete = (id) => {
    console.log("Delete Patient", id);
    // Delete API
  };

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-96">
        <h2 className="text-lg text-gray-500">Loading...</h2>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8">

        {/* Account Card */}

        <div className="bg-white rounded-2xl shadow-md overflow-hidden">

          <div className="h-32 bg-primary"></div>

          <div className="px-8 pb-8">

            <div className="-mt-16 flex flex-col md:flex-row md:items-end gap-6">

              <img
                src={userData.image}
                alt={userData.name}
                className="w-32 h-32 rounded-full border-4 border-white object-cover"
              />

              <div className="flex-1">

                <h1 className="text-3xl font-bold">
                  {userData.name}
                </h1>

                <p className="text-gray-500">
                  {userData.email}
                </p>

              </div>

              <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90">
                Edit Profile
              </button>

            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-10">

              <div className="border rounded-xl p-5">

                <h3 className="font-semibold text-lg mb-4">
                  Account Information
                </h3>

                <div className="space-y-3">

                  <div>
                    <p className="text-gray-500 text-sm">
                      Name
                    </p>

                    <p>{userData.name}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Email
                    </p>

                    <p>{userData.email}</p>
                  </div>

                  <div>
                    <p className="text-gray-500 text-sm">
                      Phone
                    </p>

                    <p>{userData.phone}</p>
                  </div>

                </div>

              </div>

              <div className="border rounded-xl p-5">

                <h3 className="font-semibold text-lg mb-4">
                  Account Summary
                </h3>

                <div className="space-y-3">

                  <div className="flex justify-between">
                    <span>Total Patients</span>
                    <span className="font-semibold">
                      {patients.length}
                    </span>
                  </div>

                  <div className="flex justify-between">
                    <span>Appointments</span>
                    <span className="font-semibold">
                      --
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Patients */}

        <div className="mt-10">

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-2xl font-bold">
              My Patients
            </h2>

            <button
              onClick={() => setShowAddPatient(true)}
              className="bg-primary text-white px-5 py-3 rounded-lg hover:opacity-90"
            >
              + Add Patient
            </button>

          </div>

          {patients.length === 0 ? (
            <div className="bg-gray-50 border rounded-xl p-10 text-center">

              <h3 className="text-lg font-semibold">
                No Patients Added
              </h3>

              <p className="text-gray-500 mt-2">
                Add your first patient to book appointments.
              </p>

            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-6">

              {patients.map((patient) => (
                <PatientCard
                  key={patient._id}
                  patient={patient}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />
              ))}

            </div>
          )}

        </div>

      </div>

      <AddPatientModal
        isOpen={showAddPatient}
        onClose={() => setShowAddPatient(false)}
      />
    </>
  );
};

export default Profile;