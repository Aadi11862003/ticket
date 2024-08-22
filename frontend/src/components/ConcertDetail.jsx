import React, { useState } from 'react';
import img3 from '../../public/img3.webp';


const ConcertDetail = () => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [studentID, setStudentID] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [ticketType, setTicketType] = useState('basic'); // New state for ticket type

  // Sample concert data
  const concert = {
    title: "Concert A",
    image: img3,
    price: {
      basic: 50,
      low: 75,
      premium: 100
    },
    totalSeats: 200,
    availableSeats: 150,
    slots: "6:00 PM, 8:00 PM",
  };

  const handleQuantityChange = (e) => {
    setTicketQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket purchase logic here
    console.log('Ticket Type:', ticketType); // Added ticket type to log
    console.log('Ticket Quantity:', ticketQuantity);
    console.log('Coupon Code:', couponCode);
    console.log('Student ID:', studentID);
    console.log('Payment Method:', paymentMethod);
    // Redirect or show a confirmation message
  };

  return (
    <div className="p-8 bg-[#b5d1e5] min-h-screen flex flex-col items-center">
      <h1 className="text-4xl font-extrabold mb-6 text-center">{concert.title}</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl w-full">
        <img src={concert.image} alt={concert.title} className="w-full h-74 object-cover rounded-lg mb-6" />
        
        {/* Price Information */}
        <div className="mb-6">
          <p className="text-2xl font-bold mb-2">Price per person:</p>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="p-4 bg-blue-100 rounded-lg shadow-md text-center">
              <h2 className="text-lg font-bold mb-1">Basic</h2>
              <p className="text-2xl font-bold">${concert.price.basic}</p>
            </div>
            <div className="p-4 bg-green-100 rounded-lg shadow-md text-center">
              <h2 className="text-lg font-bold mb-1">Low</h2>
              <p className="text-2xl font-bold">${concert.price.low}</p>
            </div>
            <div className="p-4 bg-yellow-100 rounded-lg shadow-md text-center">
              <h2 className="text-lg font-bold mb-1">High</h2>
              <p className="text-2xl font-bold">${concert.price.premium}</p>
            </div>
          </div>
        </div>
        
        {/* Additional Details */}
        <div className="mb-6">
          <p className="text-gray-700 text-lg mb-2"><span className="font-bold">Total Seats:</span> {concert.totalSeats}</p>
          <p className="text-gray-700 text-lg mb-2"><span className="font-bold">Available Seats:</span> {concert.availableSeats}</p>
          <p className="text-gray-700 text-lg mb-6"><span className="font-bold">Slots:</span> {concert.slots}</p>
        </div>

        {/* Ticket Purchase Form */}
        <form onSubmit={handleSubmit}>
          {/* Ticket Type Selection */}
          <div className="mb-6">
            <label htmlFor="ticketType" className="block text-gray-700 font-medium mb-2">Select Ticket Type:</label>
            <select
              id="ticketType"
              value={ticketType}
              onChange={(e) => setTicketType(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              required
            >
              <option value="basic">Basic - ${concert.price.basic}</option>
              <option value="low">Low - ${concert.price.low}</option>
              <option value="high">High - ${concert.price.premium}</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="ticketQuantity" className="block text-gray-700 font-medium mb-2">Ticket Quantity:</label>
            <input
              type="number"
              id="ticketQuantity"
              value={ticketQuantity}
              onChange={handleQuantityChange}
              min="1"
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="couponCode" className="block text-gray-700 font-medium mb-2">Coupon Code (if applicable):</label>
            <input
              type="text"
              id="couponCode"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="studentID" className="block text-gray-700 font-medium mb-2">Student ID (if applicable):</label>
            <input
              type="text"
              id="studentID"
              value={studentID}
              onChange={(e) => setStudentID(e.target.value)}
              className="w-full px-4 py-2 bg-gray-200 border border-gray-300 rounded-md shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">Payment Method:</label>
            <div className="flex flex-col gap-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  id="upi"
                  name="paymentMethod"
                  value="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="mr-2"
                />
                <label htmlFor="upi" className="text-gray-700">UPI</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="creditCard"
                  name="paymentMethod"
                  value="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => setPaymentMethod('creditCard')}
                  className="mr-2"
                />
                <label htmlFor="creditCard" className="text-gray-700">Credit Card</label>
              </div>
            </div>
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Purchase Ticket
          </button>
        </form>
      </div>
    </div>
  );
};

export default ConcertDetail;
