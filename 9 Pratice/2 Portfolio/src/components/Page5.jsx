import { comments} from '../utils/data';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './slider.css';

import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 2,
    touchMove: true,
    useCSS: true,
};

function Page5() {
    return (
        <div className='w-screen h-screen bg-[#ebd3a542] flex flex-col justify-center gap-5 p-4'>
            <h1 className='text-5xl font-semibold text-center mb-8'>People talk about us </h1>
            <div>
                <p className='text-center'>I got a job was in accordance with the salary and field of work</p>
                <p className='text-center'>The Process of submitting an aplication was quite copy.</p>
            </div>
            <div className='p-16 pt-[4rem] h-[35rem] .box'>
                <Slider {...settings} >
                    {
                        comments.map((comment, inx) => (
                            <div key={inx} className='text-center shadow-lg w-[6rem] py-3 flex gap-4 rounded-md cursor-pointer h-[18rem] card'>
                                <div className="image-container  flex justify-center">
                                    <img src={`/Images/${comment.img}`} alt="not found" className='rounded-full top-[-3rem] w-[4rem] h-[4rem] object-cover' />
                                </div>
                                <p className='pt-4'>{comment.comment}</p>
                                <p className='pt-9'>{comment.name}</p>
                                <p className='text-sm text-gray-500'>{comment.post}</p>
                            </div>
                        ))
                    }
                </Slider >
            </div>
        </div >
    )
}

export default Page5;