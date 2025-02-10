import React from 'react'
import { Route, Routes, useMatch } from 'react-router-dom'
import Home from './pages/students/Home'
import CourseDetails from './pages/students/CourseDetails'
import CourseList from './pages/students/CourseList'
import Myenrollment from './pages/students/Myenrollment'
import Player from './pages/students/Player'
import Educator from './pages/educator/Educator'
import Dashboard from './pages/educator/Dashboard'
import Addcourse from './pages/educator/Addcourse'
import Mycourses from './pages/educator/Mycourses'
import StudentEnrolled from './pages/educator/StudentEnrolled'
import Navbar from './components/students/Navbar'

function App() {

	const isEducator = useMatch('/educator/*');
	return (
		<div className='min-h-screen overflow-x-hidden bg-white'>
			{
				!isEducator &&
				<Navbar />
			}

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/course_list' element={<CourseList />} />
				<Route path='/course_list/:input' element={<CourseList />} />
				<Route path='/course/:id' element={<CourseDetails />} />
				<Route path='/my_enrollment' element={<Myenrollment />} />
				<Route path='/player/:courseId' element={<Player />} />
				<Route path='/educator' element={<Educator />}>
					<Route index element={<Dashboard />} />
					<Route path='add_course' element={<Addcourse />} />
					<Route path='my_course' element={<Mycourses />} />
					<Route path='student_enrolled' element={<StudentEnrolled />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App