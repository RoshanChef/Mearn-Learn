import { useState } from 'react'

import './App.css'
import Ajay from './components/Ajay'
import Vipin from './components/Vipin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Ajay course={"javascript"} />
        <Vipin course={"java"}/>
      </div>
    </>
  )
}

export default App
