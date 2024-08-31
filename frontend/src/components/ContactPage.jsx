import React, { useState } from 'react';
import contactImage from '../../public/img5.png'; // Adjust the path as necessary

const ContactPage = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission process

    // Show the popup
    setPopupVisible(true);

    // Hide the popup after a few seconds
    setTimeout(() => {
      setPopupVisible(false);
    }, 3000);
  };

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      {/* Left Side - Image */}
      {/* <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${contactImage})` }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-white text-4xl font-extrabold">Get in Touch</h1>
        </div>
      </div> */}

      {/* Right Side - Form */}
      <div className="w-1/3 flex items-center justify-center rounded-xl mb-10 p-8 bg-black"> {/* Light background color */}
        <div className="w-full max-w-lg p-8 bg-gray-200 rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6  text-center">Contact Us</h1>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-black text-lg font-serif font-medium">Name:</label>
              <input  
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-gray-400 bg-gray-200 rounded-md  "
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-black text-lg font-serif font-medium">Email:</label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-gray-400 bg-gray-200 rounded-md  "
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-black text-lg font-serif font-medium">Message:</label>
              <textarea
                id="message"
                className="mt-1 w-full px-4 py-2 border border-gray-400 bg-gray-200 rounded-md "
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 border border-gray-200 bg-gray-500     hover:bg-gray-400 text-black font-serif  text-lg  rounded-md "
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Popup Notification */}
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <p className="text-center text-lg font-semibold text-[#8C6A5D]">
              Thank you for contacting us! we will contact you  within 24 hours.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage;


