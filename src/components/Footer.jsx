import React from 'react';
import colors from '../context/colors';
import logo from '../assets/images/Logo.png';

const Footer = () => {
    const technologies = ['ReactJS', 'Gatsby', 'NextJS', 'NodeJS'];
    const services = ['Social Media Marketing', 'Web & Mobile App Development', 'Data & Analytics'];

    return (
        <footer className="w-full text-white py-10 px-6" style={{ backgroundColor: colors.primary, zIndex: 1000 }}>
            <div className="max-w-7xl mx-auto">
                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                    
                    {/* Logo & Description */}
                    <div className="flex flex-col items-start mb-8 md:mb-0">
                        <img src={logo} alt="Logo" className="h-10 w-auto mb-4" />
                        <p className="text-sm md:text-base leading-relaxed max-w-sm">
                            Your goal is our target. Not anything in between. We use online marketing platforms 
                            and tools to achieve a single objective - your business results.
                        </p>
                    </div>
                    {/* Technologies & Services */}
                    <div className="flex flex-col sm:flex-row md:flex-row gap-6 w-full">
                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-bold mb-2">Our Technologies</h3>
                            <div className="flex flex-col gap-2">
                                {technologies.map((tech, index) => (
                                    <span key={index} className="text-sm md:text-base">{tech}</span>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2">
                            <h3 className="text-lg font-bold mb-2">Our Services</h3>
                            <div className="flex flex-col gap-2">
                                {services.map((service, index) => (
                                    <span key={index} className="text-sm md:text-base">{service}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="my-6 border-t w-[80%] mx-auto"></div>

                {/* Footer Links */}
                <div className="flex flex-row md:flex-row items-center justify-center space-y-0 space-x-4 md:space-y-0 md:space-x-6">
                    <a href="#privacy" className="text-sm hover:underline">Privacy Policy</a>
                    <span>|</span>
                    <a href="#terms" className="text-sm hover:underline">Terms & Conditions</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
