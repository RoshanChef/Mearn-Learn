import React from 'react'
import "./spinner.css"

const Spinner = () => {
  return (
    <div className='w-full h-full flex items-center justify-center'>
      <span className="loader"></span>
    </div>
  )
}

export default Spinner