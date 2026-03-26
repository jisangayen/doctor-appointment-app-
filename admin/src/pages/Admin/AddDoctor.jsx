import React, { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios"
import ScaleLoader
 from "react-spinners/ScaleLoader";

const AddDoctor = () => {
  const [docImg, SetDocImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState(1); 
  const [fees, setFees] = useState("");
  const [speciality, setSpeciality] = useState("General physician"); 
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [about, setAbout] = useState("");

  const [loading, setLoading] = useState(false); 

  const { backendUrl, aToken } = useContext(AdminContext);



  const onSubmitHandler = async (event) => {
    event.preventDefault()
    setLoading(true);

    try {
      if (!docImg) {
        setLoading(false);
        return toast.error("Please select doctor's image");
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience); 
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );




      const {data} = await axios.post(backendUrl + '/api/admin/add-doctor', formData, {headers:{aToken}});

      if(data.success){
        toast.success("Doctor added successfully");
        setName("");
        setEmail("");
        setPassword("");
        setExperience("");
        setFees("");
        setSpeciality("");
        setDegree("");
        setAddress1("");
        setAddress2("");
        setAbout("");
        SetDocImg(false);
      }else{
        toast.error(data.message);
       
      }
   

      
    } catch (error) {
      console.error(error);
      toast.error("Error occurred while adding doctor");
     
    } finally {
      setLoading(false);

    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="m-5 w-full">
      <p className="mb-3 text-lg font-medium text-gray-700">Add Doctor</p>
      <div className="bg-white px-8 py-8 border border-gray-200 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-y-scroll shadow-lg">
        <div className="flex items-center gap-4 mb-8 text-gray-500">
          <label htmlFor="doc-img">
            <img
              className="w-16 h-16 bg-gray-100 rounded-full cursor-pointer object-cover"
              src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
              alt="Doctor"
            />
          </label>
          <input
            onChange={(e) => SetDocImg(e.target.files[0])}
            type="file"
            id="doc-img"
            hidden
          />
          <p className="text-gray-600">
            Upload doctor <br />
            picture
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Doctor name</p>
              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                className="border rounded px-4 py-2"
                type="text"
                placeholder="Name"
                required
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Doctor email</p>
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email"
                required
                className="border rounded px-4 py-2"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Doctor Password</p>
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
                placeholder="Password"
                required
                className="border rounded px-4 py-2"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Experience</p>
              <select
                onChange={(e) => setExperience(e.target.value)}
                value={experience}
                required
                className="border rounded px-4 py-2"
              >
                <option value="1">1 Year</option>
                <option value="2">2 Year</option>
                <option value="3">3 Year</option>
                <option value="4">4 Year</option>
                <option value="5">5 Year</option>
                <option value="6">6 Year</option>
                <option value="7">7 Year</option>
                <option value="8">8 Year</option>
                <option value="9">9 Year</option>
                <option value="10">10+ Year</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Fees</p>
              <input
                onChange={(e) => setFees(e.target.value)}
                value={fees}
                type="number"
                placeholder="Fees"
                className="border rounded px-4 py-2"
              />
            </div>
          </div>

          <div className="w-full lg:flex-1 flex flex-col gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Speciality</p>
              <select
                onChange={(e) => setSpeciality(e.target.value)}
                value={speciality}
                required
                className="border rounded px-4 py-2"
              >
                <option value="General physician">General physician</option>
                <option value="Gynecologist">Gynecologist</option>
                <option value="Dermatologist">Dermatologist</option>
                <option value="Pediatricians">Pediatricians</option>
                <option value="Neurologist">Neurologist</option>
                <option value="Gastroenterologist">Gastroenterologist</option>
              </select>
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Education</p>
              <input
                onChange={(e) => setDegree(e.target.value)}
                value={degree}
                type="text"
                placeholder="Education"
                required
                className="border rounded px-4 py-2"
              />
            </div>

            <div className="flex-1 flex flex-col gap-1">
              <p className="mb-1 font-medium">Address</p>
              <input
                onChange={(e) => setAddress1(e.target.value)}
                value={address1}
                type="text"
                placeholder="Address 1"
                required
                className="border rounded px-4 py-2 mb-11"
              />
              <input
                onChange={(e) => setAddress2(e.target.value)}
                value={address2}
                type="text"
                placeholder="Address 2"
                required
                className="border rounded px-4 py-2"
              />
            </div>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-1">
          <p className="mb-2 mt-4 font-medium">About Doctor</p>
          <textarea
            onChange={(e) => setAbout(e.target.value)}
            value={about}
            name="#"
            id="#"
            placeholder="Write about doctor"
            rows={5}
            className="w-full px-4 pt-2 border rounded resize-none"
          ></textarea>
        </div>

        <button
          type="submit"
          className={`bg-primary px-10 py-3 mt-4 text-white rounded-xl hover:bg-[#374bff] transition duration-200 flex items-center justify-center ${
            loading ? "cursor-not-allowed opacity-100 bg-lime-600" : ""
          }`}
          disabled={loading}
           // Disable the button while loading
        >
          {loading ? (
            <ScaleLoader
              size={18} color="white" height={20} width={4} speedMultiplier={1.5}/>
          ) : (
            "Add Doctor"
          )}
        </button>
      </div>
    </form>
  );
};

export default AddDoctor;
