import React, { useEffect, useState } from 'react'
import doctorApi from '../services/doctorApi'
import { useNavigate } from 'react-router-dom'

const 
DoctorList = () => {
   const [doctors,setDoctor] = useState([])
   const navigate = useNavigate();

    const getDoctors = async () => {
    const data = await doctorApi()
    setDoctor(data)
    }

   useEffect(()=>{
    getDoctors()
   },[])
  return (
    <div>
         
      <div className="row g-3 ">
                {
        doctors.map((d)=>(
     <div key={d._id} className="col-md-6 "  >
      <div  className="card h-100 text-center p-3" style={{ cursor: "pointer" }}  onClick={() => navigate(`/book/${d.doctorId}`)}>
            <div className="doctor-avatar">
{d.name.slice(0,2).toUpperCase()  }  
</div>
       <h5 className="mb-1">Dr. {d.name}</h5>
        <p className="mb-1 text-muted">{d.specialization}</p>
        <p className="mb-1 ">Appointments Available</p>

      </div>
        </div>
        ))
        }
      </div>
    </div>
  )
}  

export default DoctorList
