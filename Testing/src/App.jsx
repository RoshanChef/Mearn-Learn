import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase, setData } from './reducer/slice';
import { useEffect } from 'react';

function App() {
  const data = useSelector(state => state.counter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setData("hell Roshan kalmathe how the everything is working by your own world"));
    console.log('first ', data.data);
  })

  // function call() {
  //   console.log('second '+ data.data);
  // }

  // call();

  return (
    <>
      <h1>{data.cnt}</h1>
      <button onClick={() => dispatch(increase())}>Increase</button>
      <button onClick={() => dispatch(decrease())}>Decrease</button>
    </>
  )
}

export default App
