import mongoose from "mongoose";

const patientappointment=new mongoose.Schema({
    doctorname:{
        type:String,
        required:[true,"Please select doctore name"]
    },
    petientname:{
        type:String,
        required:[true,"Please type petient name"]
    },
    date:{ 
        type:Date,
        required:[true,"Please select date for appoinment"]
    },
    time:{
        type:String,
        required:[true,"please select time for appoinment"]
    },
    symptopms:{
        type:String,
        required:[true,"please type symptons"]
    }
})

const petientAppo= mongoose.models.patient || mongoose.model("patientAppo",patientappointment);