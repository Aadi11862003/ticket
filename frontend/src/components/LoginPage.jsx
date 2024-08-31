import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import Google from '@mui/icons-material/Google';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import AppleIcon from '@mui/icons-material/Apple';
//import image from '../../public/img2.png'; // Adjust the path as necessary

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
      {/* <div className="flex max-w-4xl w-full bg-[#191919] rounded-lg shadow-lg overflow-hidden"> Updated background color */}
      {/* Left Side - Image */}
      {/* <div className="w-1/2">
          <img src={image} alt="Login" className="w-full h-full object-cover" />
        </div> */}

      {/* Right Side - Login Form */}
      <div className="w-1/3 p-8 mb-12 bg-gray-200 rounded-xl">
        <h2 className="text-3xl font-bold text-black font-serif mb-6 text-center">Tickeve</h2> {/* Updated text color */}
        <form onSubmit={handleLogin}>
          <div className="mb-8  ">
            <label htmlFor="email" className="block font-serif text-black">Email:</label> {/* Updated text color */}
            <input
              type="email"
              id="email"
              placeholder='Enter email here!'
              className="w-full px-4 py-2 mt-2  bg-gray-200 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-300 " /* Updated colors */
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block font-serif text-black">Password:</label> {/* Updated text color */}
            <input
              type="password"
              id="password"
              placeholder='Enter password here!'
              className="w-full px-4 py-2 mt-2 bg-gray-200 border border-gray-400 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-300 " /* Updated colors */
              required
            />
          </div>
          <div className="flex justify-between items-center mb-6">
            <div className="text-black hover:text-gray-400  font-serif cursor-pointer">Forgot Password?</div> {/* Updated text color */}
            <Link to="/signup">
              <div className="text-black hover:text-gray-400 font-serif cursor-pointer">Sign Up</div> {/* Updated text color */}
            </Link>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="overflow-hidden w-40 p-2 h-12 border border-black bg-gray-400  font-serif text-black hover:text-gray-600 rounded-lg text-xl font-bold cursor-pointer relative z-10 group"
            >
              login
            </button>
          </div>

          <div className='flex mt-11 '>
            <button className='mr-4 border font-serif rounded-lg border-black bg-gray-400 text-black p-1 w-24 h-12'><Google  fontSize="large" className="text-black cursor-pointer hover:text-gray-600" /></button>
            <button className='mr-4 border font-serif rounded-lg border-black bg-gray-400 text-black p-1 w-24 h-12'><GitHubIcon fontSize="large" className="text-black cursor-pointer hover:text-gray-600" /></button>
            <button className='mr-4 border font-serif rounded-lg border-black bg-gray-400 text-black p-1 w-24 h-12'><TwitterIcon fontSize="large" className="text-black cursor-pointer hover:text-gray-600" /></button>
            <button className='mr-4 border font-serif rounded-lg border-black bg-gray-400 text-black p-1 w-24 h-12'><LinkedInIcon fontSize="large" className="text-black cursor-pointer hover:text-gray-600" /></button>
            <button className='mr-4 border font-serif rounded-lg border-black bg-gray-400 text-black p-1 w-24 h-12'><FacebookIcon fontSize="large" className="text-black cursor-pointer hover:text-gray-600" /></button>
            <button className='mr-4 border font-serif rounded-lg border-black bg-gray-400 text-black p-1 w-24 h-12'><AppleIcon fontSize="large" className="text-black cursor-pointer hover:text-gray-600" /></button>
          </div>

        </form>
      </div>
      {/* </div> */}
    </div>
  );
};

export default LoginPage;


