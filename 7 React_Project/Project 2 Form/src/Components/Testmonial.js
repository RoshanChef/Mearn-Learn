import { useEffect, useState } from "react";
import Card from "./Card";

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
function Testmonial(props) {
    let reviews = props.reviews;
    const [inx, setIndex] = useState(0);

    let base = reviews.length - 1;
    function leftHandler() {
        if (inx === 0)
            setIndex(base);
        else
            setIndex(inx - 1);
    }

    function rightHandler() {
        if (inx === base)
            setIndex(0);
        else
            setIndex(inx + 1);
    }
    function sunpriseHandler() {
        let ranIndex = Math.floor(Math.random() * reviews.length);
        setIndex(ranIndex);
    }
    return (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 rounded-lg transition-all duration-500 hover:shadow-xl">
            <Card review={reviews[inx]}></Card>
            <div>{inx}</div>

            <div className='my-3 text-xl text-violet-400 gap-3 flex justify-center '>
                <button onClick={leftHandler}>
                    < FiChevronLeft className=' cursor-pointer hover:text-violet-500' />
                </button>
                <button onClick={rightHandler}>
                    <FiChevronRight className=' cursor-pointer hover:text-violet-500' />
                </button>
            </div>
            <div>
                <button onClick={sunpriseHandler} className='capitalize transition-all duration-200 font-bold text-lg bg-violet-400 hover:bg-violet-500 px-5 text-white py-1 rounded-md'>
                    surpire me
                </button>
            </div>
        </div>
    )
}
export default Testmonial;