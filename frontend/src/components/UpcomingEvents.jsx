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
    <div class="upcoming-shows">
        <div class="line flex bg-black m-auto w-11/12 mt-2">
            <div class="tile-1 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://ticketeve.vercel.app/assets/img3-Qnv1O0WQ.webp" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert A - Arijit Singh Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">For die heart fans of Arijit Singh as he is going to perform the most intriguing songs he has ever had...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
            <div class="tile-2 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1645438549/qz8jfwv53q0es99epiae.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert B - Zakir Khan Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">For fans who love Stand-Up Comedy and love to get in the realms of crowdwork and funny stories...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="line flex bg-black m-auto w-11/12 mt-2">
            <div class="tile-1 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert C - Diljit Dosanjh Concert</div>
                        <div class="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ut rerum magni molestias...</div>
                    </div>
                    <div class="rightt-2 flex justify-center items-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
            <div class="tile-2 bg-slate-900 text-white flex m-4">
                <div class="left flex items-center">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00405942-amnmqenlfx-landscape.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert D - Karan Aujla Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum delectus dignissimos quo autem...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="line flex bg-black m-auto w-11/12 mt-2">
            <div class="tile-1 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://ticketeve.vercel.app/assets/img3-Qnv1O0WQ.webp" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert A - Arijit Singh Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">For die heart fans of Arijit Singh as he is going to perform the most intriguing songs he has ever had...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
            <div class="tile-2 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1645438549/qz8jfwv53q0es99epiae.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert B - Zakir Khan Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">For fans who love Stand-Up Comedy and love to get in the realms of crowdwork and funny stories...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="line flex bg-black m-auto w-11/12 mt-2">
            <div class="tile-1 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert C - Diljit Dosanjh Concert</div>
                        <div class="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ut rerum magni molestias...</div>
                    </div>
                    <div class="rightt-2 flex justify-center items-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
            <div class="tile-2 bg-slate-900 text-white flex m-4">
                <div class="left flex items-center">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00405942-amnmqenlfx-landscape.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert D - Karan Aujla Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum delectus dignissimos quo autem...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="line flex bg-black m-auto w-11/12 mt-2">
            <div class="tile-1 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://ticketeve.vercel.app/assets/img3-Qnv1O0WQ.webp" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert A - Arijit Singh Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">For die heart fans of Arijit Singh as he is going to perform the most intriguing songs he has ever had...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
            <div class="tile-2 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1645438549/qz8jfwv53q0es99epiae.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert B - Zakir Khan Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">For fans who love Stand-Up Comedy and love to get in the realms of crowdwork and funny stories...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="line flex bg-black m-auto w-11/12 mt-2">
            <div class="tile-1 bg-slate-900 text-white flex m-4">
                <div class="left">
                    <img src="https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert C - Diljit Dosanjh Concert</div>
                        <div class="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ut rerum magni molestias...</div>
                    </div>
                    <div class="rightt-2 flex justify-center items-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
            <div class="tile-2 bg-slate-900 text-white flex m-4">
                <div class="left flex items-center">
                    <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00405942-amnmqenlfx-landscape.jpg" alt="" class="w-72 p-2">
                </div>
                <div class="right">
                    <div class="textt w-80 m-2">
                        <div class="title text-violet-400 font-serif ">Concert D - Karan Aujla Show</div>
                        <div class="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum delectus dignissimos quo autem...</div>
                    </div>
                    <div class="rightt-2 flex justify-center">
                        <a href="detailsUpcomingConcerts.html" class="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default UpcomingEvents;


