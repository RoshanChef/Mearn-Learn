import React from 'react'
import { FcLike, FcLikePlaceholder } from 'react-icons/fc'
import path from './fall.jpg';
import { toast } from 'react-toastify'

const Card = (props) => {
  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikeCourses = props.setLikeCourses;


  function clickHandler() {
    if (likedCourses.includes(course.id)) {
      setLikeCourses((prev) => prev.filter((cid) => cid !== course.id));
      toast.warning("Like removed")
    }
    else {
      if (likedCourses.length === 0) {
        setLikeCourses([course.id]);
      }
      else {
        setLikeCourses((prev) => [...prev, course.id])
      }
      toast.success("Like Succesfully")
    }

  }

  return (

    <div className='w-[300px] bg-bgDark  rounded-md overflow-hidden text-white flex flex-col'>
      <div className='relative'>
        <img src={path}></img>
        <div className='absolute right-1 p-2 w-[40px]  flex justify-center items-center h-[40px] bottom-[-25px] bg-red-200 rounded-full border-2 m-3'>
          <button onClick={clickHandler} >
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize='1.75rem' />) : <FcLikePlaceholder fontSize='1.75rem' />
            }
          </button>
        </div>
      </div>

      <div className='px-3 text-[.9rem] py-2'>
        <p className='font-semibold leading-6'>{course.title} </p>
        <p className='text-justify mt-2'>{
          (course.description.length > 100) ?
            course.description.substr(0, 150) + ' ...' :
            course.description
        } </p>
      </div>
    </div>

  )
}

export default Card