import { useEffect, useMemo, useState } from 'react';
import './app.css';

export default function App() {
  const [cnt, setCnt] = useState(0);
  const [input, setInput] = useState(1);
  const [increment, setIncrement] = useState(1);


  function expensiveTask(num) {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);
  //every Refresh
  useEffect(() => {
    console.log('Render Happened ... ');
  })

  return (
    <div className="App">
      <button onClick={() => setCnt(cnt + 1)}>Increase</button>
      <h1>Count : {cnt}</h1>
      <h1>Double : {doubleValue}</h1>
      <h3>Third : {increment}</h3>
      <button onClick={() => { setIncrement(increment + 1) }}> Third Btn</button>

      <input type="number" placeholder='Enter the number' value={input} onChange={(e) => setInput(e.target.value)} />


    </div>
  );
}