'use client'

import {useState} from "react";

// Declare this file as a client component
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => setIsOpen(!isOpen);
  
    return (
      <nav className="fixed top-0 right-0 mt-4 mr-4 z-50">
        {/* Menu Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
  
        {/* Links List */}
        <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 absolute right-0 mt-12 md:mt-0 md:static bg-gray-950 md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'right-0' : '-right-96'}`}>
          <li>
            <a href="#home" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 cursor-pointer block p-4">Home</a>
          </li>
          <li>
            <a href="#products" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 cursor-pointer block p-4">Products</a>
          </li>
          <li>
            <a href="#about" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 cursor-pointer block p-4">About Us</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-white hover:text-gray-300 cursor-pointer block p-4">Contact</a>
          </li>
        </ul>
      </nav>
    );
  };