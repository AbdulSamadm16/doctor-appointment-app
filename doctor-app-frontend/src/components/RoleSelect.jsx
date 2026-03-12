import React, { useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RoleSelect = ({setRole}) => {

  
  const navigate = useNavigate();
  
  
  const handleDoctor = ()=>{
    const password = prompt("Enter doctor password")

if (password === "1234") {
  localStorage.setItem("role", "Doctor");
  setRole("Doctor");
  navigate("/DoctorDashboard")
}else{
      alert("Wrong Password")
    }
  }

    const handlePatient = () => {
    localStorage.setItem("role", "Patient");
    setRole("Patient");
    navigate("/patientDashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
     <div className="card shadow p-5 text-center" style={{ width: "400px" }}>
        <h3 className="mb-3">🏥 Doctor Appointment</h3>
       <p className="text-muted">Select how you want to continue</p>
      <div className='d-flex justify-content-center gap-3 mt-4'>
          <button
            className="btn btn-primary btn-lg"
            onClick={handleDoctor}
          >
            👨‍⚕️ Doctor
          </button>
      
          <button
            className="btn btn-success btn-lg"
            onClick={handlePatient}
          >
            🧑‍🦽 Patient
          </button>
      </div>
     </div>

    </div>
  )
}

export default RoleSelect