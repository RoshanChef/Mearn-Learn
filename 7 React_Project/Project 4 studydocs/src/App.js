import React, { useState } from "react";
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'

const App = () => {
	const [isLogIn, setLogIn] = useState(false);
	return (
		<div className="w-full min-h-screen bg-slate-950 flex flex-col">
			<Navbar isLogIn={isLogIn} setLogIn={setLogIn} />

			<Routes>
				{/* Default Route */}
				<Route path="/" element={<Home />}></Route>
				<Route path="/logIn" element={<Login setIsLoggedIn={setLogIn} />}></Route>
				<Route path="/signUp" element={<Signup setIsLoggedIn={setLogIn} />}></Route>
				<Route path="/dashboard" element={<Dashboard />}></Route>
			</Routes>
		</div>
	)

};

export default App;
