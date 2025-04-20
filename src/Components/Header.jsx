'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';


const Header = () => {

    const [isOpen,setIsOpen] = useState();


    return (
        <header>
            <div>
                <nav className='bg-amber-700/95 shadow-md py-4 px-6'>
                    <div className='container mx-auto flex items-center justify-between'>
                        <Link href="/Components00/api" className='flex space-x-2 items-center'>
                        <Image src="/Img/bird_2.jpg" alt='logo' width={50} height={50} className='rounded-full border border-amber-300' />
                        <h2 className='text-xl font-semibold'>Best Bay</h2>
                        </Link>

                        <div className='hidden md:flex space-x-6'>
                            <Link href="/" className='text-xs font-semibold'>HOME</Link>
                            <Link href="/Components00/About/Contact" className='text-xs font-semibold'>ABOUT</Link>
                            <Link href="/Components00/Contact" className='text-xs font-semibold'>CONTACT</Link>
                        </div>


                        <button className='md:hidden' onClick={()=>setIsOpen(!isOpen)}>{isOpen ? <X className='w-6 h-6'/>:<Menu className='w-6 h-6'/>}</button>


                    </div>

                    {
                            isOpen && (
                                <div className='md:hidden mt-4 space-y-2 px-6'>
                                <Link href="/" className='block text-xs font-semibold text-gray-900 hover:text-gray-800'>HOME</Link>
                                <Link href="/" className='block text-xs font-semibold text-gray-900 hover:text-gray-800'>ABOUT</Link>
                                <Link href="/" className='block text-xs font-semibold text-gray-900 hover:text-gray-800'>CONTACT</Link>
                                </div>
                            )
                        }


                </nav>
            </div>
        </header>
    );
};

export default Header;