
function useIncrease() {
    const [value, setVal] = useState(0);
    function increment() {
        setVal(value + 1);
    }
    return [value, increment];
}

export default useIncrease; 