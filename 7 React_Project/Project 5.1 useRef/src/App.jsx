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

  let btnRef = useRef();
  function changeHandler() {
    btnRef.current.style.backgroundColor = 'red';
  }

  return (
    <div className="btn">
      <button onClick={clickHandler}>
        Click Me {x.current}
      </button>
      <div className="con">
        <p>See The changes</p>
        <button onClick={clickHandler} ref={btnRef}>See Changes</button>
        <button onClick={changeHandler}>Change are there</button>
      </div>
    </div>
  );
}
