import React, { useState, useRef, useEffect } from 'react';

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
    <div className="frontpage">
      <header className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("img.jpg")' }}>
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to ConcertHub</h1>
          <p className="mt-4 text-xl">Book your tickets for the best shows in town</p>
          <a href="login" className="mt-6 bg-red-500 text-white py-3 px-6 rounded-full hover:bg-red-600">Book Tickets</a>
        </div>
      </header>

      {/* Chatbot Button */}
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleChatbot}
          className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg hover:bg-blue-600"
        >
          Chat with Us
        </button>
      </div>

      {/* Chatbot Modal */}
      {isChatbotOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div
            ref={chatbotRef}
            className="bg-white p-4 rounded-lg shadow-lg w-80 h-96 relative"
          >
            <button
              onClick={toggleChatbot}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              &times;
            </button>
            <h2 className="text-lg font-bold mb-4">AI Chatbot</h2>
            {/* Chatbot Interface */}
            <div className="flex flex-col h-full">
              <div className="flex-1 overflow-auto p-2 border border-gray-300 rounded-lg bg-gray-100">
                {/* Messages will be displayed here */}
                <p className="text-gray-700">Hello! How can I assist you today?</p>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  className="flex-1 p-2 border border-gray-300 rounded-lg"
                  placeholder="Type your message..."
                />
                <button
                  type="button"
                  className="ml-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Add more sections like Prices, Places, etc. */}
    </div>
  );
};

export default FrontPage;


