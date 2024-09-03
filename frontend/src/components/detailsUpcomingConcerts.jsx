import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

const Tickeve = () => {
  return (
    <div className="poster-and-details text-white flex">
        <img
          src="https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg"
          alt=""
          className="w-96 m-8"
        />

        <div className="poster-side-title">
          <div className="title mt-9 font-serif text-2xl text-violet-400 ml-5">
            THE TONIGHT SHOW FEATURING JIMMY FALCON
          </div>
          <div className="add-ratings flex items-center bg-slate-900 mt-5 justify-evenly h-20 rounded-xl w-5/6 ml-5">
            <div className="left">
              <div className="text-xl text-violet-200">
                Add Ratings and Reviews
              </div>
              <div className="text-16">Your ratings matter</div>
            </div>
            <div className="right">
              <button className="text-lg bg-gray-500 p-2 rounded-3xl">
                <a href="">RATE NOW</a>
              </button>
            </div>
          </div>
          <div className="book-tickets flex items-center">
            <button className="bg-violet-400 py-3 px-10 text-xl rounded-2xl font-serif mt-10 ml-7">
              <a href="">Book Tickets</a>
            </button>
          </div>
        </div>
        <div className="share bg-gray-900 flex h-10 items-center ml-24 text-3xl justify-around w-40 mt-16 border-white border-2 py-6 border-opacity-50 opacity-80 cursor-pointer">
          <FontAwesomeIcon icon={faShareAlt} />
          <p>Share</p>
        </div>
      </div>
      <div className="about-section">
        <div className="about-event-title text-white font-serif text-3xl ml-8 mt-8">
          About the Event
        </div>
        <div className="about-event-text text-white ml-8 mt-5 w-7/12">
          <div className="desc-1">
            Shastri Ji, a retired and jovial maths teacher, lives in his
            30-year-old house, filled with cherished memories of his late wife,
            Sudha. His son Nilesh and daughter-in-law Madhu, are frustrated by
            Shastri Ji`s quirks and the lack of privacy, want to move to a new
            apartment with her husband.
          </div>
          <div className="desc-2 mt-4">
            On the other hand, Ayush lives a monotonous life with his only
            sunshine mein being his long time girlfriend, Parul who is soon
            gonna be his wife. Things take a turn when Shastri ji and Ayush
            while attending a local health check-up camp are diagnosed with
            cancer.
          </div>
        </div>
      </div>
  );
};

export default Tickeve;
