import React from 'react'
import Hero from './pages/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
	return (
		<div className='box-border relative overflow-x-hidden app' >

			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Hero />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}
