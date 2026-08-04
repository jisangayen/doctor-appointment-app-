import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Doctors from '../pages/Doctors'
import Login from '../pages/Login'
import About from '../pages/About'
import Contact from '../pages/Contact'
import MyAppointments from '../pages/MyAppointments'
import Appointment from '../pages/Appointment'
import  Profile  from '../pages/Profile'

const AppRoutes = () => {
  return (
    <>
     <Routes>
         
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/appointment/:docId" element={<Appointment />} />
     
     </Routes>
    </>
  )
}

export default AppRoutes