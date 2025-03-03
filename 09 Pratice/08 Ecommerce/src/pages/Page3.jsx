import React, { useState } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Page3() {
  const [run, setRun] = useState(0);
  function clickhandler() {

    console.log('click here...');
  }

  useGSAP(() => {
    let tl = gsap.timeline();
    tl.to('.effecty', {
      width: "100vw",
      top: '50%',
      height: '200%',
      borderRadius: '0%',
      duration: 4,
      scrollTrigger: {
        trigger: '.tick',
        scroller: 'body',
        end: 'top -10%',
        start: "top 10%",
        scrub: true,
      }
    })

    tl.to('.nully', {
      opacity: 1,
      duration: 3,
      scrollTrigger: {
        trigger: '.tick',
        scroller: 'body',
        end: 'top -10%',
        start: "top 10%",
        scrub: true,
      }
    })
  }, [run]);


  return (
    <div className='tick w-screen h-[120vh] flex justify-center items-center relative overflow-clip'>

      <div className="effecty cursor-pointer flex absolute rounded-full  top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%]
      items-start justify-center  w-[25vw] h-[25vw] bg-purple-700">
        <div className='w-[20vw]  h-[20vw] p-6 border-24 bg-white rounded-full absolute border-purple-700 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
          <img src="/Images/beers.png" alt="" />
        </div>
      </div>


      <div className="nully opacity-0 text-[#ffff76] text-[.9rem] flex flex-col absolute justify-between h-screen w-screen">
        <div className=" p-3 flex justify-between ">
          <h2 className='w-[30%]'>Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda velit quisquam tempore, natus eum perferendis expedita odio reprehenderit quis eaque repudiandae sit dicta pariatur, ad laboriosam at nobis fugit.</h2>
          <h2 className='w-[30%]'>Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda velit quisquam tempore, natus eum perferendis expedita odio reprehenderit quis eaque repudiandae sit dicta pariatur, ad laboriosam at nobis fugit.</h2>
        </div>
        <div className="p-3 flex justify-between ">
          <h2 className='w-[30%]'>Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda velit quisquam tempore, natus eum perferendis expedita odio reprehenderit quis eaque repudiandae sit dicta pariatur, ad laboriosam at nobis fugit.</h2>
          <h2 className='w-[30%]'>Lorem 4 ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda velit quisquam tempore, natus eum perferendis expedita odio reprehenderit quis eaque repudiandae sit dicta pariatur, ad laboriosam at nobis fugit.</h2>
        </div>
      </div>
    </div>
  )
}
