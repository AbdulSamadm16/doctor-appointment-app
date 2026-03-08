import express from "express";
import Doctor from "../Models/Doctor.js";

const router = express.Router();


router.post("/", async (req,res)=>{
try{
const {doctorId,name,specialization} = req.body

if(!doctorId||!name || !specialization){
 return res.status(400).json({message:"All fields should be filled"})
}

const doctor = new Doctor({name,specialization,doctorId})

await doctor.save()
res.status(200).json(doctor)
}catch(err){
  res.status(500).json({message:err.message})
}
})

router.get("/",async (req,res)=>{
try{
    const doctors = await Doctor.find()
  if(doctors.length===0){
   return res.status(400).json({message:"Doctors not found"})
  }
  res.status(200).json(doctors)
}catch(err){
   res.status(500).json({message:err.message})
}
})

router.get("/:id",async (req,res)=>{
try{
    const doctor = await Doctor.findOne({_id:req.params.id})
  if(!doctor){
    return res.status(400).json("Doctor not found")
  }
  res.status(200).json(doctor)
}catch(err){
   res.status(500).json({message:err.message})
}
})

router.put("/:id", async (req,res)=>{
try{
    const doctor = await Doctor.findOne({_id: req.params.id})
  if(!doctor){
    return res.status(400).json("Doctor not found")
  }
  doctor.name = req.body.name,
  doctor.specialization = req.body.specialization

  await doctor.save()

  res.status(200).json(doctor)
}catch(err){
   res.status(500).json({message:err.message})
}
})


router.delete("/:id", async(req,res)=>{
try{
    const doctor =  await Doctor.findOne({_id : req.params.id})

  if(!doctor){
     return res.status(400).json("Doctor not found")
  }
  await doctor.deleteOne()

  res.status(200).json({message:"Doctor deleted"})
}catch(err){
  res.status(500).json({message:err.message})
}
})




export default router;