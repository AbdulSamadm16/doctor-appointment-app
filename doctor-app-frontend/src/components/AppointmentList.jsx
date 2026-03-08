import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../services/apiBase'

const AppointmentList = ({setRole}) => {
 const [appointments,setAppointments] = useState([])

 const getAppoinments = async () =>{
 const res = await fetch(`${API_BASE_URL}/appointments`)
 const data = await res.json()
 setAppointments(data);
 }

 useEffect(()=>{
     getAppoinments()
 },[])

 
  return ( 
    <div className="mt-4">
        <h2 className="mb-3">Booked Appointments :</h2>
        <ul className="list-group w-75 p-3">
       {appointments.map((a) => (
        <li key={a._id} className="list-group-item mb-2">
          {a.name} -{a.doctorId} - {new Date(a.date).toLocaleDateString()} - {a.time } P.M
        </li>
      ))}
      </ul>
           <button className="btn btn-outline-danger" onClick={()=>setRole(null)}>
      Back
     </button>
    </div>
  )
}

export default AppointmentList

