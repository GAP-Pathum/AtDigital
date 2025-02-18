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
            <div className>
            <div className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto">
                <div className="flex-1">
                    <img src={image1} alt="Landing Image" className="w-100 " />
                </div>
                <div className="flex-1 mt-4 md:mt-0 md:ml-4 text-left">
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
                    <p style={{ 
                        color: colors.contentText,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '22px',
                        lineHeight: '28px',
                        letterSpacing: '0px'
                    }}>
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
                <div className="flex-1 order-2 md:order-1 mt-4 md:mt-0 md:ml-4 text-left">
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
                    <p style={{ 
                        color: colors.contentText,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '22px',
                        lineHeight: '28px',
                        letterSpacing: '0px'
                    }}>
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
            </div>


            <div className="w-[60%] mx-auto p-6 md:p-12 bg-white">
                {/* FAQ*/}
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" style={{ color: colors.subtopic }}>
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-[20px] font-semibold mb-2" style={{ color: colors.subtopic }}>
                            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                            <span className='ml-15 text-10'>-</span>
                        </h3>
                        <p className="text-base text-[16px]" style={{ 
                            color: colors.contentText,
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '22px',
                            lineHeight: '28px',
                            letterSpacing: '0px'
                        }}>
                            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor
                        </p>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-[18px] font-semibold mb-2" style={{ color: colors.heading }}>
                            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?<span className='font-normal ml-16 t'>+</span>
                        </h3>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                        <h3 className="text-[18px] font-semibold mb-2" style={{ color: colors.heading }}>
                            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?<span className='font-normal ml-15'>+</span>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;