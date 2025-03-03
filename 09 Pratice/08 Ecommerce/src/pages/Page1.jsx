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
        gsap.from('.imo', {
            y: -50,
            duration: 2.5,
            ease: 'elastic',
            repeat: -1,
            yoyo: true
        })
        gsap.from('.imo', {
            x: -100,
            duration: 5,
            ease: 'elastic'
        });
        gsap.from('.imo2', {
            y: 50,
            duration: 2,
            ease: 'power3.out',
            repeat: -1,
            yoyo: true
        });
    });

    return (
        <div className='relative w-full h-screen'>
            <div className='text-purple-700 pt-[3rem] font-mono w-full flex justify-center items-center flex-col h-fullabsolute backdrop-blur-3xl'>
                <div className='page1 absolute z-0'></div>
                <h1 className='text-purple-700 text-6xl font-bold'>Buy at your Trusted Shop</h1>
                <h2 className='flex items-center gap-8'>
                    <p className='text-purple-400 text-3xl font-semibold one'>1 Day </p> Delivery
                </h2>
            </div>
            <div className='absolute right-18 top-20 scale-200 rotate-[-20deg]'>
                <img src="/Images/front.png" className='imo' alt="" />
            </div>
            <div className='absolute left-0 top-20 scale-100 rotate-[20deg] z-[1]'>
                <img src="/Images/image 3.png" className='imo2' alt="" />
            </div>
        </div>
    );
}