import mongoose from "mongoose";
import { buffer } from "stream/consumers";

const userSchema = new mongoose.Schema({
    name: {type:String, required:false},
    email:{type:String, required:true},
    password:{type:String, required:true},
    gender: {type:String, required:false},
    dob: {type:Date, required:false},
    mobile: {type:Number, requiref:false},
    address: {type:String, required:false},
    pincode: {type:Number, required:false},
    idProof: { data: buffer, type: String, required:false},
    designation: {type:String, required:true}
})

export const user = mongoose.model('user',userSchema);