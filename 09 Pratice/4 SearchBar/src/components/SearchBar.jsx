import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";


function SearchBar({ input, setInput, enter, setEnter, data }) {
    function changeHandler(e) {
        let str = e.target.value.toLowerCase();
        setInput(str);
    }
    const [filterBar, setFilter] = useState({ flag: "" })

    function enterHandler(e) {
        if (e.key === 'Enter') {
            setEnter(input);
        }
    }

    function clickHand(e) {
        if (e.target.value != "Filter") {
            console.log('value ', e.target.value);
            setInput(e.target.value.toLowerCase());
        }
    }

    return (
        <div className='flex justify-between'>
            <div className='flex  shadow-xl rounded-xs m-3 items-center w-[20vw] h-[4vw] justify-center  relative p-5' >
                <CiSearch className='absolute left-4' />
                <input type="text" placeholder='search for country'
                    value={input} className='border-none outline-none'
                    onChange={changeHandler}
                    onKeyDown={enterHandler}
                />
            </div>
            <div>
                <select name="filterBar" onChange={clickHand} className="shadow-xl rounded-xs m-3 items-center w-[20vw] justify-center  relative p-3" placeholder='filter'>
                    <option value="Filter" selected hidden>Filter</option>
                    {
                        data.map((ele, inx) => (
                            <option value={ele.name.common} key={inx}> {ele.name.common}</option>
                        ))
                    }
                </select>
            </div>
        </div >
    )
}

export default SearchBar
