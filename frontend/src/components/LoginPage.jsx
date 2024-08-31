import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import image from '../../public/img2.png'; // Adjust the path as necessary

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Perform login logic here (e.g., validate user credentials)
    
    // Redirect to the desired page upon successful login
    navigate('/Concert/:id'); // Replace '/Concert/:id' with your target route
  };

  return (

    <div className="flex justify-center items-center h-screen bg-black"> {/* Changed background color */}
      <div className="flex max-w-4xl w-full bg-[#191919] rounded-lg shadow-lg overflow-hidden"> {/* Updated background color */}
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img src={image} alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-gray-200 mb-6 text-center">Tickeve</h2> {/* Updated text color */}
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-400">Email:</label> {/* Updated text color */}
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 bg-[#2c2c2c] border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-[#191919]" /* Updated colors */
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-400">Password:</label> {/* Updated text color */}
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 bg-[#2c2c2c] border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-500 focus:bg-[#191919]" /* Updated colors */
                required
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="text-gray-400 hover:text-gray-200 cursor-pointer">Forgot Password?</div> {/* Updated text color */}
              <Link to="/signup">
                <div className="text-gray-400 hover:text-gray-200 cursor-pointer">Sign Up</div> {/* Updated text color */}
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="overflow-hidden w-48 p-2 h-12 bg-[#a388e9] text-white text-gray-400 rounded-lg text-xl font-bold cursor-pointer relative z-10 group"
              >
                Log In
                
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;


