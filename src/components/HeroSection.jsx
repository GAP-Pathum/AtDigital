import React from 'react';
import Hero from '../assets/images/Hero Image.png';

const HeroSection = () => {
    return (
        <div className="relative w-full">
            <img 
                src={Hero} 
                alt="Hero" 
                className="w-full h-auto" 
            />
            <div className="absolute left-80% w-[630px] p-4 bg-gradient-to-r from-blue-400 to-green-400 md:w-[630px] md:h-[306px] md:pt-[20px] md:pr-[40px] md:pb-[10px] md:pl-[40px] md:gap-[20px] md:bottom-2 md:left-[80px] lg:bottom-auto lg:left-auto lg:top-[50%] lg:transform lg:-translate-y-[50%] lg:w-full lg:h-auto lg:pt-[20px] lg:pr-[3rem] lg:pb-[32px] lg:pl-[3rem] lg:gap-[20px] xl:left-[3rem] xl:bottom-[2rem] xl:w-[630px] xl:h-auto xl:pt-[20px] xl:pr-[3rem] xl:pb-[32px] xl:pl-[3rem] xl:gap-[20px] 2xl:left-[3rem] 2xl:bottom-[2rem] 2xl:w-auto 2xl:h-auto 2xl:pt-[20px] 2xl:pr-[3rem] 2xl:pb-[32px] 2xl:pl-[3rem] 2xl:gap-[20px]">
                <p className="text-white font-inter font-bold text-[36px] leading-[36px] tracking-[-2%] md:text-[48px] md:leading-[48px] lg:text-[48px] xl:text-[48px] 2xl:text-[48px]">
                    We crush your competitors, goals, and sales records - without the B.S.
                </p>
            </div>
        </div>
    );
};

export default HeroSection;
