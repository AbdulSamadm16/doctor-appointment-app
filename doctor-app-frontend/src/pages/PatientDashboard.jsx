import React from "react";
import DoctorList from "../components/DoctorList";
import AppointmentForm from "../components/AppointmentForm";
import AppointmentList from "../components/AppointmentList";

const PatientDashboard = ({setRole}) => {

  
  return (
    <div className="container mt-4">
      <h2>Patient Dashboard :</h2>

      <DoctorList  />
      <AppointmentForm />
      <AppointmentList setRole={setRole} />

    </div>
  );
};

export default PatientDashboard;

