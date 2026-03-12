import React, {useEffect, useState } from 'react'
import doctorApi from '../services/doctorApi'
import API_BASE_URL from '../services/apiBase'
import { useNavigate } from 'react-router-dom'
const AppointmentForm = ({selectedDoctor}) => {
    const [form,setForm] = useState({
    name:"",
    doctorId:selectedDoctor,
    date:"",
    time:""
},[])
const navigate = useNavigate();

const timeSlots = [
 "10:00",
 "10:30",
 "11:00",
 "11:30",
 "12:00",
 "12:30",
 "01:00"
];

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
    doctorId:selectedDoctor,
    date:"",
    time:""
    })
    
}



return (
  <div className="mt-2">
    <h2>Fill The Form :</h2>
    <form className="d-flex flex-column gap-2" onSubmit={handleSubmit}>

      <input
       className="form-control" 
       value={form.name} 
       name='name' 
       type="text" 
       placeholder='Enter Patient Name' 
       onChange={handleChange} 
       required = {true}
       />


      <input 
      className="form-control" 
      value={form.date} 
      name='date' 
      type="date" 
      placeholder='Date' 
      onChange={handleChange} 
      required = {true}  
      />
<select
  className="form-select"
  value={form.time}
  onChange={(e) => setForm({ ...form, time: e.target.value })}
>
  <option value="">Select Time</option>

  {timeSlots.map((slot) => (
    <option key={slot} value={slot}>
      {slot}
    </option>
  ))}
</select>

    <button className="btn btn-primary mt-2" type='submit'>Submit</button>
 </form>
     <button className="btn btn-outline-danger mt-2" onClick={()=>navigate("/patientDashboard")}>
      Back
     </button>
    
  </div>
);
}
export default AppointmentForm