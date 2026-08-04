import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "$";
  const backendUrl = import.meta.env.VITE_BECKEND_URL;

  const [doctors, setDoctors] = useState([]);
  const [userData, setUserData] = useState(null);
  const [patients, setPatients] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : false,
  );

  const loadUserProfile = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: {
          token,
        },
      });

      if (data.success) {
        setUserData(data.userData);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const getDoctorsData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      if (data.success) {
        setDoctors(data.doctors);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(data.message);
    }
  };
  const getPatients = async () => {
  try {
    const { data } = await axios.get(
      backendUrl + "/api/patient/list",
      {
        headers: {
          token,
        },
      }
    );

    if (data.success) {
      setPatients(data.patients);
    }
  } catch (error) {
    console.log(error);
  }
};

  const value = {
    doctors,
    getDoctorsData,
    currencySymbol,
    token,
    setToken,
    backendUrl,
    userData,
    setUserData,
    loadUserProfile,
     patients,
    setPatients,
    getPatients
  };

  useEffect(() => {
    if (token) {
      loadUserProfile();
    }
  }, [token]);

  useEffect(() => {
    getDoctorsData();
  }, []);

  useEffect(() => {
  if (token) {
    getPatients();
  }
}, [token]);

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
