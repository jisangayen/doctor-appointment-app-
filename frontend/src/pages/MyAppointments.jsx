import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

import AppointmentCard from "../components/myAppointments/AppointmentCard";
import AppointmentEmpty from "../components/myAppointments/AppointmentEmpty";
import CancelAppointmentModal from "../components/myAppointments/CancelAppointmentModal";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);

  const [appointments, setAppointments] = useState([]);
  const [cancelId, setCancelId] = useState(null);

  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotdateFormat = (slotDate) => {
    const dateArray = slotDate.split("-");

    return `${dateArray[0]} ${
      months[Number(dateArray[1])]
    } ${dateArray[2]}`;
  };

  const getUserAppointments = async () => {
    try {
      const { data } = await axios.get(
        backendUrl + "/api/user/appointments",
        {
          headers: { token },
        }
      );

      if (data.success) {
        setAppointments(data.appointments.reverse());
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const cancelAppointments = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        {
          headers: { token },
        }
      );

      if (data.success) {
        toast.success(data.message);

        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    } finally {
      setCancelId(null);
    }
  };

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  return (
    <div>

      <h2 className="pb-6 md:mt-12 text-xl font-semibold text-gray-800 border-b">
        My Appointments
      </h2>

      <div className="mt-6">

        {appointments.length > 0 ? (

          appointments.map((item) => (
            <AppointmentCard
              key={item._id}
              item={item}
              slotdateFormat={slotdateFormat}
              onCancel={setCancelId}
            />
          ))

        ) : (

          <AppointmentEmpty />

        )}

      </div>

      <CancelAppointmentModal
        isOpen={!!cancelId}
        onClose={() => setCancelId(null)}
        onConfirm={() => cancelAppointments(cancelId)}
      />

    </div>
  );
};

export default MyAppointments;