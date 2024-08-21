import mongoose from "mongoose";
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    eventId: {type: Number},
    eventName: {type: String,required: true},
    summary: {type: String,required: true},
    address: {type: String,required: true},
    startDate: {type: Date,required: true},
    endDate: {type: Date,required: true},
    fullDesc: {type: String,required: true},
    capacity: {type: Number,required: true},
    currentBookings: {type: Number,default: 0},
    category:String,
    promoCode: String,
    discount: Number,
    price: Number
});

export const event = mongoose.model('event',eventSchema);