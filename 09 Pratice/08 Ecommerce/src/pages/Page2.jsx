import React from 'react'
import Card from '../components/Card'
import data from '../data'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Page2() {
  let new_data = data.slice(0, 8);
  // useGSAP(() => {

  //   let tl = gsap.timeline();
  //   tl.from('.two .card', {
  //     y: "90%",
  //     duration: 1,
  //     opacity : 0, 
  //     stagger: .4,
  //     scrollTrigger: {
  //       trigger: ".two",
  //       scroller: ".app",
  //       markers: true,
  //       start : '0%'
  //     }
  //   })
  // })


  return (
    <div className='w-full two h-[130vh] bg-white'>
      <div className='grid grid-cols-4 grid-rows-2 place-content-center  items-start w-full h-full gap-24'>
        {
          new_data.map((val) => (
            <Card val={val} key={val.id} />
          ))
        }
      </div>


    </div>
  )
}
