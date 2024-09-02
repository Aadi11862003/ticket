import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="bg-[#000000] p-4 shadow-lg">
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="text-white text-3xl font-bold px-6">Tickeve</div>
          </Link>
          <div className="flex items-center space-x-10 relative">
            {/* <Link to="/" className="text-white">
              Home
            </Link> */}

            <div className="px-34 text-lg ">
              <button
                onClick={handleDropdownClick}
                className="text-white focus:outline-none"
              >
                Shows
              </button>
              {showDropdown && (
                <div
                  ref={dropdownRef}
                  className="absolute left-0 mt-2 bg-gray-700 text-white rounded-md shadow-lg w-48"
                >
                  <ul className="py-1">
                    <li>
                      <Link
                        to="https://aashwinxgarg.github.io/Tickeve-frontend-designs/"
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={() => setShowDropdown(false)}
                      >
                        Upcoming Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/live"
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={() => setShowDropdown(false)}
                      >
                        Live Events
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/finish"
                        className="block px-4 py-2 hover:bg-gray-600"
                        onClick={() => setShowDropdown(false)}
                      >
                        Finished Events
                      </Link>
                    </li>
                    
                  </ul>
                </div>
              )}
            <Link to="/about" className="text-white  px-8">
              About
            </Link>

            <Link to="/price" className="text-white  ">
              Price
            </Link>
            
          </div>
          
            {/* <Link to="/contact" className="text-white">
              Contact
            </Link> */}
            {/* <Link
              to="/login"
              className="text-white py-2 px-5 rounded-xl bg-[#2C9CF0]"
            >
              Login
            </Link> */}
            <Link
              to="/signup"
              className="text-white py-2 px-5 rounded-xl border border-white"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* <div className="flex justify-between items-center bg-white mt-3 p-3 rounded-lg shadow-md">
          <input
            type="text"
            placeholder="Location"
            className="w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C9CF0]"
          />
          <input
            type="date"
            className="w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C9CF0] ml-4"
          />
          <input
            type="text"
            placeholder="Search Event"
            className="w-1/4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2C9CF0] ml-4"
          />
          <button
            type="button"
            className="w-1/4 bg-[#2C9CF0] text-white py-2 px-4 rounded-lg ml-4 hover:bg-[#1b7ab5]"
          >
            Search
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;





