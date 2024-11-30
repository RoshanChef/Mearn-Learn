// import React, { useState } from 'react'
import { useState } from 'react';
import Card from './Card'


const Cards = (props) => {
  let arr = props.apiUrl.data;
  const [likedCourses, setLikeCourses] = useState([]);
  let category = props.category;

  function getCourse() {
    if (category === 'All') {

      let allCourses = [];
      Object.values(arr).forEach((array) => {
        array.forEach((cuourseData) => {
          allCourses.push(cuourseData);
        })
      })
      return allCourses;
    }
    else {
      //specific category
      return arr[category];
    }
  }

  return (
    <div className='flex flex-wrap justify-center gap-4 mb-4'>
      {
        getCourse().map((course) => {
          return (
            <Card key={course.id}
              course={course}
              likedCourses={likedCourses}
              setLikeCourses={setLikeCourses} />
          )
        })
      }
    </div>
  )

}

export default Cards
