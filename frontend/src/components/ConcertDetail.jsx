import React, { useState } from 'react';
import img3 from '../../public/img3.webp';


const ConcertDetail = () => {
  const [ticketQuantity, setTicketQuantity] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [studentID, setStudentID] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('upi');
  const [ticketType, setTicketType] = useState('basic'); // New state for ticket type

  // Sample concert data
  const concert = {
    title: "Concert A",
    image: img3,
    price: {
      basic: 50,
      low: 75,
      premium: 100
    },
    totalSeats: 200,
    availableSeats: 150,
    slots: "6:00 PM, 8:00 PM",
  };

  const handleQuantityChange = (e) => {
    setTicketQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle ticket purchase logic here
    console.log('Ticket Type:', ticketType); // Added ticket type to log
    console.log('Ticket Quantity:', ticketQuantity);
    console.log('Coupon Code:', couponCode);
    console.log('Student ID:', studentID);
    console.log('Payment Method:', paymentMethod);
    // Redirect or show a confirmation message
  };

  return (
    <div className="upcoming-shows bg-black">
    <div className="line flex bg-black m-auto w-11/12 mt-2">
        <div className="tile-1 bg-slate-900 text-white flex m-4">
            <div className="left">
                <img src="https://ticketeve.vercel.app/assets/img3-Qnv1O0WQ.webp" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert A - Arijit Singh Show</div>
                    <div className="desc font-serif text-wrap text-violet-200">For die heart fans of Arijit Singh as he is going to perform the most intriguing songs he has ever had...</div>
                </div>
                <div className="rightt-2 flex justify-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
        <div className="tile-2 bg-slate-900 text-white flex m-4">
            <div className="left">
                <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1645438549/qz8jfwv53q0es99epiae.jpg" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert B - Zakir Khan Show</div>
                    <div className="desc font-serif text-wrap text-violet-200">For fans who love Stand-Up Comedy and love to get in the realms of crowdwork and funny stories...</div>
                </div>
                <div className="rightt-2 flex justify-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
    </div>
    <div className="line flex bg-black m-auto w-11/12 mt-2">
        <div className="tile-1 bg-slate-900 text-white flex m-4">
            <div className="left">
                <img src="https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert C - Diljit Dosanjh Concert</div>
                    <div className="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ut rerum magni molestias...</div>
                </div>
                <div className="rightt-2 flex justify-center items-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
        <div className="tile-2 bg-slate-900 text-white flex m-4">
            <div className="left flex items-center">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00405942-amnmqenlfx-landscape.jpg" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert D - Karan Aujla Show</div>
                    <div className="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum delectus dignissimos quo autem...</div>
                </div>
                <div className="rightt-2 flex justify-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
    </div>
      <div className="line flex bg-black m-auto w-11/12 mt-2">
        <div className="tile-1 bg-slate-900 text-white flex m-4">
            <div className="left">
                <img src="https://ticketeve.vercel.app/assets/img3-Qnv1O0WQ.webp" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert A - Arijit Singh Show</div>
                    <div className="desc font-serif text-wrap text-violet-200">For die heart fans of Arijit Singh as he is going to perform the most intriguing songs he has ever had...</div>
                </div>
                <div className="rightt-2 flex justify-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
        <div className="tile-2 bg-slate-900 text-white flex m-4">
            <div className="left">
                <img src="https://media.insider.in/image/upload/c_crop,g_custom/v1645438549/qz8jfwv53q0es99epiae.jpg" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert B - Zakir Khan Show</div>
                    <div className="desc font-serif text-wrap text-violet-200">For fans who love Stand-Up Comedy and love to get in the realms of crowdwork and funny stories...</div>
                </div>
                <div className="rightt-2 flex justify-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
    </div>
    <div className="line flex bg-black m-auto w-11/12 mt-2">
        <div className="tile-1 bg-slate-900 text-white flex m-4">
            <div className="left">
                <img src="https://www.thestatesman.com/wp-content/uploads/2024/06/Diljit-Dosanjh-sparks-Bhangra-frenzy-on-The-Tonight-Show-Starring-Jimmy-Fallon-1024x683.jpg" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert C - Diljit Dosanjh Concert</div>
                    <div className="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet dolorum ut rerum magni molestias...</div>
                </div>
                <div className="rightt-2 flex justify-center items-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
        <div className="tile-2 bg-slate-900 text-white flex m-4">
            <div className="left flex items-center">
                <img src="https://assets-in.bmscdn.com/discovery-catalog/events/et00405942-amnmqenlfx-landscape.jpg" alt="" className="w-72 p-2" />
            </div>
            <div className="right">
                <div className="textt w-80 m-2">
                    <div className="title text-violet-400 font-serif">Concert D - Karan Aujla Show</div>
                    <div className="desc font-serif text-wrap text-violet-200">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ipsum delectus dignissimos quo autem...</div>
                </div>
                <div className="rightt-2 flex justify-center">
                    <a href="detailsUpcomingConcerts.html" className="bg-black text-violet-300 p-2 font-serif mb-4 rounded-xl details-button">Details</a>
                </div>
            </div>
        </div>
    </div>
</div>
  );
};

export default ConcertDetail;
