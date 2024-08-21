import mongoose from "mongoose";
import express from "express";
import { artist } from "/Users/aashwinxgarg/Desktop/University/tick-eve/models/artist.js"
import { event } from "/Users/aashwinxgarg/Desktop/University/tick-eve/models/event.js"
import { organiser } from "/Users/aashwinxgarg/Desktop/University/tick-eve/models/organiser.js"
import { payment } from "/Users/aashwinxgarg/Desktop/University/tick-eve/models/payment.js"
import { ticket } from "/Users/aashwinxgarg/Desktop/University/tick-eve/models/ticket.js"
import { user } from "/Users/aashwinxgarg/Desktop/University/tick-eve/models/user.js"


const app = express()
const port = 3000
let conn = await mongoose.connect("mongodb://localhost:27017/tickeve");


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    res.render("index", { foo: 'FOO' });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

app.get('/artist', (req, res) => {
    const demoartist = new artist({
        name: "Arijit Singh",
        age: 37,
        language: ["Hindi"],
        rating: 4,
        isConcert: true,
        isMoviePromotion: false,
        eventnum: 7,
        instaHandle: "https://www.instagram.com/arijitsingh?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
    })
    console.log(demoartist);
    demoartist.save();
    res.send({});

})

app.get('/event', (req, res) => {
    const demoevent = new event({
        eventId: 36976,
        eventName: "Fame Gurukul",
        summary: "Join us and let yourself know",
        address: "Delhi NCR",
        startDate: Date.now(),
        endDate: Date.now(),
        fullDesc: "In many previous shows, he even gave a piano performance on some of his slow, yet soulful songs. Beyond a concert, it was a celebration of Arijit Singh's musical brilliance, uniting fans from all backgrounds in a joyous celebration of music. The memories forged that night will remain etched in the hearts of attendees for years to come.",
        capacity: 465677,
        currentBookings: 13312,
        category: "Concert",
        promoCode: "",
        discount: 400,
        price: 4500
    })
    console.log(demoevent);
    demoevent.save();
    res.send({});

})


app.get('/organiser', (req, res) => {
    const demoorganiser = new organiser({
        name: "Pride East Entertainments Private Limited",
        eventsnum: 23,
        socialHandle: "https://www.linkedin.com/company/prideeast-entertainments-private-limited/?originalSubdomain=in",
        rating: 3,
        isCollab: true
    })
    console.log(demoorganiser);
    demoorganiser.save();
    res.send({});

})

app.get('/payment', (req, res) => {
    const demopayment = new payment({
        ticketiD: 41342,
        user: "xyz",
        amount: 4838,
        paymentDate: Date.now(),
        paymentMethod: "upi",
        status: "pending"
    })
    console.log(demopayment);
    demopayment.save();
    res.send({});

})

app.get('/ticket', (req, res) => {
    const demoticket = new ticket({
        event: "Fame Gurukul",
        user: "xyz",
        category: "basic",
        price: 50,
        seatNumber: 251,
        purchaseDate: Date.now(),
        paymentStatus: "pending"
    })
    console.log(demoticket);
    demoticket.save();
    res.send({});

})

app.get('/user', (req, res) => {
    const demouser = new user({
        name: "xyz",
        email: "xyz@gmail.com",
        password: "abc123",
        gender: "male",
        dob: Date.now(),
        mobile: 1234567890,
        address: "Delhi NCR",
        pincode: 123456,
        designation: "student"
    })
    console.log(demouser);
    demouser.save();
    res.send({});

})