import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

const AddPatientModal = ({ isOpen, onClose }) => {
  const { backendUrl, token, getPatients } = useContext(AppContext);

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    age: "",
    gender: "",
    dob: "",
    phone: "",
    bloodGroup: "",
    address: {
      line1: "",
      line2: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "line1" || name === "line2") {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const { data } = await axios.post(
        backendUrl + "/api/patient/add",
        formData,
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        toast.success("Patient added successfully.");

        await getPatients();

        setFormData({
          name: "",
          relation: "",
          age: "",
          gender: "",
          dob: "",
          phone: "",
          bloodGroup: "",
          address: {
            line1: "",
            line2: "",
          },
        });

        onClose();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">

      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl">

        <div className="flex justify-between items-center border-b px-6 py-4">
          <h2 className="text-2xl font-semibold">
            Add New Patient
          </h2>

          <button
            onClick={onClose}
            className="text-2xl hover:text-red-500"
          >
            ×
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">

          <div className="grid md:grid-cols-2 gap-4">

            <div>
              <label>Name</label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

            <div>
              <label>Relation</label>

              <select
                name="relation"
                required
                value={formData.relation}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              >
                <option value="">Select Relation</option>
                <option>Mother</option>
                <option>Father</option>
                <option>Brother</option>
                <option>Sister</option>
                <option>Wife</option>
                <option>Husband</option>
                <option>Son</option>
                <option>Daughter</option>
                <option>Friend</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label>Age</label>

              <input
                type="number"
                required
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

            <div>
              <label>Gender</label>

              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label>Date of Birth</label>

              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

            <div>
              <label>Phone</label>

              <input
                type="text"
                required
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

            <div>
              <label>Blood Group</label>

              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              >
                <option value="">Select</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>

            <div>
              <label>Address Line 1</label>

              <input
                type="text"
                name="line1"
                value={formData.address.line1}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

            <div>
              <label>Address Line 2</label>

              <input
                type="text"
                name="line2"
                value={formData.address.line2}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 mt-1"
              />
            </div>

          </div>

          <button
            disabled={loading}
            className="w-full bg-primary text-white py-3 rounded-lg hover:opacity-90"
          >
            {loading ? "Saving..." : "Add Patient"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddPatientModal;