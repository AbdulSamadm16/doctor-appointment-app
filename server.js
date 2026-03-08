import dotenv from "dotenv";
import app from "./app.js";
import { connectDB } from "./lib/mongoose.js";

dotenv.config();

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    console.log("mongodb connected");
    app.listen(PORT, () => {
      console.log(`server running on ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
