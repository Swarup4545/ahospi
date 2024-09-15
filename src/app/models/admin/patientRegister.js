import mongoose from "mongoose";

const patientRegister= new mongoose.Schema({
    first_name:{
        type:String,
        required:[true,"Please rnter Patient Name"]
    },
    middel_name:{
        type:String,
        required:[true,"Please rnter Patient Name"]
    },
    last_name:{
        type:String,
        required:[true,"Please rnter Patient Name"]
    },
    gender:{
        type:String,
        required:[true,"Please select patient DOB"]
    }, 
    dob:{
        type:Date,
        required:[true,"Please select gender of Patient"]
    }, 
    mobileno:{
        type:String,
        required:[true,"Please enter mobile number of Patient"]
    },
    maritalstatus:{
        type:String,
        required:[true,"Please select marital status patient"]
    }, 
    emailid:{
        type:String,
        required:[true,"Please enter patient email id"],
        unique:true
    },
    //address
    address:{
        type:String,
        required:[true,"Please enter eddress of Patient"]
    },
    postcode:{
        type:String,
        required:[true,"Please enter postal code of Patient"]
    }
})

const PatientReg=mongoose.models.patient || mongoose.model("patientregister",patientRegister);

export default PatientReg;