import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";


const App = () => {


	return (
		<div>

			<Routes>
				<Route path="/" element={<Signup />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
			</Routes>
		</div>
	)

};

export default App;