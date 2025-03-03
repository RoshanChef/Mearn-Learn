import React from 'react';
import Card from '../components/Card';
import data from '../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

export default function Page2({navcolor,setColor}) {
  const new_data = data.slice(0, 8);

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from(".check_bottle", {
      y: 100,
      stagger: .21,
      opacity: 0,
      scrollTrigger: {
        trigger: '.boom',
        scroller: "body",
      }
    });
  }, [new_data])

  return (
    <div className='boom w-full h-[130vh] bg-white '>
      <div className='grid grid-cols-4 grid-rows-2 place-content-center p-10 items-start w-full h-full gap-24 relative'>
        {new_data.map((val) => (
          <Card val={val} key={val.id} id={val.id} navcolor={navcolor} setColor={setColor}  />
        ))}
      </div>
    </div>
  );
}
