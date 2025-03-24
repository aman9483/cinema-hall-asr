"use client";

import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export default function AuthModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="relative">
      <button
        className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition flex items-center gap-2"
        onClick={() => setIsOpen(true)}
      >
        <FaUserCircle size={20} /> Login / Signup
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
              onClick={() => setIsOpen(false)}
            >
              <IoClose size={24} />
            </button>

            <h2 className="text-2xl font-bold text-center mb-4">
              {isSignup ? "Sign Up" : "Login"}
            </h2>

            <form className="space-y-4">
              {isSignup && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
                />
              )}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-red-300"
              />
              <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">
                {isSignup ? "Sign Up" : "Login"}
              </button>
            </form>

            <p className="text-center text-sm mt-3">
              {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                className="text-red-600 hover:underline"
                onClick={() => setIsSignup(!isSignup)}
              >
                {isSignup ? "Login" : "Sign Up"}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
