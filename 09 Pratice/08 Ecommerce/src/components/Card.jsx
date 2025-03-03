import React from 'react'
import DetailPage from '../pages/DetailPage';
import { useNavigate } from 'react-router-dom';

export default function Card({ val, navcolor, setColor , id}) {
  const navigate = useNavigate();
  function clickHandler(e) {
    console.log(id);
    if (val.id == id) {
      console.log(val.image);
    console.log("yes");
        
    }
    navigate(`/detail/${id}`);
    setColor(true);
  }
  
  return (
    <div onClick={clickHandler} className='check_bottle h-full  shadow-xl hover:shadow-2xl cursor-pointer duration-75 translate-1 rounded-2xl  flex flex-col justify-center items-center font-["Comic Sans MS", "Comic Sans", cursive] py-6'>
      <div className=' h-[100%] w-[100%] rounded-2xl relative flex flex-col'>
        <div className='relative h-[65%] w-[100%] m-auto'>
          <img src={val.image} className='h-full w-full object-contain' draggable={false} alt="" />
        </div>
        <div className='h-[30%] p-2 flex px-5 flex-col justify-center'>
          <p className='text-[.8rem] font-semibold'>{val.title}</p>
          <p className='text-[.75rem]'>something you know better</p>
          <p className='text-[.75rem] flex gap-6'>price <span className='font-bold'>{val.price}</span></p>
        </div>
        <button className="bg-purple-700 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded-lg w-[80%] transition-all duration-300 ease-in-out active:scale-50 focus:scale-105 cursor-pointer m-auto">
          see more
        </button>
      </div>
    </div>
  );
}