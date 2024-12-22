import React, { useState } from 'react'

export default function Random() {
  const [gif, setGit] = useState('');;
  function clkHandler(){
    
  }
  return (
    <div className='bg-green-400 h-[50vh] flex flex-col rounded-md justify-center relative w-[50%] m-auto'>
      <p className='capitalize text-center p-3 font-bold text-xl' >
        a Random GIF
      </p>
      <img src={gif}  width={450}/>
      <button onClick={clkHandler} className='font-bold bg-white m-auto w-[90%] rounded'>Generate</button>
    </div>
  )
}
