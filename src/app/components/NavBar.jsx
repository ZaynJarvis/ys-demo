'use client'

import { useState, useEffect } from "react";
import Link from 'next/link';

// Declare this file as a client component
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        // Only toggle if on small screen
        if (window.innerWidth < 768) {
            setIsOpen(prevState => !prevState);
        }
    };

    // Effect to ensure that the menu stays open on larger screens
    useEffect(() => {
        const handleResize = () => {
            // Automatically open or close the menu based on screen size
            setIsOpen(window.innerWidth >= 768);
        };

        // Set up event listener
        window.addEventListener('resize', handleResize);

        // Call the handler right away so state gets updated with initial window size
        handleResize();

        // Clean up listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

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
            <ul className={`flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 absolute right-0 mt-6 md:mt-0 md:static rounded-lg bg-gray-950 md:bg-transparent transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-70' : 'opacity-0 invisible delay-300'}`}>
                <li>
                    <a href="#home" onClick={() => toggleMenu()} className="text-white hover:text-gray-300 cursor-pointer block p-4">Home</a>
                </li>
                <li>
                    <a href="#products" onClick={() => toggleMenu()} className="text-white hover:text-gray-300 cursor-pointer block p-4">Products</a>
                </li>
                <li>
                    <a href="#about" onClick={() => toggleMenu()} className="text-white hover:text-gray-300 cursor-pointer block p-4">About</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => toggleMenu()} className="text-white hover:text-gray-300 cursor-pointer block p-4">Contact</a>
                </li>
            </ul>
        </nav>
    );
};