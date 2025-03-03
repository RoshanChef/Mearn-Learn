import React from 'react'
import Hero from './pages/Hero'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailPage from './pages/DetailPage';

export default function App() {
	return (
		<div className='box-border relative overflow-x-hidden app' >

			<div>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Hero />} />
						<Route path='/detail/:id' element={<DetailPage />} />
					</Routes>
				</BrowserRouter>
			</div>
		</div>
	)
}
