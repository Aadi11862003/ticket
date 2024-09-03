import React, { useState } from 'react';

const BookShow = () => {
  const [tickets, setTickets] = useState(1);
  const [userInfo, setUserInfo] = useState({ name: '', email: '', phone: '' });
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [timeSlot, setTimeSlot] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleConfirm = () => {
    if (userInfo.name && userInfo.email && userInfo.phone && timeSlot) {
      setIsConfirmed(true);
    } else {
      alert('Please fill in all the required details.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <header className="bg-gray-800 p-4 text-white flex justify-between items-center rounded-lg mb-6">
        <h1 className="text-2xl font-bold">Book Your Show</h1>
      </header>

      {!isConfirmed ? (
        <main className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
          {/* Ticket Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Select Tickets</h2>
            <div className="flex items-center justify-between">
              <div>
                <p>Number of Tickets</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => setTickets(tickets > 1 ? tickets - 1 : 1)}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-l-lg"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={tickets}
                    readOnly
                    className="w-12 text-center border-t border-b border-gray-300"
                  />
                  <button
                    onClick={() => setTickets(tickets + 1)}
                    className="bg-gray-200 text-gray-800 px-3 py-1 rounded-r-lg"
                  >
                    +
                  </button>
                </div>
              </div>
              <div>
                <p>
                  Price: <span className="font-bold">$ {tickets * 10}</span>
                </p>
              </div>
            </div>
          </div>

          {/* User Information */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Your Details</h2>
            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={userInfo.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={userInfo.email}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={userInfo.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg"
              />
            </div>
          </div>

          {/* Time Slot Selection */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Select Time Slot</h2>
            <div className="space-y-4">
              <select
                value={timeSlot}
                onChange={(e) => setTimeSlot(e.target.value)}
                className="w-full p-2 border rounded-lg"
              >
                <option value="">Select a time slot</option>
                <option value="10:00 AM">10:00 AM</option>
                <option value="1:00 PM">1:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="7:00 PM">7:00 PM</option>
                <option value="10:00 PM">10:00 PM</option>
              </select>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Payment Options</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="creditCard"
                  checked={paymentMethod === 'creditCard'}
                  onChange={() => setPaymentMethod('creditCard')}
                  className="mr-2"
                />
                <label htmlFor="creditCard">Credit/Debit Card</label>
              </div>
              <div className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  id="upi"
                  checked={paymentMethod === 'upi'}
                  onChange={() => setPaymentMethod('upi')}
                  className="mr-2"
                />
                <label htmlFor="upi">UPI</label>
              </div>
              <div className="flex items-center ">
                <input
                  type="radio"
                  name="payment"
                  id="wallet"
                  checked={paymentMethod === 'wallet'}
                  onChange={() => setPaymentMethod('wallet')}
                  className="mr-2"
                />
                <label htmlFor="wallet">Wallet</label>
              </div>
            </div>
          </div>

          {/* Review & Confirm */}
          <div className="mb-6">
            <h2 className="text-xl font-bold mb-4">Review & Confirm</h2>
            <div className="mb-4">
              <p>Tickets: {tickets}</p>
              <p>Total Price: $ {tickets * 10}</p>
              <p>Time Slot: {timeSlot}</p>
            </div>

            <button
              onClick={handleConfirm}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg w-full"
            >
              Confirm Booking
            </button>
          </div>
        </main>
      ) : (
        <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Booking Confirmed!</h2>
          <p>Thank you, {userInfo.name}. Your booking for the {timeSlot} show is confirmed.</p>
          <p>We've sent a confirmation email to {userInfo.email}.</p>
          <p>Enjoy the show!</p>
        </div>
      )}
    </div>
  );
};

export default BookShow;

