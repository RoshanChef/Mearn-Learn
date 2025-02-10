import React from 'react'
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext';
import { Link } from 'react-router-dom';

function CourseCard({ course }) {
    let { currency, averageRateCalc } = useContext(AppContext);

    return (
        <Link Link to={'/course/' + course._id} onClick={() => scrollTo(0, 0)}
            className=' box-border w-60 h-80 border-1  rounded-lg mx-2 border-gray-400/70'>
            {/* image */}
            <img className='rounded-tl-lg w-full object-cover' src={course.courseThumbnail} alt="" />
            {/* content */}
            <div className='text-left p-3'>
                <h3 className='font-semibold'>{course.courseTitle}</h3>
                <p className='text-gray-500'>{course.educator.name}</p>
                <div className='flex items-center space-x-2'>
                    <p>{Math.floor(averageRateCalc(course))}</p>
                    <div className='flex'>
                        {[...Array(5)].map((_, inx) => {
                            return (
                                <img src={inx < Math.floor(averageRateCalc(course)) ? assets.star : assets.star_blank} className="w-3.5 h-3.5" key={inx} />
                            )
                        })}
                    </div>
                    <p className='text-gray-500'>({course.courseRatings.length})</p>
                </div>
                <p className='text-gray-800 text-base font-semibold'> {currency}{(course.coursePrice - (course.discount * course.coursePrice) / 100).toFixed(2)}</p>
            </div>
        </Link >
    )
}

export default CourseCard
