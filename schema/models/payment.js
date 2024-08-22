import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    ticketiD: Number,
    user: String,
    amount: { type: Number, required: true },
    paymentDate: { type: Date, default: Date.now },
    paymentMethod: { type: String, enum: ['credit_card', 'upi'], required: true },
    status: { type: String, enum: ['pending', 'completed', 'failed'], default: 'pending' }
});

export const payment = mongoose.model('Payment', paymentSchema);


