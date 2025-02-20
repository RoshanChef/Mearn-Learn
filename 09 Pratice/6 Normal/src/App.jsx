import { useEffect, useState } from "react";
import { AppProvider } from "./components/Main";
import Home from "./components/Home";

function App() {

	const [value, setValue] = useState(0);

	useEffect(() => {

	})

	return (
		<div>
			<AppProvider>
				<div>
					<Home />
				</div>
			</AppProvider>
			<button onClick={() => setValue(e => e + 1)}>Current Value {value} </button>
		</div>
	)
}

export default App;