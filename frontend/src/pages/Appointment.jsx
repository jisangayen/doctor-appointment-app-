import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../context/AppContext";

import DoctorInfo from "../components/appointments/DoctorInfo";
import PatientSelector from "../components/appointments/PatientSelector";
import BookingSlots from "../components/appointments/BookingSlots";
import TimeSlots from "../components/appointments/TimeSlots";
import BookButton from "../components/appointments/BookButton";

import AddPatientModal from "../components/AddPatientModal";
import CompleteProfileModal from "../components/CompleteProfileModal";
import RelatedDoctors from "../components/RelatedDoctors";

import useAppointmentSlots from "../hooks/useAppointmentSlots";
import useBookAppointment from "../hooks/useBookAppointment";

const Appointment = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const handleAddPatient = () => {
    if (!token) {
      toast.warning("Please login first.");
      navigate("/login");
      return;
    }

    if (patients.length === 0) {
      setShowCompleteProfile(true);
    } else {
      setShowAddPatient(true);
    }
  };

  const {
    doctors,
    patients,
    currencySymbol,
    backendUrl,
    token,
    getDoctorsData,
  } = useContext(AppContext);

  const [docInfo, setDocInfo] = useState(null);
  const [selectedPatient, setSelectedPatient] = useState(null);

  const [showAddPatient, setShowAddPatient] = useState(false);
  const [showCompleteProfile, setShowCompleteProfile] = useState(false);

  useEffect(() => {
    if (patients.length > 0 && !selectedPatient) {
      setSelectedPatient(patients[0]);
    }
  }, [patients]);

  useEffect(() => {
    const doctor = doctors.find((item) => item._id === docId);

    if (doctor) {
      setDocInfo(doctor);
    }
  }, [doctors, docId]);

  const { docSlots, slotIndex, setSlotIndex, slotTime, setSlotTime } =
    useAppointmentSlots(docInfo);

  const bookAppointment = useBookAppointment({
    backendUrl,
    token,
    docId,
    selectedPatient,
    slotTime,
    slotIndex,
    docSlots,
    getDoctorsData,
  });

  if (!docInfo) return null;

  return (
    <>
      <DoctorInfo docInfo={docInfo} currencySymbol={currencySymbol} />

      <PatientSelector
        patients={patients}
        selectedPatient={selectedPatient}
        setSelectedPatient={setSelectedPatient}
        onAddPatient={handleAddPatient}
      />

      <div className="sm:ml-72 sm:pl-4 mt-8">
        <BookingSlots
          docSlots={docSlots}
          slotIndex={slotIndex}
          setSlotIndex={setSlotIndex}
        />

        <TimeSlots
          docSlots={docSlots}
          slotIndex={slotIndex}
          slotTime={slotTime}
          setSlotTime={setSlotTime}
        />

        <BookButton onBook={bookAppointment} disabled={!slotTime} />
      </div>

      <RelatedDoctors docId={docId} speciality={docInfo.speciality} />

      <AddPatientModal
        isOpen={showAddPatient}
        onClose={() => setShowAddPatient(false)}
      />

      <CompleteProfileModal
        isOpen={showCompleteProfile}
        onClose={() => setShowCompleteProfile(false)}
      />
    </>
  );
};

export default Appointment;
