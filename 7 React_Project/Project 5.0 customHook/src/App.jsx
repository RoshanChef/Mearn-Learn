import { useState } from "react";
import { usePost } from './hooks/useFetch';
import usePrev from './hooks/usePrev';

/*  
//custom hook inplace 
function useIncrease() {
  const [value, setVal] = useState(0);
  function increment() {
    setVal(value + 1);
  }
  return [value, increment];
}
*/



// export default function App() {
//   return <>
//     <Counter />
//   </>
// }

// function Counter() {
//   const [value, increment] = useIncrease();
//   return (
//     <div className="flex items-center justify-center  bg-orange-800 h-screen">
//       <button onClick={increment} className='bg-black rounded-md text-white p-5 text-2xl'>
//         Count {value}
//       </button>
//     </div>
//   )
// }



const App = function () {

	const [cnt, setCnt] = useState(0);
	const prev = usePrev(cnt); //0
	// const postTitle = usePost();
	

	return <div className='flex flex-col h-screen items-center justify-center'>

		{/* {postTitle} */}
		<button onClick={() => setCnt(prev => prev + 1)}>Count : {cnt}</button>
		<p>Previous value {prev}</p>
	</div>
};

export default App;