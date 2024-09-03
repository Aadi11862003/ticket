import React from 'react';
import liveEventImage from '../../public/Setting.png'; // Replace with the actual image path

const LiveEventsPage = () => {
  return (
    <div className="p-8 bg-[#white] min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-extrabold mb-8  mr-15 text-center"> No Live Events...</h1>
      <div className="w-64 h-64">
        <img
          src={liveEventImage}
          alt="Live Events"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default LiveEventsPage;
