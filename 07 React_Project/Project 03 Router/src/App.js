import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from './components/About';
import Support from './components/Support';
import NotFound from './components/NotFound';
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";

const App = () => {
	return (
		<div>
			<ul >
				<li className="flex justify-end text-yellow-100 text-2xl font-semibold gap-4 bg-blue-500 ">
					<NavLink to="/" >Home</NavLink>
					<NavLink to="/about" >About</NavLink>
					<NavLink to="/support" >Support</NavLink>
				</li>
			</ul>
			<Routes>
				<Route path="/" element={<MainHeader />}>
					{/* Default Route */}
					<Route index element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/support" element={<Support />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Route>
			</Routes>
		</div>
	)

};

export default App;



