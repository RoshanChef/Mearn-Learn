import { useEffect, useState } from 'react';
import Random from './components/Random'
import Tag from './components/Tag'


export default function App() {

  return (
    <div className='background w-full flex flex-col h-screen '>
      <h1 className='bg-white m-3 p-3 text-center text-xl'>Random Gifs</h1>
      <div className=" w-full items-center gap-y-10 mt-[30px]  " >
        <Random />
        <Tag />
      </div>
    </div>
  );
}
