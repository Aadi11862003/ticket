import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
    event: String,
    user: String,
    category: { type: String, required: true },
    price: { type: Number, required: true },
    seatNumber: { type: Number, required: true },
    purchaseDate: { type: Date, default: Date.now },
    paymentStatus: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
});

export const ticket = mongoose.model('Ticket', ticketSchema);
