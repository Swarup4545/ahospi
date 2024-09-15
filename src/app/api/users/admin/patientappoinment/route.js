import { connect } from "@app/bgConfig/dbConfig";
import { NextRequest,NextResponse } from "../../../../../node_modules/next/server";
import petientAppo from "../../../../models/admin/patientAppointment"

connect();

export async function POST(request:NextRequest){
    try{

        const reqBody= await request.json();
        const {doctorname, petientname,date,time,symptons} =reqBody;
        console.log("appointment patient",reqBody);
        const newUser = new petientAppo({
            doctorname,
            petientname,
            date,
            time,
            symptons
        })

        const savedUser =await newUser.save();
        console.log("saved patient",savedUser);
        return NextResponse.json({
            message:"Patient appointment data created successfully",
            success:true,
            data:savedUser
        })
    }
    catch(error){
        console.log(error)
    }
}

export async function DELETE(request:NextRequest,){
    try{
        const reqBody= await request.json();
        const {_id} =reqBody;
        await petientAppo.findByIdAndDelete(_id);
        return NextResponse.json({
            message:"Patient appointment data deleted successfully",
            success:true,
            data:petientAppo
        });
    }
    catch(error){
        console.log(error)
    }
    
}