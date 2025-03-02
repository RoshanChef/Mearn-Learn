import React from 'react'
import Card from '../components/Card'
import data from '../data'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Page2() {
  let new_data = data.slice(0, 8);

  console.log(new_data);
  

  return (
    <div className='w-full two h-[130vh] bg-white'>
      <div className='grid  bg-amber-300 grid-cols-4 grid-rows-2 place-content-center p-10 items-start w-full h-full gap-24 relative'>
        {
          new_data.map((val) => (
            <Card val={val} key={val.id} />
          ))
        }
      </div>


    </div>
  )
}
