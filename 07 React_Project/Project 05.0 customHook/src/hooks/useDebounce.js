import { useRef } from "react";

function useDebounce(originalFn) {
    let timer = useRef();

    function fn() {
        clearTimeout(timer.current);
        timer.current = setTimeout(originalFn, 200);
    }

    return fn;
}

export default useDebounce
