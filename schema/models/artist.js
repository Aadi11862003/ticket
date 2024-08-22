import mongoose from "mongoose";
const Schema = mongoose.Schema;

const artistSchema = new Schema({
    name:String,
    age:Number,
    language:Array,
    rating:Number,
    isConcert:Boolean,
    isMoviePromotion:Boolean,
    eventnum:Number,
    instaHandle:String
})

export const artist = mongoose.model('artist', artistSchema);
