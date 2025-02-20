import React from 'react'
import { assets } from '../../assets/assets'

function Companies() {
    return (
        
        <div className='pt-16 '>
            <p className='text-base text-gray-500'>Trusted by Learners from</p>
            <div className='flex flex-wrap items-center justify-center gap-5 md:gap-16 mt-5 md:mt-10'>
                <img className='w-20 md:w-28' src={assets.microsoft_logo} alt="logo not found" />
                <img className='w-20 md:w-28' src={assets.walmart_logo} alt="logo not found" />
                <img className='w-20 md:w-28' src={assets.adobe_logo} alt="logo not found" />
                <img className='w-20 md:w-28' src={assets.paypal_logo} alt="logo not found" />
                <img className='w-20 md:w-28' src={assets.accenture_logo} alt="logo not found" />
            </div>

        </div>
    )
}

export default Companies
