import { useGSAP } from '@gsap/react';
import { PiPhoneCallDuotone } from 'react-icons/pi';
import { useRef } from 'react';
import gsap from 'gsap';


function Navbar() {
    const target = useRef([]);
    useGSAP(() => {
        gsap.from(target.current, {
            y: -50,
            stagger: true, 
            duration:.6
        })
    })
    return (
        <div className='flex justify-between shadow-[rgba(0,0,1,0.1)_10px_5px_4px_0px] items-center fixed bg-white z-40 left-0 px-16 h-[3.4rem] cursor-pointer select-none w-screen '  >
            <div className="title">
                <h1 className="text-xl" ref={(ele) => { target.current[0] = ele }}>Binjamin</h1>
            </div>
            <div className="nav text-sm">
                <ul className='flex gap-3 uppercase items-center' ref={(ele) => { target.current[1] = ele }} >
                    <li>services</li>
                    <li>exprience</li>
                    <li>portfolio</li>
                    <li>testimonials</li>
                    <li>+001(313)345678</li>
                    <li><div className='text-green-800 p-2  rounded-md shadow w-max h-max shadow-gray-300'><PiPhoneCallDuotone className='hover:scale-[1.2] transition-all duration-50'/></div></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
