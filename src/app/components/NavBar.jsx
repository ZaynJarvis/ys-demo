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
            isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}>
            <div className="container mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold">
                    <span className={`${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
                        CUBE CONSTRUCTION
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    <a href="#home" className={`hover:text-amber-600 transition-colors font-medium ${
                        isScrolled ? 'text-gray-900' : 'text-gray-900'
                    }`}>
                        HOME
                    </a>
                    <a href="#projects" className={`hover:text-amber-600 transition-colors font-medium ${
                        isScrolled ? 'text-gray-900' : 'text-gray-900'
                    }`}>
                        PROJECTS
                    </a>
                    <a href="#about" className={`hover:text-amber-600 transition-colors font-medium ${
                        isScrolled ? 'text-gray-900' : 'text-gray-900'
                    }`}>
                        ABOUT US
                    </a>
                    <a href="#contact" className={`hover:text-amber-600 transition-colors font-medium ${
                        isScrolled ? 'text-gray-900' : 'text-gray-900'
                    }`}>
                        CONTACT
                    </a>
                    <button className="bg-amber-600 hover:bg-amber-700 text-white px-6 py-2 rounded-md transition-colors font-medium">
                        ONLINE QUOTE
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className={`${
                        isScrolled ? 'text-gray-900' : 'text-gray-900'
                    }`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200">
                    <div className="px-4 py-2 space-y-2">
                        <a href="#home" className="block py-2 text-gray-900 hover:text-amber-600">HOME</a>
                        <a href="#projects" className="block py-2 text-gray-900 hover:text-amber-600">PROJECTS</a>
                        <a href="#about" className="block py-2 text-gray-900 hover:text-amber-600">ABOUT US</a>
                        <a href="#contact" className="block py-2 text-gray-900 hover:text-amber-600">CONTACT</a>
                        <button className="w-full mt-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-md">
                            ONLINE QUOTE
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};