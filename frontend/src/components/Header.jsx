import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const { user } = useContext(UserDataContext);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
<header className="bg-blue-600 text-white p-4 fixed top-0 left-0 w-full z-50 rounded-b-2xl shadow-2xl">
<div className="flex justify-between items-center w-full px-6">
       
        <div className="w-[90px] h-[40px] flex items-center"><img src="EGO_logo.png" alt="E-GO logo"  className="w-[90px] h-auto object-contain" /></div>

        
<nav className="hidden md:flex space-x-10 ml-auto bg-blue-700/70 rounded-3xl px-4 py-2 backdrop-blur-xl font-semibold text-white ">
          <Link to="/" className="hover:text-blue-300">Home</Link>
          <Link to="/login" className="hover:text-blue-300">Ride With Us</Link>
          
          <Link to="/captain-login" className="hover:text-blue-300">Drive With Us</Link>
          <Link to="/send-message" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>
    Send SMS
  </Link>
          <Link to="/carbon-footprint" className="hover:text-blue-300 ">Carbon Footprint</Link> {/* Added */}
          <Link to="/about" className="hover:text-blue-300">About</Link>
          <Link to="/help" className="hover:text-blue-300">Help</Link>
        </nav>

       
        <button 
          className="md:hidden bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      
      {menuOpen && (
        <div className="md:hidden bg-blue-700 text-white absolute top-16 left-0 w-full py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link to="/" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/login" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Ride With Us</Link>
            <Link to="/send-message" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>
    Send SMS
  </Link>
            <Link to="/captain-login" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Drive With Us</Link>
            <Link to="/carbon-footprint" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Carbon Footprint</Link> {/* Added */}
            <Link to="/about" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/help" className="hover:text-blue-300" onClick={() => setMenuOpen(false)}>Help</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;