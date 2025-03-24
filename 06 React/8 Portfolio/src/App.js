import React, { useState } from "react";
import reviews from "./data";
import Testmonial from "./Components/Testmonial";

const App = () => {

	return (
		<div className="min-h-screen flex flex-col items-center justify-center text-center bg-gray-200"  >
			<div>
				<h2 className="font-bold text-3xl">Our Testmonials</h2>
				<div className="bg-violet-400 h-[4px] w-[60%] mx-auto mt-1"></div>
			</div>
			<Testmonial reviews={reviews} />
		</div>
	)
};

export default App;
