import React from 'react';
import img1 from '../../public/img1.jpg'; // Replace with actual image URLs
import img2 from '../../public/images.jpeg';
import img3 from '../../public/img3.webp';
import img4 from '../../public/img4.webp';

// Sample data for finished events
const finishedEvents = [
  {
    title: "Concert A",
    image: img1,
    totalTickets: 250,
    date: "2024-07-20",
    location: "Hollywood Bowl, Los Angeles",
    description: "An exhilarating concert with a stunning lineup of performers. It was a night to remember with vibrant energy and spectacular shows.",
  },
  {
    title: "Concert B",
    image: img2,
    totalTickets: 300,
    date: "2024-08-15",
    location: "Madison Square Garden, New York",
    description: "A fantastic concert featuring top artists. This event was a huge success with an amazing turnout and unforgettable performances.",
  },
  {
    title: "Concert C",
    image: img3,
    totalTickets: 180,
    date: "2024-09-10",
    location: "Royal Albert Hall, London",
    description: "A memorable evening of classical music and opera. The concert was well-received by an enthusiastic audience and featured renowned musicians.",
  },
  {
    title: "Concert D",
    image: img4,
    totalTickets: 400,
    date: "2024-10-05",
    location: "Sydney Opera House, Sydney",
    description: "An amazing event showcasing a variety of genres and performances. The concert received rave reviews for its diverse lineup and excellent organization.",
  },
];

const FinishedEventDetail = () => {
  return (
    <div className="p-8 bg-[#e5cab5] min-h-screen">
      <h1 className="text-4xl font-extrabold mb-6 text-center">Finished Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {finishedEvents.map((event, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            
            {/* Event Details */}
            <h2 className="text-2xl font-bold mb-2">{event.title}</h2>
            <div className="mb-2">
              <p className="text-lg font-semibold">Total Tickets Sold:</p>
              <p className="text-base">{event.totalTickets}</p>
            </div>
            
            <div className="mb-2">
              <p className="text-lg font-semibold">Date:</p>
              <p className="text-base">{event.date}</p>
            </div>

            <div className="mb-2">
              <p className="text-lg font-semibold">Location:</p>
              <p className="text-base">{event.location}</p>
            </div>

            <div>
              <p className="text-lg font-semibold">Description:</p>
              <p className="text-base">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinishedEventDetail;
