import React, { useState } from "react";
import Navbar from './Components/Navbar';
import { apiUrl, filterData } from "./data";
import Filter from './Components/Filter';
import Cards from "./Components/Cards";

const App = () => {
	const [category, setCategory] = useState(filterData[0].title);

	return (
		<div className="min-h-screen flex flex-col" >
			<Navbar />
			<div className="bg-gray-500  w-full min-h-screen flex flex-col items-center">
				<Filter filterData={filterData} category={category} setCategory={setCategory} />
				< Cards apiUrl={apiUrl} category={category}/>
			</div>
		</div>
	)

};

export default App;
