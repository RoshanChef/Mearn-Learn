import { workExp } from '../utils/data';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

function Page3() {
    useGSAP(() => {
        gsap.from('.work', {
            y: -40,
            opacity: 0,
            duration: .7,
            scrollTrigger: {
                trigger: '.pg3',
                start: 'top 80%',
                scroller: 'body'
            }
        })
        gsap.from('.content', {
            y: -40,
            opacity: 0,
            duration: 1,
            stagger: .5,
            scrollTrigger: {
                trigger: '.pg3',
                start: 'top 90%',
                scroller: 'body',
                scrub : 1,
            }
        })

    })
    return (

        <div className="h-screen text-[#081d13] pg3">
            <div className='text-center text-6xl font-semibold work'>My Work Experience</div>
            <div className='flex flex-col gap-12'>
                {workExp.map((ele, inx) => {
                    return (
                        <div key={inx} className="content flex justify-between  px-[6rem] relative top-[6rem] ">
                            <div className='w-1/2'>
                                <p className='text-2xl font-semibold'>{ele.place}</p>
                                <p className='font-medium text-[#081d138f]'>{ele.tenure}</p>
                            </div>
                            <div className='w-1/2'>
                                <p className='text-2xl font-semibold'>{ele.role}</p>
                                <p className='font-medium'>{ele.detail}</p>
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <div className=""></div>
        </div>
    )
}

export default Page3
