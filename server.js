    import mongoose from "mongoose";
    import dotenv from "dotenv";
    import express from "express";
    import cors from "cors"
    import appointmentRoutes from './routes/AppointmentRoute.js';
    import doctorRoutes from './routes/DoctorRoute.js';

    dotenv.config()
    const app = express()
    app.use(cors())
    app.use(express.json())

    const PORT = process.env.PORT||4000
        app.use("/doctors", doctorRoutes);
        app.use("/appointments", appointmentRoutes);

       
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>console.log("mongodb connected"))
    .then(err=>console.log(err))

  

    app.listen(PORT,()=>{
        console.log(`server running on ${PORT}`);
        
    })