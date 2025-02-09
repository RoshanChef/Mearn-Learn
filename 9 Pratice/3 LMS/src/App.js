import React from 'react'
import { Route, Routes } from 'react-router-dom'
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

function App() {
	return (
		<div>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/course_list' element={<CourseList />} />
				<Route path='/course_list/:input' element={<CourseList />} />
				<Route path='/course/:id' element={<CourseDetails />} />
				<Route path='/my_enrollment' element={<Myenrollment />} />
				<Route path='/player/:courseId' element={<Player />} />
				<Route path='/educator' element={<Educator />}>
					<Route index element={<Dashboard />} />
					<Route path='/educator/add_course' element={<Addcourse />} />
					<Route path='/educator/my_course' element={<Mycourses />} />
					<Route path='/educator/student_enrolled' element={<StudentEnrolled />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
