import { useState } from "react";
import Elemenet from "./components/Elemenet";
import data from "./faq";
const App = () => {
	const [btn, setBtn] = useState(false);
	function clickHandler(id) {
		setBtn((prev) => (prev === id ? false : id));
	}
	
	return <div className="text-white overflow-x-hidden flex w-screen h-screen items-center justify-center">

		<div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>

		<div className="flex flex-col max-h-screen rounded-2xl justify-center items-center backdrop-blur-lg w-[60vw] bg-[#a1a1a117] p-8 transition-all duration-1000">

			{
				data.map((ele) => (
					< Elemenet key={ele.id} question={ele.question} answer={ele.answer} btn={btn===ele.id} clickHandler={() => clickHandler(ele.id)} />
				))
			}
		</div>
	</div>
}

export default App; 
