import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CourseCard from '../../pages/students/CourseCard';
import { AppContext } from '../../context/AppContext';

function CourseSection() {
    const { allcouses, fetchAllCourses } = useContext(AppContext);
    useEffect(() => {
        fetchAllCourses();
    }, [])

    return (
        <div>

            <div className='py-16 md:px-40 px-8'>
                <h2 className='text-3xl font-medium text-gray-800'>Learn from the best</h2>
                <p className='text-sm md:text-base mt-3 text-gray-500'>Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.</p>

                <div className='grid px-4 md:px-0  md:my-16 gap-4 my-10 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] justify-items-center'>
                    {allcouses.splice(0, 4).map((ele, inx) => {
                        return (<CourseCard key={inx} course={ele} />)
                    })}
                </div>

                <Link to={'/course_list'} onClick={() => scrollTo(0, 0)}
                    className='text-gray-500 border border-gray-500/30 px-10 py-3 rounded'
                >Show all courses</Link>
            </div>
        </div>

    )
}

export default CourseSection
