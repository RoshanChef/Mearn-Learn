import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"
import './App.css'

const Increament = createContext();
function Parent() {
	return (
		<IncreamentProvider>
			<Increase />
			<Decrease />
			<Value />
		</IncreamentProvider>
	)
}
function Increase() {
	let { setCnt } = useContext(Increament);
	return <button onClick={() => setCnt(prev => prev + 1)}>Increase </button>
}
function Decrease() {
	let { setCnt } = useContext(Increament);
	return <button onClick={() => setCnt(prev => prev - 1)} >Decrease </button>
}

function Value() {
	let { cnt } = useContext(Increament);
	return <div> {cnt}</div>
}

function IncreamentProvider({ children }) {
	const [cnt, setCnt] = useState(0);
	return <Increament.Provider value={{ cnt: cnt, setCnt: setCnt }}>
		{children}
	</Increament.Provider >
}

function App() {
	return (
		<div >
			<Parent />
		</div>
	)
}

export default App
