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
            <div className="space-y-4 md:space-y-0">
                <div className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto">
                    <div className="flex-1">
                        <img src={image1} alt="Landing Image" className="w-100 " />
                    </div>
                    <div className="flex-1 mt-4 md:mt-0 md:ml-4 text-left">
                        <h1 className="text-center md:text-left" style={{ 
                            color: colors.subtopic, 
                            fontFamily: 'Poppins', 
                            fontWeight: 600, 
                            fontSize: '27px', 
                            lineHeight: '33px', 
                            letterSpacing: '0.4px' 
                        }}>
                            Web & Mobile App Development
                        </h1>
                        <p className="text-center md:text-left" style={{ 
                            color: colors.contentText,
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '22px',
                            lineHeight: '28px',
                            letterSpacing: '0px'
                        }}>
                            Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button
                                className="mt-4 px-6 py-2 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
                                style={{ backgroundColor: colors.button }}
                            >
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center w-[80%] mx-auto mt-4 md:mt-0">
                    <div className="flex-1 order-2 md:order-1 mt-4 md:mt-0 md:ml-4 text-left">
                        <h1 className="text-center md:text-left" style={{ 
                            color: colors.subtopic, 
                            fontFamily: 'Poppins', 
                            fontWeight: 600, 
                            fontSize: '27px', 
                            lineHeight: '33px', 
                            letterSpacing: '0.4px' 
                        }}>
                            Digital Strategy Consulting
                        </h1>
                        <p className="text-center md:text-left" style={{ 
                            color: colors.contentText,
                            fontFamily: 'Inter',
                            fontWeight: 500,
                            fontSize: '22px',
                            lineHeight: '28px',
                            letterSpacing: '0px'
                        }}>
                        Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.
                        </p>
                        <div className="flex justify-center md:justify-start">
                            <button
                                className="mt-4 px-6 py-2 text-white font-bold text-sm hover:bg-orange-600 transition-colors"
                                style={{ backgroundColor: colors.button }}
                            >
                                LEARN MORE
                            </button>
                        </div>
                    </div>
                    <div className="flex-1 order-1 md:order-2">
                        <img src={image2} alt="Landing Image" className="w-100 " />
                    </div>
                </div>
            </div>

            <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto p-4 md:p-8 lg:p-12 bg-white mt-4 md:mt-8">
                {/* FAQ Heading */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 text-center" style={{ color: colors.subtopic }}>
                    Frequently Asked Questions
                </h2>

                {/* FAQ Items */}
                <div className="space-y-4 md:space-y-6">
                    {/* FAQ Item 1 */}
                    <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm relative">
                        <h3 className="text-[18px] md:text-[20px] font-semibold mb-2" style={{ color: colors.subtopic }}>
                            Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?
                        </h3>
                        <p className="md:text-left text-[16px] md:text-[22px] lg:text-[22px] font-medium" style={{
                            color: colors.contentText,
                            fontFamily: 'Inter',
                            lineHeight: '28px',
                            letterSpacing: '0px'
                        }}>
                            Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor.
                        </p>
                        <span className="absolute top-0 right-2 cursor-pointer text-[30px] md:text-[36px]" style={{ fontFamily: 'Inter', fontWeight: 100, color: colors.subtopic }}>_</span>
                    </div>

                    {/* FAQ Item 2 */}
                    <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm relative">
                        <h3 className="text-[16px] md:text-[18px] font-semibold mb-2" style={{ color: colors.heading }}>
                            Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?
                        </h3>
                        <span className="absolute top-2 right-2 cursor-pointer text-[30px] md:text-[36px]" style={{ fontFamily: 'Inter', fontWeight: 400, color: colors.headings }}>+</span>
                    </div>

                    {/* FAQ Item 3 */}
                    <div className="bg-gray-50 p-4 md:p-6 rounded-lg shadow-sm relative">
                        <h3 className="text-[16px] md:text-[18px] font-semibold mb-2" style={{ color: colors.heading }}>
                            Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?
                        </h3>
                        <span className="absolute top-2 right-2 cursor-pointer text-[30px] md:text-[36px]" style={{ fontFamily: 'Inter', fontWeight: 400, color: colors.headings }}>+</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Landing;