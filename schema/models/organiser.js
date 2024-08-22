import mongoose from "mongoose";
const Schema = mongoose.Schema;

const organiserSchema = new Schema({
    name:String,
    eventsnum:Number,
    socialHandle:String,
    rating:Number,
    isCollab:Boolean
})

export const organiser = mongoose.model('organiser',organiserSchema);
