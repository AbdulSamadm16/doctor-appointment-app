import React, { useState } from 'react'
import RoleSelect from './components/RoleSelect'
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';

const App = () => {
  const [role,setRole]= useState(null)
  
  return (
    <div>
      <h1 className='text-center'>Doctor Appointment System</h1>
      

{!role && <RoleSelect setRole={setRole} />}

{role === "Patient" && <PatientDashboard setRole={setRole}/>}

{role === "Doctor" && <DoctorDashboard setRole={setRole}/>}
    </div>
  )
}

export default App
