import React from 'react'
import SignupForm from '../components/SignupForm'
import LoginForm from '../components/LoginForm'
import frame from '../components/frame.png'
import { FcGoogle } from 'react-icons/fc'

const Template = ({ title, des1, des2, image, formtype, setIsLoggedIn }) => {

    return (

        <div className='flex py-12 w-11/12 max-w-[1160px] justify-evenly mx-auto gap-x-5 gap-y-0 mt-[-1rem]'>
            <div className='w-11/12 max-w-[400px]'>
                <h1 className='text-gray-200 text-[1.5rem] font-bold leading-[2.375rem] '>{title}</h1>
                <p className='text-[.8rem] leading-[1.625rem] mt-4'>
                    <span className='text-gray-100'>{des1}</span>
                    <br />
                    <span className='italic text-green-100'>{des2}</span>
                </p>
                {
                    (formtype === 'signUp') ?
                        (<SignupForm setIsLoggedIn={setIsLoggedIn} />)
                        : (<LoginForm setIsLoggedIn={setIsLoggedIn} />)
                }
                <div className='flex  w-full items-center my-4 gap-x-2'>
                    <div className='h-[1px] w-full bg-gray-800'></div>
                    <p className='text-white'>OR</p>
                    <div className='h-[1px] w-full bg-gray-800'></div>
                </div>
                <button className='text-white items-center gap-2 border-gray-800 p-1 rounded-[8px] gap-x-2 mt-6 border flex justify-center w-full'>
                    <FcGoogle />
                    <p >
                        Sign Up with Google
                    </p>
                </button>
            </div>

            <div className='relative w-10/12 max-w-[20rem]'>
                <img
                    src={frame} alt='frame images'
                    width={558}
                    height={504}
                    loading="lazy" />

                <img src={image} alt='frame images'
                    className='absolute top-[-.7rem] right-[0.7rem]'
                    width={550} height={504} loading='lazy'
                />
            </div>
        </div>
    )
}

export default Template
