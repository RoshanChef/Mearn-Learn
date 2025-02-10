import React from 'react'
import Main from '../../components/students/Main'
import Companies from '../../components/students/Companies'
import CourseSection from '../../components/students/CourseSection'
import Testimonial from '../../components/students/Testimonial'
import CallAction from '../../components/students/CallAction'
import Footer from '../../components/students/Footer'

function Home() {
    return (
        <div className='flex flex-col items-center space-y-7 text-center'>
            <Main />
            <Companies />
            <CourseSection />
            <Testimonial />
            <CallAction />
            <Footer />

        </div>
    )
}

export default Home
