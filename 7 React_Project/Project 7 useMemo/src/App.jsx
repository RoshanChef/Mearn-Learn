import { useEffect, useMemo, useState } from 'react';
import './app.css';

export default function App() {
  // useMemo :=> to Prevent unnecessary expensive tasks/operations/calculations 

  const [cnt, setCnt] = useState(0);
  const [input, setInput] = useState("");

  function expensive(num) {
    console.log('Inside expensive');

    for (let i = 0; i < 1000000000; i++) { }
    return num * 2;
  }

  /* 
    Syntax : 
    useMemo(callback , [chagesVariable])
  */
  let value = useMemo(() => expensive(input), [input]);

  return (
    <div className="App">
      <button onClick={() => setCnt(cnt + 1)}>
        Increment
      </button>

      <div>
        Count : {cnt}
      </div>

      <input type="number" value={input} onChange={(e) => setInput(e.target.value)} />
      <div>
        Expensive : {value}
      </div>
    </div>
  );
}