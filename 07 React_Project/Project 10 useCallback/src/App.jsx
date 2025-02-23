import { useCallback, useEffect, useState } from "react";
import Childcomponent from "./components/Childcomponent";

const App = () => {
  const [cnt, setCnt] = useState(0);
  const [btnCnt, setbtnCnt] = useState(0);
  /*
   syntext
    useCallback(fn, [dependcylist])
    based on dependcylist re-creation of function happens

   1. it freeze the function re-creation 
   2. handles expensive operation
   3. memoaize the function defination
  */

  useEffect(() => {
    console.log('render happend ... ', cnt);
  })

  // re-create
  // function fnx() {
  //   console.log('function called here ');
  //   setbtnCnt(btnCnt + 1);
  // }


  const fnx = useCallback(() => {
    setbtnCnt(btnCnt + 1);
  }, [btnCnt])

  return (
    <div className="flex flex-col gap-12 overflow-hidden">
      <div className="flex items-center w-screen h-screen justify-center">
        <button className="bg-[#333] p-3 text-white  rounded-md" onClick={() => setCnt(cnt => cnt + 1)}> Increase {cnt}</button>
        <Childcomponent btnCnt={btnCnt} setbtnCnt={setbtnCnt} fnx={fnx} />
      </div>
    </div>)
}

export default App; 