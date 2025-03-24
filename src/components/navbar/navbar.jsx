"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaTicketAlt, FaUserCircle } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { MdClose, MdLocalMovies } from "react-icons/md";
import { RiVipCrownFill } from "react-icons/ri";
import Image from "next/image";
import Logo from "../../assests/ASR CINEMAS 3.png";

const Navbar = () => {
  const [location, setLocation] = useState("Select Location");
  const [menuOpen, setMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userType, setUserType] = useState("user");

  const openModal = (type) => {
    setUserType(type);
    setIsModalOpen(true);
  };

  return (
    <>
      <header className="bg-white text-gray-900 shadow-md fixed w-full z-50">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <Image src={Logo} alt="ASR Cinemas" width={150} height={50} priority />
            </a>

            {/* Location Selector */}
            <div className="flex items-center gap-2 cursor-pointer border p-2 rounded-md bg-gray-100">
              <FaMapMarkerAlt className="text-red-500" />
              <select
                className="bg-transparent text-gray-900 outline-none cursor-pointer"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option className="text-black">Mumbai</option>
                <option className="text-black">Delhi</option>
                <option className="text-black">Bangalore</option>
                <option className="text-black">Hyderabad</option>
              </select>
            </div>

            {/* Navigation Menu */}
            <nav className="hidden md:flex gap-6 text-sm uppercase">
              <a href="#" className="flex items-center gap-1 hover:text-yellow-500">
                <MdLocalMovies /> Movies
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-yellow-500">
                <FaTicketAlt /> Showtimes
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-yellow-500">
                <MdLocalMovies /> Cinemas
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-yellow-500">
                <FaTicketAlt /> Offers
              </a>
              <a href="#" className="flex items-center gap-1 hover:text-yellow-500">
                <RiVipCrownFill /> VIP Lounge
              </a>
            </nav>

            {/* Login / Register */}
            <div className="hidden sm:flex gap-4">
              <button
                className="px-5 py-2.5 text-sm font-medium bg-yellow-500 text-black rounded-md flex items-center gap-1"
                onClick={() => openModal("user")}
              >
                <FaUserCircle /> Login
              </button>
              <button
                className="px-5 py-2.5 text-sm font-medium bg-gray-200 rounded-md flex items-center gap-1"
                onClick={() => openModal("owner")}
              >
                <FaUserCircle /> Owner Login
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)} className="p-2">
                {menuOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-center bg-gray-100 p-4 rounded-md absolute w-full left-0 top-16 shadow-lg">
            <a href="#" className="py-2 flex items-center gap-1 hover:text-yellow-500">
              <MdLocalMovies /> Movies
            </a>
            <a href="#" className="py-2 flex items-center gap-1 hover:text-yellow-500">
              <FaTicketAlt /> Showtimes
            </a>
            <a href="#" className="py-2 flex items-center gap-1 hover:text-yellow-500">
              <MdLocalMovies /> Cinemas
            </a>
            <a href="#" className="py-2 flex items-center gap-1 hover:text-yellow-500">
              <FaTicketAlt /> Offers
            </a>
            <a href="#" className="py-2 flex items-center gap-1 hover:text-yellow-500">
              <RiVipCrownFill /> VIP Lounge
            </a>
            <button className="py-2 flex items-center gap-1 text-yellow-500" onClick={() => openModal("user")}>
              <FaUserCircle /> Login
            </button>
            <button className="py-2 flex items-center gap-1" onClick={() => openModal("owner")}>
              <FaUserCircle /> Owner Login
            </button>
          </div>
        )}
      </header>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setIsModalOpen(false)}
            >
              <MdClose size={24} />
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">
              {userType === "user" ? "User Login" : "Cinema Owner Login"}
            </h2>
            <input
              type="text"
              placeholder="Email or Username"
              className="w-full p-2 border rounded-md mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-md mb-3"
            />
            <button className="w-full bg-yellow-500 p-2 text-white rounded-md">Login</button>
            <p className="text-center text-sm mt-3 cursor-pointer text-gray-600 hover:text-black">
              Forgot Password?
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;