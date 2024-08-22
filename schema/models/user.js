import mongoose from "mongoose";
import { buffer } from "stream/consumers";

const userSchema = new mongoose.Schema({
    name: {type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    gender: {type:String, required:true},
    dob: {type:Date},
    mobile: {type:Number, requiref:true},
    address: {type:String},
    pincode: {type:Number, required:true},
    idProof: { data: buffer, type: String, required:false},
    designation: {type:String, required:true}
})

export const user = mongoose.model('user',userSchema);
