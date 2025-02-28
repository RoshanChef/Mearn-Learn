import React, { useEffect } from 'react';
import './page1.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Page1() {
    useGSAP(() => {
        gsap.from('h1 , .one', {
            rotateX: -80,
            duration: 1,
            scale: .9,
            transform: 'translatey(50px)'
        })
    });

    return (
        <div className='relative w-full h-screen'>
            <div className='text-white pt-[3rem] font-mono w-full flex justify-center items-center flex-col h-full bg-[#000] absolute backdrop-blur-3xl'>
                <div className='page1 absolute z-0'></div>
                <h1 className='text-[#ffff76] text-6xl font-bold'>Buy at your Trusted Shop</h1>
                <h2 className='flex items-center gap-8'>
                    <p className='text-purple-400 text-3xl font-semibold one'>1 Day </p> Delivery
                </h2>
            </div>
        </div>
    );
}