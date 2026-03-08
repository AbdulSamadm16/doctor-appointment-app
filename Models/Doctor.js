import mongoose, { Schema } from "mongoose";

const docterSchema = new Schema({
    doctorId : {type : String , required : true , unique: true},
    name : {type : String , required : true},
    specialization: { type: String, required: true },
})

const Doctor = mongoose.model("Doctor",docterSchema)
export default Doctor