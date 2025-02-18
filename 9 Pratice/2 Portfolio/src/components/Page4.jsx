import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);


function Page4() {
    useGSAP(() => {
        gsap.from('.hoto', {
            x: 100,
            opacity: 0,
            duration : 1,
            scrollTrigger: {
                trigger: '.page4',
                scroller: 'body',
                start : 'top 20%'
            }

        })
    })
    return (
        <div className="page4 w-full px-14 h-[calc(100vh-3.4rem)] flex items-center">
            <div className="w-full flex flex-col gap-4 justify-center h-full ">
                <h1 className="text-5xl font-bold text-[#081d13]">My Latest Works</h1>
                <div className="flex font-semibold justify-between">
                    <p>Perfect solution for digital Experience</p>
                    <h3 className="text-purple-500 text-xl underline px-16">Explore More Works</h3>
                </div>
                <div className="flex gap-x-11 p-4 hoto">
                    <img src="/Images/showCase1.png" className="shadow-lg hover:translate-y-[-1.3rem] transition-all duration-300 cursor-pointer rounded-2xl w-[22rem]" alt="Not Found" />
                    <img src="/Images/showCase2.png" className="shadow-lg hover:translate-y-[-1.3rem] transition-all duration-300 cursor-pointer rounded-2xl w-[22rem]" alt="Not Found" />
                    <img src="/Images/showCase3.png" className="shadow-lg hover:translate-y-[-1.3rem] transition-all duration-300 cursor-pointer rounded-2xl w-[22rem]" alt="Not Found" />
                </div>
            </div>
        </div>
    )
}

export default Page4
