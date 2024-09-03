import React from "react";
import { Link } from "react-router-dom"; 
import img1 from '../../public/arijit2.jpg';
import img2 from '../../public/armaan2.jpg';
import img3 from '../../public/aakash.jpg';
import img4 from '../../public/shashi.jpg';
import img5 from '../../public/aujla2.jpeg';
import img6 from '../../public/bassi.jpg';
//import './bg.css'


const HomePage = () => {
  return (
    <div className="bg-white min-h-screen text-white p-0 m-0">
      <div className="finished-shows">
  
        {/* First Row */}
        <div className="line  flex flex-row justify-center bg-white m-auto w-1/3 mt-4">
        
          {/* Arijit Singh Show */}
          <div className="tile bg-slate-900   border rounded-xl text-white flex flex-col items-center m-4">
            <img
              src={img1}
              alt="Arijit Singh Show"
              className="w-72 h-40 object-cover border rounded-xl" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-white-400 font-serif text-center">
                Concert A - Arijit Singh Show
              </div>
              <div className="desc font-serif text-white-200 text-center mt-1">
                Experience the soulful melodies of Arijit Singh live, as he brings his mesmerizing
                voice to the stage, captivating audiences with his heartfelt performances.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/Detail"
                  className="bg-black text-white-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Armaan Malik Show */}
          <div className="tile bg-slate-900 border rounded-xl text-white flex flex-col items-center m-4">
            <img
              src={img2}
              alt="Armaan Malik"
              className="w-72 h-40 object-cover border rounded-xl " // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-white-400 font-serif text-center">
                Concert B - Armaan Malik Show
              </div>
              <div className="desc font-serif text-white-200 text-center mt-1">
                Get ready to groove with Armaan Malik's electrifying live performance,
                filled with her chart-topping hits and infectious energy.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/Detail"
                  className="bg-black text-white-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Akash Gupta Show */}
          <div className="tile bg-slate-900 border rounded-xl text-white flex flex-col items-center m-4">
            <img
              src={img3}
              alt="Akash Gupta Show"
              className="w-72 h-40 object-cover border rounded-xl" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-white-400 font-serif text-center">
                Concert C - Akash Gupta Show
              </div>
              <div className="desc font-serif text-white-200 text-center mt-1">
                Laugh out loud with Akash Gupta's hilarious stand-up comedy, where everyday life meets
                side-splitting humor and witty observations.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/Detail"
                  className="bg-black text-white-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="line flex flex-row justify-center bg-white  m-auto w-1/3 mt-4">
          {/* Shashi Dhiman Show */}
          <div className="tile bg-slate-900 border rounded-xl text-white flex flex-col items-center m-4">
            <img
              src={img4}
              alt="Shashi Dhiman Show"
              className="w-72 h-40 object-cover border rounded-xl" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-white-400 font-serif text-center">
                Concert D - Shashi Dhiman Show
              </div>
              <div className="desc font-serif text-white-200 text-center mt-1">
                Experience the wit and charm of Shashi Dhiman as he delivers punchlines that
                will leave you in stitches and wanting more.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/Detail"
                  className="bg-black text-white-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Karan Aujla Show */}
          <div className="tile bg-slate-900 border rounded-xl text-white flex flex-col items-center m-4">
            <img
              src={img5}
              alt="Karan Aujla Show"
              className="w-72 h-40 border rounded-xl object-cover" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-white-400 font-serif text-center">
                Concert E - Karan Aujla Show
              </div>
              <div className="desc font-serif text-white-200 text-center mt-1">
                Get ready for an electrifying night with Karan Aujla, as he brings his
                high-energy Punjabi beats and hit tracks to the stage.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/Detail"
                  className="bg-black text-white-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Anubhav Bassi Show */}
          <div className="tile bg-slate-900 border rounded-xl text-white flex flex-col items-center m-4">
            <img
              src={img6}
              alt="Anubhav Bassi Show"
              className="w-72 h-40 object-cover border rounded-xl" // Ensure consistent height
            />
            <div className="textt w-72 mt-2">
              <div className="title text-white-400 font-serif text-center">
                Concert F - Anubhav Bassi Show
              </div>
              <div className="desc font-serif text-white-200 text-center mt-1">
                Laugh out loud with Anubhav Bassi as he takes you on a hilarious journey
                through his witty anecdotes and relatable stories.
              </div>
              <div className="flex justify-center mt-2">
                <Link
                  to="/Detail"
                  className="bg-black text-white-300 p-2 font-serif rounded-xl details-button"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
