import React, { useState, useRef, useEffect } from 'react';
import bp from '../../public/r.png'
import set from '../../public/set1.png'

const FrontPage = () => {
  const [isChatbotOpen, setChatbotOpen] = useState(false);
  const chatbotRef = useRef(null);

  const toggleChatbot = () => {
    setChatbotOpen(!isChatbotOpen);
  };

  const handleClickOutside = (event) => {
    if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
      setChatbotOpen(false);
    }
  };

  useEffect(() => {
    if (isChatbotOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatbotOpen]);

  return (
    <>
      <div className="flex flex-col n">
        <header
          className=" bg-cover rounded-xl bg-center"
        // style={{
        //   backgroundImage: 'url("banner1.png")',
        //   width: '1376px',
        //   height: '460px',


        // }}
        >
          {/* <div className="container mx-auto h-full flex flex-col justify-end items-start text-white p-6">
            <a
              href="login"
              className="bg-[#2C9CF0] text-white py-5 px-12 rounded-full"
              style={{
                marginBottom: '40px',
                marginLeft: '45px',
              }}
            >
              Book Tickets
            </a>
          </div> */}
        </header>
        <div className='flex justify-center items-center mt-10' >
          <img src={bp}></img>
          <h1 class="absolute text-7xl ml-96 mb-52 w-72 text-center font-serif">Welcome to Tickeve</h1>
          </div>

        <main className="fle">
          {/* Browser By Category Section */}
          <div
            className=" bg-white p-6"
            style={{

            }}
          >
            <div className='bg-[#d4d6d9] rounded-lg '>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold ml-3">Browser By Category</span>
                <a
                  href="#"
                  className="bg-blue-500 mr-3 rounded-xl text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  See More
                </a>
              </div>
            </div>
          </div>

          {/* Second Image */}
          {/* <div
            className=" bg-cover rounded-xl bg-center flex justify-center items-center mt-10"
            style={{
              backgroundImage: 'url("set1.png")',
              width: '1238px',
              height: '271px',

              top: '750px',
              left: '102px',
            }}
          ></div> */}

          <div className='flex justify-center items-center mt-2' >
            <img src={set}></img>
            </div>

          {/* Buttons Section */}
          <div
            className=" flex justify-between mt-5 mx-auto">
          </div>
          <div class="flex justify-center gap-56 ">

            <button className="bg-[#000000] text-white py-1 px-8 rounded-xl">
              concert
            </button>
            <button className="bg-[#000000] text-white py-1 px-8 rounded-xl">
              sports
            </button>
            <button className="bg-[#000000] text-white py-1 px-8 rounded-xl">
              theater
            </button>
            <button className="bg-[#000000] text-white py-1 px-8 rounded-xl">
              family
            </button>
          </div>

          {/* Top Picks Near You Section */}
          <div
            className=" bg-white p-6"
            style={{


            }}
          > <div className="bg-[#d4d6d9] rounded-xl">
              <div className="flex items-center justify-between">
                <span className="text-2xl ml-3 font-bold">Top Picks Near You</span>
                <a
                  href="#"
                  className="bg-blue-500 text-white py-2 px-7 mr-3 rounded-xl  hover:bg-blue-600"
                >
                  Filter
                </a>
              </div>
            </div>
          </div>

          {/* Images and Buttons Section */}
          <div
            className=" flex flex-col space-y-6"
            style={{

              top: '1200px',
              left: '102px',
              width: '1238px',
            }}
          >
            {/* Image 1 */}
            <div className="flex justify-between items-center ml-24">
              <img
                src="dj.jpeg" // Replace with your first image URL
                alt="Image 1"
                className="w-64 h-auto object-cover rounded-xl"
              />
              <p>Aug-13</p>
              <p>su-10:00am - 12:00pm</p>
              <p><b>Elements music and arts festival - Sunday</b></p>
              <p>Pune</p>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="border border-blue-600 text-blue-600 py-2 px-4 rounded-full"
                >
                  View Details
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex justify-between items-center ml-24">
              <img
                src="dj1.webp" // Replace with your second image URL
                alt="Image 2"
                className="w-64 h-auto object-cover rounded-xl"
              />
              <p>Aug-14</p>
              <p>mon-10:00am - 12:00pm</p>
              <p><b>Elements music and arts festival - monday</b></p>
              <p>Banglore</p>
              <div className="flex flex-col space-y-4 ">
                <a
                  href="#"
                  className="border border-blue-600 text-blue-600 py-2 px-4 rounded-full"
                >
                  View Details
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Image 3 */}
            <div className="flex justify-between items-center ml-24 ">
              <img
                src="dj2.jpeg" // Replace with your third image URL
                alt="Image 3"
                className="w-64 h-auto object-cover rounded-xl"
              />
              <p>Aug-15</p>
              <p>Tues-10:00am - 12:00pm</p>
              <p><b>Elements music and arts festival - Tuesday</b></p>
              <p>Delhi</p>
              <div className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="border border-blue-600 text-blue-600 py-2 px-4 rounded-full"
                >
                  View Details
                </a>
                <a
                  href="#"
                  className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600"
                >
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Footer Section */}
        <div>

        </div>



        {/* Chatbot Button */}
        <div className="fixed bottom-4 right-4">
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded-full shadow-lg"
            onClick={toggleChatbot}
          >
            Chat
          </button>
        </div>

        {/* Chatbot */}
        {isChatbotOpen && (
          <div
            ref={chatbotRef}
            className="fixed bottom-16 right-4 bg-white shadow-lg rounded-lg p-4 border border-gray-300"
          >
            <div className="flex justify-between items-center">
              <span className="font-bold">Chatbot</span>
              <button onClick={toggleChatbot} className="text-gray-600">
                &times;
              </button>
            </div>
            <div className="mt-2">
              {/* Chatbot content goes here */}
            </div>
          </div>
        )}

      </div>
      <footer className="bg-[#04092C] text-white p-8 mt-10 flex justify-between items-center">
        <div className="text-left">
          <h2 className="text-2xl font-bold">TickEve</h2>
        </div>
        <div className="text-right">
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Event Street, Pune</p>
          <p>Email: support@tickeve.com</p>
          <p>Working Days: Mon - Fri, 9am - 6pm</p>
          <p className="text-sm mt-4">&copy; 2024 TickEve. All rights reserved.</p>
        </div>
      </footer>
    </>

  );
};

export default FrontPage;


