import React from 'react'
import SearchBar from './SearchBar'
import { assets } from '../../assets/assets'

function Main() {
    return (
        
        <div className='flex relative flex-col gap-3 items-center justify-center w-screen md:pt-36 pt-20 px-2 md:px-0 space-y-2 text-center bg-gradient-to-b from-cyan-100/70'>
            <h1 className='md:text-home-heading-large text-5xl font-bold text-gray-800 relative text-home-heading-small max-w-3xl mx-auto'>
                Empower your future with the courses designed to <span className='
                text-blue-500'>fit you choise</span> <img src={assets.sketch} className='md:block hidden absolute bottom-[-2] right-0' alt="" />
            </h1>
            <p className='md:block hidden text-gray-500 max-w-2xl mx-auto'>We bring together world-class instructors, interactive content, and a supportive together world-class commutity to help you achieve your personal and professional goals.</p>


            <p className='md:hidden text-gray-500 max-w-sm mx-auto'>We bring together world-class instructors to help you achieve your professional goals</p>

            <SearchBar />

        </div>
    )
}

export default Main