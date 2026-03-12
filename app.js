import express from "express";
import cors from "cors";
import appointmentRoutes from "./routes/AppointmentRoute.js";
import doctorRoutes from "./routes/DoctorRoute.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Doctor appointment API is running" });
});

app.get("/api", (req, res) => {
  res.status(200).json({ message: "Doctor appointment API is running" });
});

app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);

export default app;
