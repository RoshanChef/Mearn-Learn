import { useState } from 'react';
import data from "./data";
import Tours from './components/Tours';

function App() {
  const [tours, setTour] = useState(data);
  function remover(id) {
    let newTour = tours.filter((tour) => tour.id != id)
    setTour(newTour);
  }

  if (tours.length === 0) {
    return (
      <div className='flex flex-col gap-2 font-bold text-3xl w-screen h-screen items-center justify-center'>
        <h1>No Tours</h1>
        <button onClick={() => setTour(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div>
      <Tours tours={tours} remover={remover}></Tours>
    </div>
  );
}

export default App;
