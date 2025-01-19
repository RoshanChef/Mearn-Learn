import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';

export default function SignupForm({ setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [accountType, setAccountType] = useState("student");

  let navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value
      }
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Please enter same password!");
    }
    else {
      toast.success("Account created!");
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  }

  return (
    <div>

      <div className='flex max-w-max p-1 gap-x-1 my-6 rounded-full bg-gray-700 text-white'>
        <button className={`${accountType === "student"
            ?
            "bg-gray-900 text-white"
            :
            "bg-transparent text-slate-400"} py-2 px-5 rounded-full transition-all duration-200`}
          onClick={() => { setAccountType("student") }}
        >
          Student
        </button>
        <button
          className={`${accountType === "instructor"}`}
          onClick={() => { setAccountType('instructor') }}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className='flex gap-y-2 flex-col'>
        <div className='flex gap-2'>
          <label className='w-[50%]'>
            <p className='text-gray-100 text-[.775rem] mb-1 leading-[1.375rem]'>First Name<sup className='text-red-500'>*</sup></p>
            <input required
              type='text'
              value={formData.firstName}
              name='firstName'
              placeholder='Enter first name'
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800 text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white'
              onChange={changeHandler}></input>
          </label>
          <label className='w-[50%]'>
            <p className='text-gray-100 text-[.875rem] mb-1 leading-[1.375rem]'>Last Name<sup className='text-red-500'>*</sup></p>
            <input type='text'
              value={formData.lastName}
              name='lastName'
              placeholder='Enter last name'
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800 text-[.775rem] rounded-[.5rem] w-full p-[.6rem] text-white'
              onChange={changeHandler}></input>
          </label>
        </div>
        <label className='w-full'>
          <p className='text-gray-100 text-[.775rem] mb-1 leading-[1.375rem]'>Email Address</p>
          <input required
            type='email'
            name='email'
            value={formData.email}
            placeholder='Enter email address'
            style={{
              boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
            }}
            className='bg-gray-800 rounded-[.5rem] text-[.775rem] w-full p-[.6rem] text-white'
            onChange={changeHandler}></input>
        </label>

        <div className='flex gap-2'>
          <label className='relative w-[50%]' >
            <p className='text-gray-100 text-[.775rem] mb-1 leading-[1.375rem]'>Create Password<sup className='text-red-500'>*</sup></p>
            <input required
              type={showPassword ? ('text') : ('password')}
              name='password'
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800 rounded-[.5rem] text-[.775rem] w-full p-[.6rem] text-white'
              onChange={changeHandler}
              value={formData.password} />
            <span onClick={() => setShowPassword((prev) => !prev)}
              className='absolute right-3 top-[2.3rem] text-[.775rem] z-[10] cursor-pointer text-white'
            >
              {showPassword ? (<AiOutlineEyeInvisible fontSize={18} />) : (<AiOutlineEye fontSize={18} />)}
            </span>
          </label>
          <label className='relative w-[50%]'>
            <p >Confirm Password<sup className='text-red-500'>*</sup></p>
            <input
              required
              onChange={changeHandler}
              name='confirmPassword'
              style={{
                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
              }}
              className='bg-gray-800 rounded-[.5rem] text-[.775rem]  w-full p-[.6rem] text-white'
              type={showConfirmPassword ? ('text') : ('password')}
              value={formData.confirmPassword}></input>
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}
              className='absolute right-3 top-[2.3rem] text-[.775rem] z-[10] cursor-pointer text-white'
            >
              {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={18} />) : (<AiOutlineEye fontSize={18} />)}
            </span>
          </label>
        </div>

        <button
          className="mt-6 rounded-[8px] bg-yellow-500 py-[8px] px-[12px] font-medium text-richblack-900 w-full"
        >
          Create Account
        </button>
      </form>

    </div>
  )
}
