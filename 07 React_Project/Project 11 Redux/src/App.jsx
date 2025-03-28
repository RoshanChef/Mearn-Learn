import React from 'react'
import { useState } from 'react';

function App() {

  function Counter() {
    const [cnt, setCnt] = useState(0);
    return (
      <div className='flex gap-2 flex-col'>
        <ShowVal cnt={cnt} />
        <Increase setCnt={setCnt}></Increase>
        <Decrease setCnt={setCnt}></Decrease>
      </div>
    )
  }

  function ShowVal({ cnt }) {
    return <div>{cnt}</div>
  }

  function Decrease({ setCnt }) {
    return (
      <div onClick={() => setCnt(prev => prev - 1)} className='bg-blue-500 p-2 w-80 text-white'>
        Decrease
      </div>
    )
  }

  function Increase({ setCnt }) {
    return (
      <div onClick={() => setCnt(val => val + 1)} className='bg-blue-500 p-2 w-80 text-white'>
        Increase
      </div>
    )
  }

  return (
    <div className='text-white bg-[#333] w-full h-screen'>
      <Counter />
    </div>
  )
}

export default App