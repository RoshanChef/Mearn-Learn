import React from 'react';
import { useNavigate } from "react-router-dom";

function Card({ ele }) {
    const { flags, name, population, region, capital } = ele;

    const navigate = useNavigate();
    function clickHandler() {
        const queryString = (JSON.stringify(ele));
        navigate(`/details/${queryString}`);
    }

    return (
        <div
            onClick={clickHandler}
            className='flex cursor-pointer flex-col m-3 rounded-lg hover:shadow-2xl shadow-lg'
        >
            <div className='h-[25vh] rounded-b-lg'>
                <img
                    src={flags.png}
                    alt={flags.alt}
                    className='w-full rounded-t-lg object-cover h-full'
                />
            </div>
            <div className='p-2 rounded-b-lg'>
                <h2 className='font-bold'>{name.common}</h2>
                <p><span className='font-semibold'>Population: </span> {population}</p>
                <p><span className='font-semibold'>Region: </span>{region}</p>
                <p><span className='font-semibold'>Capital: </span>{capital}</p>
            </div>
        </div>
    );
}

export default Card;
