import express from "express";
import Appointment from "../Models/Appointment.js";

const router = express.Router();



router.post("/", async (req,res)=>{
try{
    const {name,doctorId,date,time} = req.body

  if(!name|| !doctorId || !date || !time){
    return res.status(400).json({message:"All feilds are requried"})
  }

  const appointment = new Appointment({
   name,
   doctorId,
   date,
   time
  })

  await appointment.save()

  res.status(200).json(appointment)
}catch(err){
   res.status(500).json({message:err})
}
})



router.get("/",async (req,res)=>{
try{
  const appointment = await Appointment.find()
  res.status(200).json(appointment)
  if(appointment.length===0){
   return res.status(400).json({message:"NO APPOITNMENTS FOUND"})
}
}catch(err){
  res.status(500).json({message:err.message})
}
})

router.get("/:id", async (req,res)=>{
try{
    const appointment = await Appointment.findOne({_id:req.params.id})

  if(appointment.length===0){
    return res.status(400).json({message:"Appointment not found"})
  }
  res.status(200).json(appointment)
}catch(err){
  res.status(500).json({message:err.message})
}
})

router.put("/:id", async (req,res)=>{
try{
    const appointment = await Appointment.findOne({ _id: req.params.id });

  if(!appointment){
    return res.status(400).json({message:"appoinment not found"})
  }

  appointment.name = req.body.name,
  appointment.doctorId=req.body.doctorId,
  appointment.date=req.body.date,
  appointment.time=req.body.time
  
  await appointment.save()
  res.status(200).json(appointment)
}catch(err){
  res.json(500).json({message:err.message})
}
})

router.delete("/:id",async(req,res)=>{
try{
    const appoinment = await Appointment.findOne({_id: req.params.id})

  if(!appoinment){
    return res.status(400).json({message:"appoinment not found"})
  }

  await appoinment.deleteOne()

  res.status(200).json({message:" Appointment Deleted"})
}catch(err){
  res.status(500).json({message:err.message})
}
})



export default router;