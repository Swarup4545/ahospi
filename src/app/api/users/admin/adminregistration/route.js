import { connect } from "@app/bgConfig/dbConfig";
import { NextRequest,NextResponse } from "../../../../../node_modules/next/server";
import PatientReg from "../../../../models/admin/patientRegister";

connect();

export async function POST(request:NextRequest){
    try{

        const reqBody= await request.json();
        const {first_name,middel_name,last_name,gender,dob,maritalstatus,emailid,address,postcode,mobileno} =reqBody;
        console.log("register patient",reqBody);
        const newUser = new PatientReg({
            first_name,
            middel_name,
            last_name,
            gender,
            dob,
            maritalstatus,
            emailid,
            address,
            postcode,
            mobileno, 
        })

        const savedUser =await newUser.save();
        console.log("saved patient",savedUser);
        return NextResponse.json({
            message:"Patient data created successfully",
            success:true,
            data:savedUser
        })
        
    }
    catch(error){
        console.log(error)
    }
}