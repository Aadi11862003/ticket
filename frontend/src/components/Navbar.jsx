import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../public/logo.png';

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
    <nav className="bg-gray-800 p-6 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
        <div className="text-white text-2xl font-bold">Tickeve</div>
        </Link>
        {/* <Link to="/">
          <img src={logo} alt="ConcertHub Logo" className="h-10" />
        </Link> */}
        <div className="flex items-center space-x-10 relative">
          <Link to="/" className="text-white hover:text-yellow-400">
            Home
          </Link>
          
          <div className="relative">
            <button
              onClick={handleDropdownClick}
              className="text-white hover:text-yellow-400 focus:outline-none"
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
                      to="/Concert/:id"
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
          </div>
          
          <Link to="/press" className="text-white hover:text-yellow-400">
            Artist
          </Link>
          <Link to="/contact" className="text-white hover:text-yellow-400">
            Contact
          </Link>

          <Link to="/about" className="text-white hover:text-yellow-400">
            About-Us  
          </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/login"
            className="bg-purple-500 text-white py-2 px-5 rounded-md hover:bg-purple-600"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="bg-teal-500 text-white py-2 px-5 rounded-md hover:bg-teal-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


