import { useState } from 'react';
import Random from './components/Random'
import Tag from './components/Tag'


export default function App() {
  let [data, setData] = useState({ title: 'Ravikant', timer: 'clock' });

  function clickHandler(event) {
    setData({
      ...data,
      title: 'rhl',
      timer: '3:15'
    }
    )
    console.log(data.title)
    console.log("hello roshan");
  }

  return (
    <div className='flex flex-col items-center background overflow-x-hidden w-full h-screen'>
      <h1 className='text-4xl font-bold bg-white rounded-2xl mt-10 py-4 px-2 w-11/12 text-center'>RANDOM GIFS</h1>
      <div className='text-3xl m-3 text-orange-800 font-bold font-mono' onClick={clickHandler}>
        <h2>{data.title}</h2>
        <h2>{data.timer}</h2>
      </div>
      <div className="flex flex-col w-full items-center gap-y-10 mt-[30px]" >
        <Random />
        <Tag />
      </div>
    </div>
  );
}
