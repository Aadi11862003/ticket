import React from 'react';
import { Link } from 'react-router-dom';

const UpcomingEvents = () => {
  // Sample data for upcoming events
  const events = [
    {
      id: 1,
      title: "Concert A",
      image: "https://via.placeholder.com/400",
      price: {
        basic: "$50",
        low: "$75",
        high: "$100"
      },
      totalSeats: 200,
      availableSeats: 150,
      slots: "6:00 PM, 8:00 PM",
    },
    // Add more events as needed
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <div key={event.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img src={event.image} alt={event.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
            <p className="text-gray-700 mb-2">Price per person:</p>
            <ul className="mb-4">
              <li>Basic: {event.price.basic}</li>
              <li>Low: {event.price.low}</li>
              <li>High: {event.price.high}</li>
            </ul>
            <p className="text-gray-700 mb-2">Total Seats: {event.totalSeats}</p>
            <p className="text-gray-700 mb-2">Available Seats: {event.availableSeats}</p>
            <p className="text-gray-700">Slots: {event.slots}</p>
            <Link to={`/concert/${event.id}`} className="text-blue-500 hover:underline">
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;
