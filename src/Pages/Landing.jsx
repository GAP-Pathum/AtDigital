import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import colors from '../context/colors';

const Landing = () => {
    return (
        <>
            <Navbar />
            <HeroSection />

            <div className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto">
                <div className="flex-1">
                    <img src={image1} alt="Landing Image" className="w-100 " />
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                    <h1 style={{ 
                        color: colors.subtopic, 
                        fontFamily: 'Poppins', 
                        fontWeight: 600, 
                        fontSize: '27px', 
                        lineHeight: '33px', 
                        letterSpacing: '0.4px' 
                    }}>
                        Web & Mobile App Development
                    </h1>
                    <p style={{ color: colors.contentText }}>
                        Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                    </p>
                    <button
                        className="mt-4 px-6 py-2 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
                        style={{ backgroundColor: colors.button }}
                    >
                        LEARN MORE
                    </button>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto">
                <div className="flex-1 order-2 md:order-1 mt-4 md:mt-0 md:ml-4 text-center md:text-left">
                    <h1 style={{ 
                        color: colors.subtopic, 
                        fontFamily: 'Poppins', 
                        fontWeight: 600, 
                        fontSize: '27px', 
                        lineHeight: '33px', 
                        letterSpacing: '0.4px' 
                    }}>
                        Digital Strategy Consulting
                    </h1>
                    <p style={{ color: colors.contentText }}>
                    Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                    </p>
                    <button
                        className="mt-4 px-6 py-2 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
                        style={{ backgroundColor: colors.button }}
                    >
                        LEARN MORE
                    </button>
                </div>
                <div className="flex-1 order-1 md:order-2">
                    <img src={image2} alt="Landing Image" className="w-100 " />
                </div>
            </div>
        </>
    );
};

export default Landing;