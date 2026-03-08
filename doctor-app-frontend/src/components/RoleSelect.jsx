import React from 'react'
import { useState } from 'react';

const RoleSelect = ({setRole}) => {
 
  
  const handleDoctor = ()=>{
    const password = prompt("Enter doctor password")

if (password === "1234") {
  localStorage.setItem("role", "Doctor");
  setRole("Doctor");
}else{
      alert("Wrong Password")
    }
  }
  return (
    <div className='container text-center mt-5 border border-black w-50 p-5'>
      <h3>Select Role</h3>

      <div className='d-flex justify-content-center gap-3 mt-4'>
        <button className='btn btn-primary' onClick={handleDoctor}>Doctor</button>
        <button className='btn btn-success' onClick={() => {
          localStorage.setItem("role", "Patient");
          setRole("Patient")}}>Patient</button>
      </div>

    </div>
  )
}

export default RoleSelect