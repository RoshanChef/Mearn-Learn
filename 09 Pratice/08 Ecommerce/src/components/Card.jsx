import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'

export default function Card({ val }) {
  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from('.card', {
      y: 1000,
      duration: 1,
    })
  })


  return (
    <div className='h-full shadow-2xl bg-blue-400 rounded-2xl  flex flex-col justify-center items-center font-["Comic Sans MS", "Comic Sans", cursive]'>
      <div className=' h-[70%] w-[100%] rounded-2xl relative'>
        <div className='relative h-[65%] w-[100%] m-auto'>
          <img src={val.image} className='h-full w-full object-contain' alt="" />
        </div>
        <div className='h-[20%] p-2'>
          <p className='text-[.9rem]'>{val.title}</p>
          <p className='text-xs'>something you know better</p>
          <p className='text-xs'>price</p>
        </div>
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg w-[80%] m-auto transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 focus:scale-105 cursor-pointer">
          Click me
        </button>
      </div>
    </div>
  )
}
