import './Card.css'
import { useState } from 'react';
import logo from '.././test.jpg';

function Card({ id, name, info, price, image, remover }) {

    let description = `${info.substr(0, 200)}...`;
    const [readmore, setReadmore] = useState(false);

    function clickHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className='rounded-md shadow-xl border m-2 p-3 transition-all tranision w-[18rem] min-h-min text-justify'>

            <img src={logo} className='h-5/6'></img>

            <div className='tour-details'>
                <h4 className='tour-price text-green-400 font-bold text-xl'>{price}</h4>
                <h4 className='tour-name font-bold text-xl'>{name}</h4>
            </div>

            <div className='description text-sm'>
                {readmore ? info : description}
                <span onClick={clickHandler} className='text-blue-600 cursor-pointer'>
                    {readmore ? 'show less' : 'readmore'}
                </span>
            </div>

            <button className='bg-red-300  hover:bg-red-500 p-2 border rounded-lg block w-full' onClick={() => remover(id)}>
                Not Interested
            </button>
        </div >
    );
}

export default Card;
