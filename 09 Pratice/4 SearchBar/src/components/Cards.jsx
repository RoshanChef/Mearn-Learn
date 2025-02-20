import React, { useEffect, useState } from 'react';
import Card from './Card';
import SearchBar from './SearchBar';

function Cards({ data }) {
    const [input, setInput] = useState('');
    const [val, setVal] = useState(data);
    const [enter, setEnter] = useState(null);

    useEffect(() => {
        const filtered = data.filter((ele) => {
            return ele.name.common.toLowerCase().includes(input);
        });
        setVal(filtered);
    }, [input]);


    return (
        <div>
            <div>
                <SearchBar input={input} data={data} setInput={setInput} enter={enter} setEnter={setEnter} />

            </div>
            {enter &&
                <div className='pl-8 shadow-2xl max-w-screen'>{enter}</div>
            }

            <div className='grid grid-cols-[repeat(auto-fit,minmax(250px,4fr))] gap-12'>
                {
                    val.map((ele, inx) => (<Card key={inx} ele={ele} />))
                }
            </div>

        </div>
    );
}

export default Cards;