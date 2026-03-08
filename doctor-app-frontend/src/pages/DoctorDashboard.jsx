import React, { useEffect, useState } from 'react'

const DoctorDashboard = ({setRole}) => {
    const [doctors,setDoctors] = useState([])
    const [selectedDoctorId,setSelectedDoctorId] = useState("")
    const [editDoctor, setEditDoctor] = useState({
  name: "",
  specialization: ""
})
   const [appointments, setAppointments] = useState([])

    const getDoctor = async ()=>{
        const res = await fetch("http://localhost:5000/doctors")
        const data = await res.json()
        setDoctors(data)
        
    }
  const getAppointments = async () => {
  const res = await fetch("http://localhost:5000/appointments")
  const data = await res.json()
  setAppointments(data)
}
    useEffect(()=>{
        getDoctor()
        getAppointments()
    },[])

    const selectedDoctor = doctors.find((d)=> d._id===selectedDoctorId)
    const filteredAppointment = appointments.filter((a)=>a.doctorId === selectedDoctor?.doctorId)

    useEffect(()=>{
  if(selectedDoctor){
    setEditDoctor({
      name:selectedDoctor.name,
      specialization:selectedDoctor.specialization
    })
  }
    },[selectedDoctor])

    const handleUpdate = async ()=>{
      const res = await fetch( `http://localhost:5000/doctors/${selectedDoctorId}`,{
        method:"PUT",
        headers:{
          "Content-Type" : "application/json"
        },
        body:JSON.stringify(editDoctor)
      })
      const data = await res.json()
      console.log((data));
      alert("Doctor updated successfully")
      getDoctor()
      
    }

const handleDelete = async (id) => {
  const res = await fetch(`http://localhost:5000/appointments/${id}`, {
    method: "DELETE"
  });

  const data = await res.json();
  console.log(data);
  alert("Appointment cancelled successfully")

  getAppointments();
};

const logout = () => {
  localStorage.removeItem("role");
  setRole(null);
};

  return (
    <div className="container mt-4">
        <h2 className="mb-3">Doctor Dashboard</h2>
        

        <select className="form-select mb-3" value={selectedDoctorId} onChange={(e)=>setSelectedDoctorId(e.target.value)}>
          <option value="">select Doctor</option>
        
     {
        doctors.map((d)=>(
                
               <option value={d._id} key={d._id}>
                {d.doctorId} - {d.name} ({d.specialization})
                </option>
         
        ))}
       </select>
               {
  selectedDoctor&&(
  <div className="mt-3">
     <h3 className="mb-2">Doctor Details</h3>
    <p className="mb-1">Doctor ID: {selectedDoctor.doctorId}</p>
    <p className="mb-1">Name: {selectedDoctor.name}</p>
    <p className="mb-3">Specialization: {selectedDoctor.specialization}</p>
    <input className="form-control mb-2" type="text" value={editDoctor.name} onChange={(e)=>setEditDoctor({...editDoctor ,name:e.target.value})} />
    <input className="form-control mb-2" type="text" value={editDoctor.specialization} onChange={(e)=>setEditDoctor({...editDoctor ,specialization:e.target.value})} />
    <button className="btn btn-outline-success mb-3" onClick={handleUpdate}>
      UPDATE
    </button>
            <h3 className="mb-2">Appointments for DR.{selectedDoctor?.name}</h3>
{filteredAppointment.length === 0 ? (
  <p>No Appointments For {selectedDoctor.name}</p>
) : (
  filteredAppointment.map((f) => (
    <div key={f._id} className="d-flex align-items-center gap-2 mb-2">
      <p className="mb-0">
        name : {f.name} - Date : {new Date(f.date).toLocaleDateString()} - Time : {f.time}
      </p>
      <button
        type="button"
        className="btn btn-outline-danger btn-sm"
        onClick={() => handleDelete(f._id)}
      >
        Cancel
      </button>
    </div>
  ))
)}
  </div>
  
            
          )
        }
 <button className='btn btn-outline-danger' onClick={logout}>
  Logout
</button>
    </div>
  )
}

export default DoctorDashboard
