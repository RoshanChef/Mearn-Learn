import React, { useEffect, useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Page1Content() {
    const target = useRef([]);
    useGSAP(() => {
        gsap.from([target.current[0], target.current[1]], {
            y: 50,
            opacity: 0,
            stagger: .3,
            duration: 1,
        });
        gsap.from([target.current[2], target.current[3]], {
            x: -50,
            opacity: 0,
            duration: 1,
            stagger: .3
        });
        gsap.from([target.current[4], target.current[5]], {
            x: 50,
            opacity: 0,
            duration: 1,
            stagger: .3
        });
    })


    // const [val, setVal] = useState(0);

    // useEffect(() => {

    //     let id;
    //     function increase() {
    //         setVal((prev) => {
    //             console.log('called ... ');

    //             const newVal = prev + 1;
    //             if (newVal > 10) {
    //                 clearInterval(id);
    //                 return prev; 
    //             }
    //             else
    //                 return newVal;
    //         })
    //     }
    //     id = setInterval(() => {
    //         increase();
    //     }, 1000);

    //     setTimeout(() => {
    //         increase();
    //     }, 1000);
        
    // }, [])


    return (
        <div className='h-[calc(90vh)] relative top-[3.4rem] px-[3em] w-screen overflow-x-hidden ' >

            <div className='text flex w-full justify-between font-mono relative top-7'>
                <div className='text-[3rem] whitespace-pre' ref={(ele) => { target.current[2] = ele }}>
                    <div>Hey There,</div>
                    <div>I'm Binjamin.</div>
                </div>
                <div className='text-[1.2rem] flex flex-col justify-center font-mono gap-2' ref={(ele) => { target.current[4] = ele }} >
                    <p>I designed this Beutiful</p>
                    <p>simple things , And I love what i do</p>
                </div>
            </div>
            <div className='h-3/4 w-full  flex justify-stretch overflow-hidden'>
                {/* part 1 */}
                <div className='inline-flex flex-col justify-evenly h-full'>
                    <p className='font-semibold font-mono text-purple-500'>kalmatheroshan@gmail.com</p>
                    <div className='flex gap-3 font-mono items-center' ref={(ele) => { target.current[3] = ele }}>
                        <p className='text-7xl text-gray-800'>10</p>
                        <div className='flex flex-col text-xl capitalize font-semibold text-gray-800 px-2'>
                            <span>years</span> <span>Experience</span>
                        </div>
                    </div>
                </div>

                {/* part 2 */}
                <div className='flex relative h-full w-3/5 justify-center'>
                    <img src="Images/splash.png" className='object-cover absolute top-19 z-10' ref={(ele) => (target.current[0] = ele)} />
                    <img src="Images/person.png" className='absolute bottom-0 z-20' ref={(ele) => (target.current[1] = ele)} />
                </div>

                {/* part 3 */}
                <div className='flex flex-col justify-end items-center uppercase p-3 gap-4' ref={(ele) => { target.current[5] = ele }}>
                    <img src="Images/certificate.png" className='w-11' />
                    <div className='text-center'>
                        <p>Certified profetional</p>
                        <p>ui/ux designer</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
