import React from 'react';
import contactImage from '../../public/img5.png'; // Adjust the path as necessary

const ContactPage = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Image */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${contactImage})` }}>
        {/* Optional: Add overlay for better text visibility */}
        <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
          <h1 className="text-white text-4xl font-extrabold">Get in Touch</h1>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center p-8 bg-[#F5EDE7]"> {/* Light background color */}
        <div className="w-full max-w-lg p-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-4xl font-extrabold mb-6 text-center text-[#8C6A5D]">Contact Us</h1>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#8C6A5D] text-lg font-medium">Name:</label>
              <input
                type="text"
                id="name"
                className="mt-1 w-full px-4 py-2 border border-[#8C6A5D] rounded-md shadow-sm focus:ring-2 focus:ring-[#8C6A5D] focus:border-[#8C6A5D] transition duration-300"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-[#8C6A5D] text-lg font-medium">Email:</label>
              <input
                type="email"
                id="email"
                className="mt-1 w-full px-4 py-2 border border-[#8C6A5D] rounded-md shadow-sm focus:ring-2 focus:ring-[#8C6A5D] focus:border-[#8C6A5D] transition duration-300"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-[#8C6A5D] text-lg font-medium">Message:</label>
              <textarea
                id="message"
                className="mt-1 w-full px-4 py-2 border border-[#8C6A5D] rounded-md shadow-sm focus:ring-2 focus:ring-[#8C6A5D] focus:border-[#8C6A5D] transition duration-300"
                placeholder="Your Message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-[#8C6A5D] text-white font-semibold rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-[#8C6A5D] transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;




