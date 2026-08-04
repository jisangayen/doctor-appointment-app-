import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const AddPatientModal = ({ isOpen, onClose }) => {
  const { backendUrl, token, getPatients } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    relation: "",
    gender: "",
    age: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
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
        toast.success("Patient added successfully");

        getPatients();

        setFormData({
          name: "",
          relation: "",
          gender: "",
          age: "",
        });

        onClose();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4">

      <div className="bg-white rounded-2xl w-full max-w-lg p-6">

        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold">
            Add Patient
          </h2>

          <button
            onClick={onClose}
            className="text-2xl"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <div>
            <label className="block mb-2 font-medium">
              Patient Name
            </label>

            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter patient name"
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">
              Relation
            </label>

            <select
              name="relation"
              value={formData.relation}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-primary"
            >
              <option value="">Select Relation</option>
              <option>Self</option>
              <option>Mother</option>
              <option>Father</option>
              <option>Brother</option>
              <option>Sister</option>
              <option>Son</option>
              <option>Daughter</option>
              <option>Spouse</option>
              <option>Other</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Gender
              </label>

              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-primary"
              >
                <option value="">Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Age
              </label>

              <input
                type="number"
                name="age"
                min="0"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                required
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-primary"
              />
            </div>

          </div>

          <div className="flex justify-end gap-3 pt-3">

            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border rounded-lg"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90"
            >
              Save Patient
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default AddPatientModal;