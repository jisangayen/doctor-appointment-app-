import React from "react";
import AppointmentInfo from "./AppointmentInfo";
import AppointmentActions from "./AppointmentActions";

const AppointmentCard = ({
  item,
  slotdateFormat,
  onCancel,
}) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-6 py-6 border-b">

      {/* Appointment Information */}
      <AppointmentInfo
        item={item}
        slotdateFormat={slotdateFormat}
      />

      {/* Action Buttons */}
      <AppointmentActions
        item={item}
        onCancel={onCancel}
      />

    </div>
  );
};

export default AppointmentCard;