import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import doctorApi from "../services/doctorApi";
import AppointmentForm from "../components/AppointmentForm";

const BookAppointment = () => {

  const { doctorId } = useParams();
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const loadDoctors = async () => {
      const data = await doctorApi();
      setDoctors(data);
    };

    loadDoctors();
  }, []);

  const selectedDoctor = doctors.find(
    (d) => d.doctorId === doctorId
  );

  return (
    <div className="container mt-4">
      <h2 className="mb-4">
        Book Appointment with Dr. {selectedDoctor?.name}
      </h2>

      <div className="card p-4">
        <AppointmentForm
          selectedDoctor={doctorId}
        />
      </div>
    </div>
  );
};
export default BookAppointment;