import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from "./countriesData.js";
import Cards from './components/Cards';
import Detailpage from './details/Detailpage.jsx';

function App() {
	return (
		<Router>
			<Routes>
				{/* Home route to display Cards */}
				<Route path="/" element={<Cards data={data} />} />

				{/* Details route */}
				<Route path="/details/:ele" element={<Detailpage />} />
			</Routes>
		</Router>
	);
}

export default App;
