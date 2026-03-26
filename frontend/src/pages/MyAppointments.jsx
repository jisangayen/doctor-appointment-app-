import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const MyAppointments = () => {
  const { backendUrl,token,getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([])
  const months  = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const slotdateFormat = (slotDate) =>{
    const dateArray = slotDate.split('-');
    return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]

  }

  const getUserAppointments = async () => {
    try {
      
      const {data} = await axios.get(backendUrl + '/api/user/appointments', {headers:{token}})

       if (data.success) {
        setAppointments(data.appointments.reverse());
        console.log(data.appointments)
       }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelAppointments = async (appointmentId) => {
    try {
      const {data} = await axios.post(backendUrl + '/api/user/cancel-appointment', {appointmentId}, {headers:{token}})

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData()
      } else {
        toast.error(data.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if (token){
      getUserAppointments()
    }
  }, [token]);


  return (
    <div>
      <p className="pb-6 md:mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>
      <div>
        {appointments.length > 0 ? (
          appointments.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between gap-6 py-4 border-b"
            >
              <div className="flex gap-4 flex-1">
                <img
                  src={item.docData.image}
                  alt=""
                  className="w-32 bg-indigo-200 rounded"
                />
                <div className="text-sm text-zinc-600 pl-2">
                  <p className="text-neutral-800 font-semibold">
                    {item.docData.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {item.docData.speciality}
                  </p>
                  <p className="mt-1 font-medium text-zinc-700">Address:</p>
                  <p className="text-xs">{item.docData.address.line1}</p>
                  <p className="text-xs">{item.docData.address.line2}</p>
                  <p className="mt-4">
                    <span className="font-medium">Date & Time:</span>
                    {item.slotDate} | {item.slotTime}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center gap-2 sm:items-end items-start">
                {!item.cancelled && <button className="text-sm text-stone-500 text-center w-full sm:w-auto sm:min-w-48 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300">
                  Pay Online
                </button>}
                {!item.cancelled && <button onClick={()=> cancelAppointments(item._id)} className="text-sm text-stone-500 text-center w-full sm:w-auto sm:min-w-48 py-2 border rounded hover:bg-red-500 hover:text-white transition-all duration-300">
                  Cancel appointment
                </button>}
                {item.cancelled && <button className="sm:min-w-48 py-2 border border-red-500 rounded text-red-500">Appointment cancelled</button>}
              </div>
            </div>
          ))
        ) : (
          <p className="text-lg py-4 ">No appointments available</p>
        )}
      </div>
    </div>
  );
};


export default MyAppointments;
