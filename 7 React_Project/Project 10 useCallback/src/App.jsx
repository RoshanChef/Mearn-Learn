import { useCallback, useState } from "react";
import Childcomponent from "./components/Childcomponent";

const App = () => {
  const [cnt, setCnt] = useState(0);

  /*
   syntext
    useCallback(fn, [dependcylist])
    based on dependcylist re-creation of function happens

   1. it freeze the function re-creation 
   2. handles expensive operation
   3. function memoaization
  */

  const handler = useCallback(() => {
    setCnt(cnt + 1);
  }, [])

  return (
    <div className="flex flex-col gap-12">

      <div className="inline-flex gap-10">
        <p>Count : {cnt}</p>
        <button className="bg-blue-500 p-3" onClick={handler}>Increament</button>
      </div>

      <div className="bg-violet-500 p-3">
        <Childcomponent buttonName={"child btn"} handler={handler} />
      </div>

    </div>)
}


export default App; 