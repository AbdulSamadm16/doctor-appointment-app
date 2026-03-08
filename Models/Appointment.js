import mongoose, { Schema } from "mongoose";


const appoinmentSchema = new Schema({
    name:{type : String , required : true},
    doctorId:{type : String , required : true},
    date:{type : Date , required : true},
    time:{type : String , required : true},

})

const Appointment = mongoose.model("Appointment",appoinmentSchema)
export default Appointment