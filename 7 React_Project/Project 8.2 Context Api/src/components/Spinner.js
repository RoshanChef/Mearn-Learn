import React from 'react'
import "./spinner.css"

const Spinner = () => {
  return (
    <div className='w-full h-screen top-12 flex items-center justify-center'>
      <span className="loader"></span>
    </div>
  )
}

export default Spinner