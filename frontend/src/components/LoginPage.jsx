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
    <div className="flex justify-center items-center h-screen bg-[#e5cab5]"> {/* Changed background color */}
      <div className="flex max-w-4xl w-full bg-[#c09f9f] rounded-lg shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div className="w-1/2">
          <img src={image} alt="Login" className="w-full h-full object-cover" />
        </div>

        {/* Right Side - Login Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-[#430A5D] mb-6 text-center">Tickeve</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-[#430A5D]">Email:</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-2 bg-[#c09f9f] border border-[#430A5D] rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8C6A5D] focus:bg-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-[#430A5D]">Password:</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 bg-[#c09f9f] border border-[#430A5D] rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-[#8C6A5D] focus:bg-white"
                required
              />
            </div>
            <div className="flex justify-between items-center mb-6">
              <div className="text-[#430A5D] hover:text-[#5F374B] cursor-pointer">Forgot Password?</div>
              <Link to="/signup">
                <div className="text-[#430A5D] hover:text-[#5F374B] cursor-pointer">Sign Up</div>
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="overflow-hidden w-48 p-2 h-12 bg-[#5F374B] text-white rounded-lg text-xl font-bold cursor-pointer relative z-10 group"
              >
                Log In
                <span className="absolute w-48 h-48 -top-12 -left-4 bg-[#8C6A5D] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 origin-left"></span>
                <span className="absolute w-48 h-48 -top-12 -left-4 bg-[#5F374B] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></span>
                <span className="absolute w-48 h-48 -top-12 -left-4 bg-[#430A5D] rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
                <span className="group-hover:opacity-100 duration-1000 opacity-0 absolute top-2 left-10 z-10">
                  Loading...
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

