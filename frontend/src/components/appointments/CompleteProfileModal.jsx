import React, { useContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../context/AppContext";

const CompleteProfileModal = ({ isOpen, onClose }) => {
  const { backendUrl, token, getPatients } = useContext(AppContext);

  const [formData, setFormData] = useState({
    name: "",
    relation: "Self",
    gender: "",
    age: "",
    phone: "",
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
        toast.success("Profile completed successfully.");

        getPatients();

        setFormData({
          name: "",
          relation: "Self",
          gender: "",
          age: "",
          phone: "",
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
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex justify-center items-center p-4">

      <div className="bg-white rounded-2xl w-full max-w-xl shadow-xl">

        <div className="flex justify-between items-center border-b p-6">

          <h2 className="text-2xl font-bold">
            Complete Your Profile
          </h2>

          <button
            onClick={onClose}
            className="text-2xl text-gray-500 hover:text-black"
          >
            ×
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="p-6 space-y-5"
        >

          <div>

            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-primary"
              placeholder="Enter your name"
            />

          </div>

          <div className="grid grid-cols-2 gap-4">

            <div>

              <label className="block mb-2 font-medium">
                Gender
              </label>

              <select
                name="gender"
                required
                value={formData.gender}
                onChange={handleChange}
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
                min="0"
                name="age"
                required
                value={formData.age}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 outline-none focus:border-primary"
                placeholder="Age"
              />

            </div>

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Mobile Number
            </label>

            <input
              type="tel"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 outline-none focus:border-primary"
              placeholder="Enter mobile number"
            />

          </div>

          <div>

            <label className="block mb-2 font-medium">
              Relation
            </label>

            <input
              type="text"
              value="Self"
              disabled
              className="w-full border rounded-lg px-4 py-3 bg-gray-100 text-gray-500"
            />

          </div>

          <div className="flex justify-end gap-3 pt-4">

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
              Save Profile
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default CompleteProfileModal;