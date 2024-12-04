import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {
  let navigate = useNavigate();
  function changeHandler() {
    navigate("/support");
  }
  return (
    <div>
      <div>
        About page
      </div>
      <button onClick={changeHandler} className='border-2 border-red-400 bg-emerald-400'>Move to Support Page</button>
    </div>
  )
}

export default About