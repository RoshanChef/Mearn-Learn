import { useRef, useState } from 'react';
import './app.css';

export default function App() {
  const [cnt, setCnt] = useState(0);

  function expensiveTask(num) {
    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
  }

  let doubleValue = expensiveTask(2);

  return (
    <div className="App">
      <button onClick={() => setCnt(cnt + 1)}>Increase</button>
      <h1>Count : {cnt}</h1>
      <h1>DoubleValue : {doubleValue}</h1>
    </div>
  );
}