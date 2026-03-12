import React, { useEffect, useState } from 'react'
import API_BASE_URL from '../services/apiBase'
import { useNavigate } from 'react-router-dom'

const AppointmentList = () => {
 const [appointments,setAppointments] = useState([])
 const [doctors, setDoctors] = useState([])
 const navigate = useNavigate();

const getDoctors = async () => {
  const res = await fetch(`${API_BASE_URL}/doctors`)
  const data = await res.json()
  setDoctors(data)
} 

 const getAppointments = async () =>{
 const res = await fetch(`${API_BASE_URL}/appointments`)
 const data = await res.json()
 setAppointments(data);
 }

 useEffect(()=>{
     getAppointments()
     getDoctors()
 },[])
 
 
  return ( 
    <div className="mt-4">
        <h2 className="mb-3">Booked Appointments :</h2>
    <div style={{ maxHeight: "350px", overflowY: "auto" }}>
      <ul className="list-group p-3 m">
       {appointments.map((a) => {
        const doctor = doctors.find(d => d.doctorId === a.doctorId)  
      return (
      <li key={a._id} className="list-group-item mb-4 border border-black card">
      <strong>{a.name}</strong>
      <br />
      Doctor: {doctor?.name}
      <br />
      Date: {new Date(a.date).toLocaleDateString()}
      <br />
      Time: {a.time}
      </li>
)})}
      </ul>
    </div>
           <button className="btn btn-outline-danger mt-3" onClick={()=>navigate("/")}>
      Back
     </button>
    </div>
  )
}

export default AppointmentList

