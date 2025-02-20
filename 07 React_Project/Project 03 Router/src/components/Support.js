import React from 'react'
import { useNavigate } from 'react-router-dom';

const Support = () => {
  let navigate = useNavigate();
  function changeHandler() {
    navigate('/about');
  }
  function backHandler() {
    navigate(-1);
  }
  return (
    <div className='inline-flex m-3 gap-3 flex-col'>
      <div>
        Support Page
      </div>
      <button onClick={changeHandler} className='border-2 border-red-400 bg-yellow-600'>
        Move to About Page
      </button>
      <button onClick={backHandler} className='border-2 border-yellow-200 text-white bg-[#333]'>
        Revise the Tab
      </button>
    </div>

  )
}

export default Support; 