import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import image from './portfolio.jpg'

function Card(props) {
    let review = props.review;
    return (
        <div className='flex flex-col md:relative'>
            <div className='relative z-[2]'>
                <div className='absolute top-[-7rem]'>
                    <img src={image} className='rounded-full aspect-square w-[140px] h-[140px]'></img>
                    <div className='w-[140px] h-[140px] bg-violet-500 rounded-full top-[-6px] absolute z-[-1] left-[10px]'> </div>
                </div>
            </div>
            <div>
                <p className='font-bold capitalize text-lg'>{review.name}</p>
                <p className='text-violet-400 uppercase text-sm'>{review.job}</p>
            </div>
            <div>
                <FaQuoteLeft className='text-purple-400 mx-auto mt-3' />
            </div>
            <div>
                <p>{review.text}</p>
            </div>
            <div>
                <FaQuoteRight className='text-purple-400 mx-auto mt-3' />
            </div>
        </div>
    );
}

export default Card; 