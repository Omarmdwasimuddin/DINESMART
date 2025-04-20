import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white py-10'>
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center px-5'>

                <div>
                    <h2 className='text-md font-semibold'>Company Name</h2>
                    <p className='text-xs text-gray-400 text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos officiis numquam voluptatem molestias labore similique, dolorem, ut fugiat velit ea rerum, voluptates omnis? Magnam voluptatem eos, alias hic illo error!</p>

                    <div className='flex space-x-5 mt-5'>
                    <FaFacebookF className="text-md cursor-pointer hover:text-blue-500"/>
                    <FaTwitter className="text-md cursor-pointer hover:text-blue-400"/>
                    <FaLinkedinIn className="text-md cursor-pointer hover:text-blue-600"/>
                    <FaInstagram className="text-md cursor-pointer hover:text-blue-500"/>
                    </div>
                </div>


                <div>
                    <h2 className='text-sm mb-3 font-semibold'>Resources</h2>
                    <ul>
                        <li><a href="#" className='text-gray-400 text-xs'>Blog</a></li>
                        <li><a href="#" className='text-gray-400 text-xs'>FAQs</a></li>
                        <li><a href="#" className='text-gray-400 text-xs'>Support</a></li>
                        <li><a href="#" className='text-gray-400 text-xs'>Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-sm mb-3 font-semibold'>Resources</h2>
                    <ul>
                        <li><a href="#" className='text-gray-400 text-xs'>Blog</a></li>
                        <li><a href="#" className='text-gray-400 text-xs'>FAQs</a></li>
                        <li><a href="#" className='text-gray-400 text-xs'>Support</a></li>
                        <li><a href="#" className='text-gray-400 text-xs'>Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h2 className='text-sm font-semibold'>Get In Touch</h2>
                    <h2 className='text-sm font-semibold'>info@Company.com</h2>
                </div>

            </div>

            <div className='text-center text-gray-500 text-sm mt-10 border-t border-gray-700 pt-5'>
                    &copy; {new Date().getFullYear()} Company Name. All rights reserved.
                </div>

        </footer>
    );
};

export default Footer;