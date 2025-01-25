import { createContext, useContext, useState } from "react";
import BulbProvider, { BulbContext } from "./context/BulbProvider";

// create inComponent context
// const BulbContext = createContext();

// function BulbProvider({ children }) {
// 	const [light, setLight] = useState(false);

// 	return (<BulbContext.Provider value={{ light: light, setLight: setLight }}>
// 		{children}
// 	</BulbContext.Provider>)
// }

const App = function () {
	return <div className='flex flex-col h-screen items-center justify-center font-semibold '>
		{/* Provider */}
		<BulbProvider>
			<Light />
		</BulbProvider>
	</div >
};

function Light() {

	return <div>
		<LightBlub />
		<LightSwitch />
	</div>
}

function LightBlub() {
	// consume context
	const { light } = useContext(BulbContext);
	return (
		<div>
			{light ? 'Bulb On' : 'Bulb Off'}
		</div>
	)
}

function LightSwitch() {
	// consume context
	const { setLight } = useContext(BulbContext);
	return (
		<div>
			<button onClick={() => setLight(prev => !prev)} className="bg-blue-400 p-4 rounded-lg">Toggle Bulb </button >
		</div >
	)
}



export default App;