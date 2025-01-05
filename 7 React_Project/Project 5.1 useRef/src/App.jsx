import { useEffect, useRef, useState } from "react";
import './app.css';

export default function App() {
  let x = useRef(0);
  const [cnt, setCnt] = useState(0);

  function clickHandler() {
    x.current = x.current + 1;
    console.log(x.current);
  }

  useEffect(() => {
    console.log('Re-rendering ...');
  })

  return (
    <div className="btn">
      <button onClick={clickHandler}>
        Click Me {x.current}
      </button>
    </div>
  );
}
