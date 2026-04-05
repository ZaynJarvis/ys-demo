'use client'

import { useState, useEffect } from "react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        if (window.innerWidth < 768) {
            setIsOpen(prevState => !prevState);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            setIsOpen(window.innerWidth >= 768);
        };

        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('scroll', handleScroll);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-gray-300/50 py-3' : 'bg-transparent py-4'
        }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-xl md:text-2xl font-bold">
                    <span className="text-gray-900">
                        CUBE <span className="text-amber-500">CONSTRUCTION</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className="hover:text-amber-500 transition-colors font-medium text-gray-700">
                        HOME
                    </a>
                    <a href="#projects" className="hover:text-amber-500 transition-colors font-medium text-gray-700">
                        PROJECTS
                    </a>
                    <a href="#about" className="hover:text-amber-500 transition-colors font-medium text-gray-700">
                        ABOUT US
                    </a>
                    <a href="#contact" className="hover:text-amber-500 transition-colors font-medium text-gray-700">
                        CONTACT
                    </a>
                    <a href="https://wa.me/6589729228?text=Hi%2C%20I'm%20interested%20in%20getting%20a%20quote%20for%20construction%20services" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-6 py-2 rounded-md transition-all duration-300 font-bold shadow-lg hover:shadow-amber-500/25">
                        GET QUOTE
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-700 hover:text-amber-500 transition-colors">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
                    <div className="px-4 py-4 space-y-3">
                        <a href="#home" className="block py-2 text-gray-700 hover:text-amber-600 font-medium">HOME</a>
                        <a href="#projects" className="block py-2 text-gray-700 hover:text-amber-600 font-medium">PROJECTS</a>
                        <a href="#about" className="block py-2 text-gray-700 hover:text-amber-600 font-medium">ABOUT US</a>
                        <a href="#contact" className="block py-2 text-gray-700 hover:text-amber-600 font-medium">CONTACT</a>
                        <button className="w-full mt-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-4 py-3 rounded-md font-bold transition-all duration-300">
                            GET QUOTE
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};