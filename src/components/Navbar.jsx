import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/images/Logo.png';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobileView(window.innerWidth <= 768);
            if(window.innerWidth > 768) setIsMobile(false);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="flex items-center justify-between px-4 md:px-8 py-4" style={{ backgroundColor: '#4F46E5' }}>
            {/* Brand logo */}
            <div className="flex items-center flex-shrink-0">
                <img src={logo} alt="Logo" className="h-8 md:h-10 w-auto"/>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-6 lg:space-x-8">
                <a href="#services" className="text-white hover:text-blue-200 text-sm lg:text-base">SERVICES</a>
                <a href="#about" className="text-white hover:text-blue-200 text-sm lg:text-base">ABOUT US</a>
                <a href="#contact" className="text-white hover:text-blue-200 text-sm lg:text-base">CONTACT US</a>
                <a href="#careers" className="text-white hover:text-blue-200 text-sm lg:text-base">CAREERS</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden p-2 text-white"
                onClick={() => setIsMobile(!isMobile)}
            >
                {isMobile ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>

            {/* Mobile Menu Dropdown */}
            {isMobileView && (
                <div className={`absolute top-0 left-0 w-full bg-white transition-transform duration-300 ${isMobile ? 'translate-x-' : '-translate-x-full'} md:hidden`}>
                    <div className="flex flex-col p-4 space-y-4">
                        <button 
                            className="self-end p-2 text-black"
                            onClick={() => setIsMobile(false)}
                        >
                            <FaTimes size={24} />
                        </button>
                        <a href="#home" className="text-black hover:text-blue-200 text-sm">HOME</a>
                        <a href="#services" className="text-black hover:text-blue-200 text-sm">SERVICES</a>
                        <a href="#about" className="text-black hover:text-blue-200 text-sm">ABOUT US</a>
                        <a href="#contact" className="text-black hover:text-blue-200 text-sm">CONTACT US</a>
                        <a href="#careers" className="text-black hover:text-blue-200 text-sm">CAREERS</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;