import React, {useEffect, useState } from 'react'
import doctorApi from '../services/doctorApi'
import API_BASE_URL from '../services/apiBase'
const AppointmentForm = () => {
    const [form,setForm] = useState({
    name:"",
    doctorId:"",
    date:"",
    time:""
})
const [doctors, setDoctors] = useState([]);


const handleChange =(e)=>{
    setForm({...form,
        [e.target.name]:e.target.value
    })
}

const  handleSubmit = async (e)=>{
  e.preventDefault()

    const res = await fetch(`${API_BASE_URL}/appointments`,{
        method : "POST",
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(form)
    })
    const data = await res.json()
    console.log(data);
   
      alert("Appointment booked successfully")
    
    setForm({
    name:"",
    doctorId:"",
    date:"",
    time:""
    })
    
}

useEffect(() => {
  const getDoctors = async () => {
    const data = await doctorApi();
    setDoctors(data);
  };
  getDoctors();
}, []);

return (
  <div className="mt-3">
    <h2>Fill The Form :</h2>
    <form className="d-flex flex-column gap-2 w-75 p-3" onSubmit={handleSubmit}>
      <input className="form-control" value={form.name} name='name' type="text" placeholder='Patient Name' onChange={handleChange} required = {true}/>
      <select className="form-select mb-1" name="doctorId" onChange={handleChange} required = {true}>
              <option value="">Select Doctor</option>

              {doctors.map((d) => (
                  <option key={d._id} value={d.doctorId}>
                  {d.name} ({d.specialization})
                  </option>
              ))}
      </select>
      <input className="form-control" value={form.date} name='date' type="date" placeholder='Date' onChange={handleChange} required = {true}  />
      <input className="form-control mb-2" value={form.time} name='time' type="time" placeholder='Time' onChange={handleChange} required = {true}/>
    <button className="btn btn-outline-secondary" type='submit'>Submit</button>
 </form>
    
  </div>
);
}
export default AppointmentForm

