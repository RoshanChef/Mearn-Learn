import React from 'react'
import Navbar from './components/Navbar'
import Page1 from './pages/Page1'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Page4 from './pages/Page4'

export default function App() {
	return (
		<div className='box-border relative overflow-x-hidden app' >
			<Navbar />
			<Page1 />
			<Page2 />
			<Page3 />
			<Page4 />
		</div>
	)
}
