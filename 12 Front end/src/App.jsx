import React from "react";
import { data, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup";
import { useEffect } from "react";


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