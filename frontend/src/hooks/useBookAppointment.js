import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useBookAppointment = ({
  backendUrl,
  token,
  docId,
  selectedPatient,
  slotTime,
  slotIndex,
  docSlots,
  getDoctorsData,
}) => {
  const navigate = useNavigate();

  const bookAppointment = async () => {
    if (!token) {
      toast.warning("Please login.");
      return navigate("/login");
    }

    if (!selectedPatient) {
      toast.warning("Please select a patient.");
      return;
    }

    if (!slotTime) {
      toast.warning("Please select a time slot.");
      return;
    }

    try {
      const date = docSlots[slotIndex][0].datetime;

      const slotDate =
        date.getDate() +
        "-" +
        (date.getMonth() + 1) +
        "-" +
        date.getFullYear();

      const { data } = await axios.post(
        backendUrl + "/api/user/book-appointment",
        {
          patientId: selectedPatient._id,
          docId,
          slotDate,
          slotTime,
        },
        {
          headers: {
            token,
          },
        }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return bookAppointment;
};

export default useBookAppointment;