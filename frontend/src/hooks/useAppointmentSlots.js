import { useEffect, useState } from "react";

const useAppointmentSlots = (docInfo) => {
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    if (!docInfo) return;

    const slots = [];
    const today = new Date();

    for (let i = 0; i < 14; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(today);
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      let timeSlots = [];

      if (i === 0) {
        currentDate.setHours(
          today.getHours() > 10 ? today.getHours() + 1 : 10
        );
        currentDate.setMinutes(today.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });

        const slotDate =
          currentDate.getDate() +
          "-" +
          (currentDate.getMonth() + 1) +
          "-" +
          currentDate.getFullYear();

        const isAvailable =
          !docInfo.slots_booked?.[slotDate]?.includes(formattedTime);

        if (isAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }

        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      slots.push(timeSlots);
    }

    setDocSlots(slots);
  }, [docInfo]);

  return {
    docSlots,
    slotIndex,
    setSlotIndex,
    slotTime,
    setSlotTime,
  };
};

export default useAppointmentSlots;