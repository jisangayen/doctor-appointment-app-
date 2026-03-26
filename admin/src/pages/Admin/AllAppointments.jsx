import React from 'react'
import { useContext, useEffect } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../assets/assets'

const AllAppointment = () => {

  const { aToken, appointments, getAllAppointments } = useContext(AdminContext)
  const { calculateAge} = useContext(AppContext)

  useEffect(() => {
    if (aToken) {
      getAllAppointments()
    }
  }, [aToken])

  return (
    <div className='w-full max-w-6xl mx-auto my-5'> {/* Adjusted alignment */}
      <p className='mb-3 text-lg font-medium'>All Appointments</p>
      <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-auto'>
        <div className='hidden sm:grid grid-cols-[0.5fr_2fr_1fr_2fr_2fr_1fr_1fr] gap-4 py-3 px-6 border-b'> {/* Updated column fractions */}
          <p>#</p>
          <p>Patient</p>
          <p>Age</p>
          <p>Date & Time</p>
          <p>Doctor</p>
          <p>Fees</p>
          <p>Action</p>
        </div>
        
        {appointments 
        .reverse()
        .map((item, index) => (
          <div
            key={index}
            className='flex flex-wrap sm:grid sm:grid-cols-[0.5fr_2fr_1fr_2fr_2fr_1fr_1fr] gap-4 items-center text-gray-700 py-3 px-6 border-b hover:bg-gray-100'> {/* Consistent columns and better hover */}
            <p>{index + 1}</p>
            <div>
              <p>{item.userData.name}</p>
             
            </div>
            <p className='mx-sm:hidden'>{calculateAge(item.userData.dob)}</p>
            <p>{item.slotDate}, {item.slotTime}</p>
            <div className='flex items-center gap-2'>
              <img className='w-8 rounded-full bg-slate-400' src={item.docData.image} alt="" /><p>{item.docData.name}</p>
            </div>
            <p>{item.amount} INR</p>
            {
              item.cancelled 
              ? <p className='text-red-400 text-xs font-medium'> Cancelled</p>
              :  <p className='text-green-400 text-xs font-medium'> Pending</p>
            }
           
          </div>
        ))}
      </div>
    </div>
  )
}

export default AllAppointment
