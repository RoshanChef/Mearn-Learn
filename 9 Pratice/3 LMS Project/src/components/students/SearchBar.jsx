import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { data, useNavigate } from 'react-router-dom'

function SearchBar({ data }) {
    const navigate = useNavigate();
    const [input, setInput] = useState(data ? data : '');

    const onSearchHandler = (e) => {
        e.preventDefault();
        navigate('/course_list/' + input);
    }

    return (
        <div className='w-full flex justify-center'>
            <form onSubmit={onSearchHandler} className='flex gap-1.5 border-2 border-gray-400/70 items-center rounded max-w-xl w-full md:h-14 h-12'>
                <img src={assets.search_icon} alt="not found" className='md:w-auto w-10 px-3' />
                <input onChange={(e) => setInput(e.target.value)} type='text' value={input} placeholder='Search for courses' className='w-full h-full outline-none' />
                <button type='submit' className='bg-blue-500 py-2 mx-1 px-7 md:py-3 rounded'>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar
