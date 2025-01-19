import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { toast } from 'react-hot-toast'

export default function LoginForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();


  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  const [showPassword, setShowPassword] = useState(false);

  function submitHandler(event) {
    event.preventDefault();
    setIsLoggedIn(true);
    toast.success('Logged In')
    navigate('/dashboard')
  }

  return (
    <div>
      <form onSubmit={submitHandler} className='flex flex-col gap-y-4 mt-4 w-11/12 max-w-[400px]'>
        <label className='w-full max-w-max-[400px]'>
          <p className='text-gray-100 text-[.775rem] mb-1 leading-[1.375rem]'>Email Address <sup className='text-red-500'>*</sup></p>
          <input
            required
            name='email'
            value={formData.email}
            onChange={changeHandler} type='email'
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800  text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white'
              placeholder='Enter Email Id'
          />
        </label>

        <label className='w-full relative'>
          <p className='text-gray-100 text-[.775rem] mb-1 leading-[1.375rem] '>Password <sup className='text-red-500'>*</sup></p>
          <input
            required
            name='password'
            value={formData.password}
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className='bg-gray-800 rounded-[.5rem] w-full p-[.6rem]  text-[.775rem] text-white'
            onChange={changeHandler} type={showPassword ? 'text' : 'password'} placeholder='Enter Email Id'
          />
          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className='absolute right-3 top-[2.3rem] z-[10] cursor-pointer text-white' >
            {showPassword ? (<AiOutlineEyeInvisible fontSize={18} />) : (<AiOutlineEye fontSize={18} />)}
          </span>
        </label>


        <Link to='/'>
          <p className='text-green-100 text-xs max-w-max mt-[-.8rem] ml-auto'>
            Forgot Password ?
          </p>
        </Link>
        <button
          className="mt-6 rounded-[8px] bg-yellow-500 py-[8px] px-[12px] font-medium text-richblack-900"        >
          Sign In
        </button>

      </form>

    </div>
  )
}
