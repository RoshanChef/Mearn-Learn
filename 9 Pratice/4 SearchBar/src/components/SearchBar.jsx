import React from 'react'
import { CiSearch } from "react-icons/ci";

function SearchBar({ input, setInput, enter, setEnter }) {
    function changeHandler(e) {
        let str = e.target.value.toLowerCase();
        setInput(str);
    }
    function enterHandler(e) {
        if (e.key === 'Enter') {
            setEnter(input);
        }
    }
    
    return (
        <div className='flex  shadow-xl rounded-xs m-3 items-center w-[20vw] h-[4vw] justify-center  relative p-5' >
            <CiSearch className='absolute left-4' />
            <input type="text" placeholder='search for country'
                value={input} className='border-none outline-none'
                onChange={changeHandler}
                onKeyDown={enterHandler}
            />
        </div>
    )
}

export default SearchBar
