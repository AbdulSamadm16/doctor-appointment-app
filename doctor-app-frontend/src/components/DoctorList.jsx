import React, { useEffect, useState } from 'react'
import doctorApi from '../services/doctorApi'

const DoctorList = () => {
   const [doctors,setDoctor] = useState([])

    const getDoctors = async () => {
    const data = await doctorApi()
    setDoctor(data)
    }

   useEffect(()=>{
    getDoctors()
   },[])

  return (
    <div>
         <h2 className='text-center'>Available Doctors :</h2>
      <div className='d-flex flex-wrap justify-content-center   gap-3 '>
                {
        doctors.map((d)=>(
     <div key={d._id} className='list-unstyled text-center border border-black w-25 bg-body-tertiary  p-4 ' >
        <h2>DR.{d.name}</h2>
        <p>{d.doctorId}</p>
       <h4>specialization : <span>{d.specialization}</span></h4>
      </div>
        ))
        }
      </div>

    </div>
  )
}  

export default DoctorList
