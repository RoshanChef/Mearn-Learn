import { projectExperience, WhatDoIHelp } from '../utils/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Page2() {
    const tar = useRef(null);
    useGSAP(() => {
        gsap.from('.right', {
            y: -40,
            opacity: 0,
            duration: 1,
            scrollTrigger :  {
                trigger : '.main',
                scroller : 'body',
                start : 'top 50%'
            }
        });
        gsap.from('.left .box', {
            x: -90,
            opacity: 0,
            duration: 1,
            stagger : .4,
            scrollTrigger :  {
                trigger : '.main',
                scroller : 'body',
                start : 'top 50%'
            }
        });

    });
    console.log(tar);
    console.log(tar.current);

    return (
        <div className='w-screen p-14 flex h-screen my-16 main' ref={tar}>
            <div className='left w-1/2 flex flex-col gap-3'>
                {
                    projectExperience.map((ele, inx) => {
                        console.log(`${ele.bg}`)
                        return (

                            <div key={inx} className='box inline-flex p-9 shadow-md hover:shadow-lg cursor-pointer shadow-slate-300 flex-grow w-[calc(50vw-9rem)] rounded-lg bottom-2 gap-4 items-center'>
                                <div className={`p-3 rounded-full`} style={{ background: ele.bg }}>
                                    <ele.icon color='black' fontSize={26} />
                                </div>
                                <div className='flex flex-col gap-7  font-semibold text-[#222727]'>
                                    <h1 className='text-2xl'>{ele.name}</h1>
                                    <p>{ele.projects} Projects </p>
                                </div>
                            </div>
                        )

                    })
                }
            </div>
            <div className='right flex mx-5 px-4 flex-grow text-[#081d13] gap-8 shadow-xl rounded-md flex-col justify-center'>
                <h1 className='text-5xl font-medium '>What do I help ? </h1>
                <div className='leading-loose text-xl flex flex-col gap-y-8'>
                    <p>{WhatDoIHelp[0]}</p>
                    <p>{WhatDoIHelp[1]}</p>
                </div>
                <div className='flex gap-12'>
                    <div className='text-xl gap-2 flex items-center font-semibold flex-col'>
                        <p className='text-5xl'>285+</p>
                        <p>Project Completed</p>
                    </div>
                    <div className='text-xl flex gap-2 items-center font-semibold flex-col'>
                        <p className='text-5xl'>190+</p>
                        <p>Happy Clients</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Page2
