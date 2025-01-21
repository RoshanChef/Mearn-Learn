import { useEffect, useRef, useState } from "react";
export default function App() {
  const [cnt, setCnt] = useState(0);
  let val = useRef(0);

  let btnRef = useRef();

  function changeHandler() {
    val.current = val.current + 1;
    console.log(val.current);
    setCnt(cnt + 1);
  }
  function changeColor() {
    btnRef.current.style.backgroundColor = "red";
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <div className="rounded bg-blue-950 text-white p-2 max-w-max">
        <button
          ref={btnRef}
          onClick={changeHandler}>Increment</button>
      </div>
      <div>
        {cnt}
      </div >
      <div >
        <button
          onClick={changeColor}
          className="bg-blue-700 p-3 text-white rounded">Change the color Increment</button>
      </div >

    </div >
  );
}
