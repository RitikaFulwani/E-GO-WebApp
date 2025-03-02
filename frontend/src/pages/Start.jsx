import React from 'react';
import { Link } from 'react-router-dom';
import Features from './Features'; // Import the Features component
import SMSBooking from "../components/SMSBooking";


const Start = () => {

  return (
    <div className="w-screen h-screen">
      {/* Full-Screen Background Image */}
      <div 
        className="w-full h-screen  bg-fit bg-no-repeat bg-center relative"
        style={{ backgroundImage: "url('/start.png')", marginTop: "56px" }}
        >
        {/* Overlay Content */}
        <div className="absolute bottom-0 left-0 right-0 bg-white pb-6 py-10 px-5">
          <h2 className="text-[30px] font-semibold text-center">Get Started with E-go</h2>
          <Link 
  to="/login" 
  className="w-40 py-3 mt-5 text-center text-white bg-blue-600 rounded-lg mx-auto block"
>
  Continue
</Link>


        </div>
      </div>

      {/* Features Section */}
      <Features /> {/* Add the Features component here */}
    </div>
  );
};

export default Start;