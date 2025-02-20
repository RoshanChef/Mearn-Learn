import "./App.css";
import { useState } from 'react';

function App() {

  let [count, setCount] = useState(0);

  function decrease() {
    setCount(count - 1);
    console.log('Decrease .. ');
  }

  function increase() {
    setCount(count + 1);
    console.log('increase ...');
  }
  function reset() {
    setCount(0);
  }
  return (
    <div className='gap-10 bg-[#02042a] text-white items-center flex flex-col justify-center w-[100vw] h-[100vh]' >
      <div className='text-orange-300 text-xl' >Increase && Decrease</div>

      {/* counter */}
      <div className='bg-white rounded px-6 py-4 justify-center  text-black font-bold text-[25px] flex gap-10'>
        <button onClick={decrease} className='border-r-2 text-center w-20 text-5xl border-[#bfbfbf]'>-</button>
        <div className='text-5xl font-bold'>{count}</div>
        <button onClick={increase} className='border-l-2 text-center w-20 text-5xl border-[#bfbfbf]'>+</button>
      </div>

      <button className='bg-blue-600 px-5 py-2 rounded' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
