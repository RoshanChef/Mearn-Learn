import { useRef, useState } from 'react';
import './app.css';

export default function App() {
  const [time, setTime] = useState(0);

  let timerId = useRef(null);

  function startTimer() {
    timerId.current = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
  }
  //lag because of the useState schedule
  function stopTimer() {
    clearInterval(timerId.current);
    timerId.current = null;
  }

  function resetTimer() {
    setTime(0);
    timerId.current = null;
  }
  return (
    <div className="App">
      <h1>StopWatch :{time} </h1>

      <button onClick={startTimer}>
        Start
      </button>

      <button onClick={stopTimer}>
        Stop
      </button>

      <button onClick={resetTimer}>
        Reset
      </button>

    </div>
  );
}