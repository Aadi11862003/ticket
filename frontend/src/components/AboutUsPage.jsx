import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#e5cab5] p-8">
      <div className="max-w-4xl w-full bg-white border border-[#D1D1D1] rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-center text-[#4B0082] mb-6">About Us</h1>
        <p className="text-lg text-[#4B0082] mb-4 border-l-4 border-[#7B68EE] pl-4 bg-[#E6E6FA] rounded-md">
          Welcome to Tickeve, your go-to platform for discovering and attending the best concerts and live performances. 
          Our mission is to connect music lovers with the artists they adore by providing an easy-to-use platform to browse and book tickets for upcoming events.
        </p>
        <p className="text-lg text-[#4B0082] mb-4 border-l-4 border-[#7B68EE] pl-4 bg-[#E6E6FA] rounded-md">
          At Tickeve, we believe that music has the power to bring people together. Whether you're into rock, pop, jazz, or classical, we have something for everyone.
          Our platform is designed with simplicity and ease of use in mind, ensuring that you can find and book tickets for your favorite events without any hassle.
        </p>
        <h2 className="text-2xl font-semibold text-[#4B0082] mb-4">Our Team</h2>
        <p className="text-lg text-[#4B0082] mb-4 border-l-4 border-[#7B68EE] pl-4 bg-[#E6E6FA] rounded-md">
          We are a passionate team of music enthusiasts, developers, and designers dedicated to making concert-going a seamless and enjoyable experience for all. 
          Our diverse team brings together expertise from various fields to deliver a platform that is both innovative and user-friendly.
        </p>
        <h2 className="text-2xl font-semibold text-[#4B0082] mb-4">Our Vision</h2>
        <p className="text-lg text-[#4B0082] mb-4 border-l-4 border-[#7B68EE] pl-4 bg-[#E6E6FA] rounded-md">
          Our vision is to become the leading platform for live music experiences worldwide. We aim to build a community where music lovers can easily connect with their favorite artists and discover new talent.
        </p>
        <h2 className="text-2xl font-semibold text-[#4B0082] mb-4">Contact Us</h2>
        <p className="text-lg text-[#4B0082] mb-4 border-l-4 border-[#7B68EE] pl-4 bg-[#E6E6FA] rounded-md">
          Have questions or need support? Reach out to our friendly customer service team at <a href="mailto:support@Tickeve.com" className="text-[#8A2BE2] hover:underline">support@Tickeve.com</a>. We’re here to help!
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;

