import React, { useState, useRef, useEffect } from "react";
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for the links
import bp from '../../public/r.png'
import s1 from '../../public/s1.avif'
import s2 from '../../public/s2.avif'
import s3 from '../../public/s3.avif'
import s4 from '../../public/s4.avif'
import s5 from '../../public/s5.avif'
import q1 from '../../public/q1.avif'
import q2 from '../../public/q2.avif'
import q3 from '../../public/q3.avif'
import q4 from '../../public/q4.avif'
import q5 from '../../public/q5.avif'
import v1 from '../../public/v1.avif'
import v2 from '../../public/v2.avif'
import v3 from '../../public/v3.avif'
import v4 from '../../public/v4.avif'
import v5 from '../../public/v5.avif'
import r1 from '../../public/r1.avif'
import a1 from '../../public/a1.jpg'
import a2 from '../../public/a2.avif'
import a3 from '../../public/a3.avif'
import a4 from '../../public/a4.avif'
import a5 from '../../public/a5.avif'
import home1 from '../../public/home-1.avif'
import home2 from '../../public/home-2.avif'

const Home = () => {
    const [isChatbotOpen, setChatbotOpen] = useState(false);
    const chatbotRef = useRef(null);
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const images = [home1, home2,r1 ]; // Add your image sources here
    const [currentIndex, setCurrentIndex] = useState(0);

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


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change the image every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [images.length]);








    const handleSearch = () => {
        console.log('Search for movies/shows');
        // Implement search functionality here
    };

    const handleCitySearch = () => {
        console.log('Search for city:', city);
        // Implement city search functionality here
        setCity("");
    };


    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    return (
        <>
            <div className=" ">
                <header className=" bg-cover rounded-xl bg-center p-4 flex items-center justify-center space-x-8">
                    <div className="flex items-center space-x-4 relative">
                        <input
                            type="text"
                            placeholder="Search for movies or shows"
                            className="p-2 px-[123px] border border-gray-300 rounded-lg"
                        />
                        <button
                            onClick={handleSearch}
                            className="absolute right-0 top-0 bottom-0 p-2 bg-black text-white rounded-lg"
                        >
                            <SearchIcon />
                        </button>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <input
                                type="text"
                                value={city}
                                onChange={handleCityChange}
                                placeholder="Enter your city"
                                className="p-2 pr-10 border border-gray-300 rounded-lg"
                            />
                            <button
                                onClick={handleCitySearch}
                                className="absolute right-0 top-0 bottom-0 p-2 bg-black text-white rounded-lg"
                            >
                                <SearchIcon />
                            </button>
                        </div>
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                            className="p-2 border border-gray-300 rounded-lg"
                        />
                    </div>
                </header>



                <div className="relative w-full mt-10 overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Image ${index + 1}`}
                        className="w-full flex-none border rounded-2xl h-auto"
                    />
                ))}
            </div>
        </div>



                <main className=" ">
                    <div className="mt-[65px]">
                        <div className="flex items-left justify-left pl-20 text-black ">
                            <span className="text-2xl font-bold ml-3">Recommended Shows</span>

                        </div>
                    </div>


                    {/*  Image */}
                    <div className=" flex justify-center h-96   flex-row gap-5 px-0  mt-4">

                        <Link to="/book">
                        <img className="h-96  mr-4 border rounded-xl"  src={s1} alt="Slide 1" /> 
                        </Link>

                        <Link to="/book">   

                        <img className="  h-96    mr-4  border rounded-xl" src={s2} alt="Slide 2" />
                        </Link>
                        <Link to="/book">
                        
                        <img className="w-  h-96  mr-4 border rounded-xl" src={s3} alt="Slide 3" />
                        </Link>
                        
                        <Link to="/book">

                        <img className=" h-96 mr-4 border rounded-xl" src={s4} alt="Slide 4" />
                        </Link>
                        <Link to="/book">
                        <img className=" h-96  mr-4 border rounded-xl" src={s5} alt="Slide 5" />
                        </Link>

                    </div>

                    <div className="flex items-center text-3xl justify-left pl-20 text-black mt-32">
                        <span className="text-2xl font-bold ml-3"><Link to="/live">The Best Live Events
                        </Link></span>
                    </div>


                    {/* Images and Buttons Section */}
                    {/* <div className=" flex justify-center items-center flex-row"> */}
                    <div className=" flex justify-center items-center flex-row px-20 py-4 gap-10 ">

                        <img className="border rounded-xl" src={q1} alt="Image 1" />
                        <img className="border rounded-xl" src={q2} alt="Image 2" />
                        <img className="border rounded-xl" src={q3} alt="Image 3" />
                        <img className="border rounded-xl" src={q4} alt="Image 4" />
                        {/* <img className="border rounded-xl" src={q5} alt="Image 5" /> */}

                    </div>
                    {/* </div> */}


                    <div className="flex items-center text-3xl justify-left pl-20 text-black mt-32">
                        <span className="text-2xl font-bold ml-3">
                            <Link to="/Concert/:id">Upcoming Events
                            </Link>
                        </span>
                    </div>


                    <div className="  flex justify-center  h-96  flex-row gap-5   mt-4 ">

                        <Link to="/book">
                        <img className=" h-96  mr-4 border rounded-xl" src={v1} alt="Image 1" />
                        </Link>
                        <Link to="/book">
                        <img className=" h-96 mr-4 border rounded-xl" src={v2} alt="Image 2" />
                        </Link>
                        
                        
                        <Link to="/book">
                        <img className=" h-96 mr-4 border rounded-xl" src={v3} alt="Image 3" />
                        </Link>
                        
                        <Link to="/book">
                        <img className=" h-96 mr-4 border rounded-xl" src={v4} alt="Image 4" />
                        </Link>
                        
                        <Link to="/book">
                        <img className=" h-96 mr-4 border rounded-xl" src={v5} alt="Image 5" />
                        </Link>
                        
                    </div>


                    <div className="flex items-center text-3xl justify-left pl-20 text-black mt-32">
                        <span className="text-2xl font-bold ml-3">
                            <Link to="/finish">Finished shows</Link>
                            </span>
                    </div>


                    <div className="  flex justify-center h-96  flex-row gap-5   mt-4 ">
                        <img className=" mr-4 border rounded-xl" src={a1} alt="Image 1" />
                        <img className=" mr-4 border rounded-xl" src={a2} alt="Image 2" />
                        <img className=" mr-4 border rounded-xl" src={a3} alt="Image 3" />
                        <img className=" mr-4 border rounded-xl" src={a4} alt="Image 4" />
                        <img className=" mr-4 border rounded-xl" src={a5} alt="Image 5" />
                    </div>  


                    





                    <div className="flex items-center text-3xl justify-left pl-20 text-black mt-32">
                        <span className="text-2xl font-bold ml-3">Trending searches right now</span>
                    </div>

                    <div className="p-4">
                        
                        <div className="grid grid-cols-8 gap-4 mr-12">
                            <div className=" border rounded-xl border-black p-2 flex items-center justify-center">
                                <span>Movies:Rajni</span>
                            </div>
                            <div className=" border rounded-xl border-black p-2 flex items-center justify-center">
                                <span>Shows:Sartaj</span>
                            </div>
                            <div className=" border rounded-xl border-black p-2 flex items-center justify-center">
                                <span>Music:Classical</span>
                            </div>
                            <div className=" border rounded-xl border-black p-2 flex items-center justify-center">
                                <span>Shows:Comedy</span>
                            </div>
                        </div>
                    </div>






                </main>




                {/* Chatbot Button */}
                <div className="fixed bottom-4 right-4">
                    <button
                        className="bg-gray-400 text-white py-2 px-4 rounded-full shadow-lg"
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

                        </div>
                    </div>
                )}

            </div>
        <footer className="flex flex-col items-center justify-center mt-20">
    <div className="h-full w-full  bg-gradient-to-b from-[#000000] to-[#d5c8f5]  text-white border border-gray-600 rounded-xl flex flex-col items-center justify-center font-serif p-6">
      <div className="text-4xl font-bold mt-10">Be the first to get access</div>
      <div className="text-xl mt-4 text-center font-serif text-gray-200">
        You can't wait any longer, just like us?<br />
        Then sign up to our waitlist to be one of the Tickeve users.
      </div>

      <div className='text-center mt-12'>
        <input
          className='py-3 px-10 font-serif mr-3 rounded-xl pr-14 text-center text-white bg-[#1b1b1b]'
          type='Email'
          placeholder='Email Address'
        />
        <Link to="Concert/:id"
          className='px-6 py-4 bg-[#2a2a2c] text-white rounded-xl'>
          Join Waitlist
        </Link>
      </div>

      <hr className="w-full border-gray-900 mt-6" />
      <div className="w-full text-white font-serif flex mt-6">
        <p className='w-full text-left text-[#efeff3] text-3xl'>
          Tickeve
          <br />
          <span className='text-xl'>@ 2024</span>
        </p>
        <p className='w-full text-right text-[#f3f3f8]'>
          <Link to="/home/contact">Contact us: info@tickeve.com</Link>
          <br />Privacy Policy | Terms of Service
        </p>
      </div>
    </div>
  </footer>
        </>
    );
}

export default Home;
