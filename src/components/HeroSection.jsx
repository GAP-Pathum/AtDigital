import React from 'react';
import Hero from '../assets/images/Hero Image.png';

const HeroSection = () => {
    return (
        <div className="relative w-full flex flex-col">
            {/* Hero Image */}
            <img src={Hero} alt="Hero" className="w-full h-auto" />

            {/* Gradient Box */}
            <div
                className="w-full p-6 bg-gradient-to-r from-blue-400 to-green-400 text-left
                lg:absolute lg:left-[5%] lg:top-[40%] lg:w-[40%] max-w-[1200px] lg:max-w-[580px] lg:text-left"
            >
                <p className="text-white font-bold text-[40px] sm:text-[42px] md:text-[42px] lg:text-[42px] leading-tight">
                    We Crush Your Competitors, Goals, And Sales Records - Without The B.S.
                </p>
                <button className="mt-4 px-6 py-2 bg-[#F28D35] text-white font-bold text-sm hover:bg-orange-600 transition-colors">
                    GET THE CONSULTATION
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
