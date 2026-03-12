import React, { useEffect, useState } from 'react'
import RoleSelect from './components/RoleSelect'
import DoctorDashboard from './pages/DoctorDashboard';
import PatientDashboard from './pages/PatientDashboard';
import { Routes,Route } from 'react-router-dom';
import "./App.css"
import BookAppointment from './pages/BookAppointment';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {
  const [role, setRole] = useState(null);

useEffect(() => {
  const savedRole = localStorage.getItem("role");
  if (savedRole) {
    setRole(savedRole);
  }
}, []);
  

  return (
<>
    {role && <Navbar setRole={setRole} />}
    <Routes>
      <Route path="/" element={<RoleSelect setRole={setRole} />} />
      <Route path="/DoctorDashboard" element={<DoctorDashboard />} />
      <Route path="/patientDashboard" element={<PatientDashboard />} />
      <Route path="/book/:doctorId" element={<BookAppointment />} />
    </Routes>
    {role && <Footer/>}
</>

  );
};

export default App
