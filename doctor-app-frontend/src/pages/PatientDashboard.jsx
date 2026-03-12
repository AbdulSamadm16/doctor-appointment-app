import React from "react";
import DoctorList from "../components/DoctorList";
import AppointmentList from "../components/AppointmentList";

const PatientDashboard = () => {

  
  return (
    <>
<div className="container mt-4">

<h2 className="mb-4">Patient Dashboard</h2>

<div className="card p-3 mb-4">
<h4 className="mb-3">Available Doctors</h4>
<DoctorList />
</div>

<div className="card p-3">
<AppointmentList />
</div>
</div>

    </>
  );
};

export default PatientDashboard;

