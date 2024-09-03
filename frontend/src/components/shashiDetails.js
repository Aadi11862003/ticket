import React, { useState, useEffect } from "react";
import img2 from "../../public/shashi.jpg"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTicketAlt, faCalendarAlt, faClock, faUser, faHourglassHalf, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import './finished.css';

const Finished = () => {
  const [visibleDetail, setVisibleDetail] = useState(0);
  const [visibleDescription, setVisibleDescription] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (visibleDetail < 6) {
      const timer = setTimeout(() => {
        setVisibleDetail(visibleDetail + 1);
      }, 300); 
      return () => clearTimeout(timer); 
    } else {
      const descriptionTimer = setTimeout(() => {
        setVisibleDescription(true);
      }, 1000); 
      return () => clearTimeout(descriptionTimer);
    }
  }, [visibleDetail]);

  const handleImageClick = () => {
    setShowVideo(true);
  };

  return (
    <div className="bg-black min-h-screen text-white flex flex-col items-center justify-center py-8">
      <div className="flex flex-col md:flex-row items-start justify-center w-11/12 max-w-5xl">
        
        {/* Image and Description Section */}
        <div className="flex flex-col items-center w-full md:w-1/2 lg:w-3/5">
          {!showVideo ? (
            <img
              src={img2}
              alt="Shashi Dhiman Show"
              className="w-full h-auto max-w-md rounded-lg shadow-lg cursor-pointer mb-4"
              onClick={handleImageClick}
            />
          ) : (
            <div className="w-full h-auto max-w-md rounded-lg shadow-lg mb-4">
            <iframe width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/rj4BiSD9vtY?si=GCjLArl2rbv785U9"
             title="YouTube video player" frameborder="0" allow="accelerometer;
              autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;
               web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          )}

          {/* Description directly below the image/video */}
          {visibleDescription && (
            <p className="underline underline-offset-4 text-lg text-white mt-4">
              <span className="font-bold">About:</span> 
            </p>
          )}

          {visibleDescription && (
            <p className="text-lg text-white mt-4">
              <span>Experience the laughter and wit
             of Shashi Dhiman's stand-up comedy, a show that captivated audiences with his sharp
              humor and relatable anecdotes. Held recently, Shashi's performance brought joy and
               endless laughter, showcasing his exceptional talent in turning everyday moments into
                hilarious, unforgettable comedy.</span> 
              <hr className="my-4 w-full mx-auto border-t border-gray-200" />
            </p>
          )}
          {visibleDescription && (
            <p className="underline underline-offset-4 text-lg text-white mt-4">
              <span className="font-bold">About the Artist:</span>
            </p>
          )}
          {visibleDescription && (
          <p className="text-lg text-white mt-4">
              <span>Shashi Dhiman is a creative professional known for blending innovation with
               practical solutions. With expertise in design and technology, Shashi excels in
                delivering impactful projects that balance aesthetics and functionality.
                 Passionate about continuous learning, Shashi remains committed to driving
                  excellence and inspiring others in the field.</span> 
            </p>
          )}
        </div>

        {/* Event Details Section */}
        
        <div className="p-6 w-full md:w-1/2 lg:w-2/5 text-center md:text-left">
        
          <div className="p-6 rounded-lg shadow-lg">
          <div className="space-y-4">
          <div className="border border-gray-200 rounded-lg p-4 max-w-ms">
            <div className="mb-6 md:mb-0">
              <h1 className="title font-size-30px text-3xl font-bold text-violet-300">Cars Chandigarh & Influencers</h1>
            </div>

            {visibleDetail >= 1 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faTicketAlt} className="text-violet-200 mr-2" />
                400
              </p>
            )}
            {visibleDetail >= 2 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-violet-200 mr-2" />
                22th March 2024
              </p>
            )}
            {visibleDetail >= 3 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faClock} className="text-violet-200 mr-2" />
                6:00 PM - 7:30 PM
    
              </p>
            )}
            </div>
            <div className="border border-gray-200 rounded-lg p-4 max-w-ms">
            <p className="text-xl text-violet-300 font-semibold mb-2">Event Guide
            <hr className="my-4 w-3/4 border-t border-gray-200" />
            </p>
            
            {visibleDetail >= 5 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faHourglassHalf} className="text-violet-200 mr-2" />
                1 hour 30 min
              </p>
            )}

            {visibleDetail >= 4 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faUser} className="text-violet-200 mr-2" />
                16 years+
              </p>
            )}
            {visibleDetail >= 6 && (
              <p className="text-lg mb-4 flex items-center transition-opacity duration-500">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-violet-200 mr-2" />
                Chandigarh
              </p>
            )}
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finished;


