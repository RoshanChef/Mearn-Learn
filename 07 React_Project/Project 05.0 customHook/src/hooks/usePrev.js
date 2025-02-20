import { useEffect, useRef } from "react"

function usePrev(value) {
    const ref = useRef(); //undefine

    useEffect(() => {
        ref.current = value; //0
    }, [value]);

    return ref.current; //undefine
}

// Note : in React 
// it returns first, effect gets called later

export default usePrev
