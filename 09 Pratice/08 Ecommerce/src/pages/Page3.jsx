import React, { useContext, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AppContext } from '../context/context';

gsap.registerPlugin(ScrollTrigger);

export default function Page3() {
  const { setColor } = useContext(AppContext);

  function main() { setColor(false); }

  function reverseFunction() { setColor(true); }

  useGSAP(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.tick',
        scroller: 'body',
        end: 'top -10%',
        start: 'top 10%',
        scrub: 1.1,
        onLeaveBack: reverseFunction,
      }
    });


    tl.to('.effecty', {
      width: '100vw',
      top: '50%',
      height: '200%',
      borderRadius: '0%',
      duration: 12,
    });

    tl.from('.nully', {
      opacity: 0,
      y: 200,
      duration: 2,
    })
    tl.to('.nully', {
      opacity: 1,
      y: 60,
      duration: 4,
      onStart: main,
    }, '+=1');
  });

  const round = useRef();
  console.log(round.current);

  return (
    <div className='w-screen h-[220vh]'>
      <div className="tick w-screen h-[120vh] flex justify-center items-center relative overflow-clip">
        <div className="effecty cursor-pointer flex absolute rounded-full top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] items-start justify-center w-[25vw] h-[25vw] bg-purple-700">
          <div className="w-[20vw] h-[20vw] p-6 border-24 bg-white rounded-full absolute border-purple-700 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img src="/Images/beers.png" alt="" />
          </div>
        </div>
        <div className="nully opacity-0 absolute  text-[#ffff76] text-[.9rem] flex flex-col justify-between p-4 h-screen w-screen">
          <div className="p-3 flex justify-between  ">
            <h2 className="w-[30%]">Lorem 1 ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda velit quisquam tempore, natus eum perferendis
              expedita odio reprehenderit quis eaque repudiandae sit dicta pariatur, ad laboriosam at nobis fugit.</h2>
            <h2 className="w-[30%]">Lorem 2 ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda velit quisquam tempore, natus eum perferendis
              expedita odio reprehenderit quis eaque repudiandae sit dicta pariatur, ad laboriosam at nobis fugit.</h2>
          </div>
          <div className="p-3 flex justify-between text-md top-1 ">
            <h2 className="w-[30%]">Lorem 3 ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos assumenda velit quisquam tempore, natus eum perferendis
              expedita odio reprehenderit quis eaque repudiandae sit dicta pariatur, ad laboriosam at nobis fugit.</h2>
            <div className="w-[30%]">
              <p className='text' ref={round}>Selling since 1985</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-purple-700 h-[100vh] w-screen'>

      </div>
    </div>
  );
}