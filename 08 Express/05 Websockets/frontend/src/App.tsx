import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState(0)
  const input_val = useRef(null);

  function sendMessage() {
    if (!socket) {
      return;
    }

    const val = input_val.current.value;
    // @ts-ignore
    socket.send(val);
  }

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000");
    // @ts-ignore
    setSocket(ws);

    ws.onmessage = (msg) => {
      alert(msg.data);
    };

  }, [])

  return (
    <div>
      <input type="text" placeholder='Message ..' ref={input_val} />
      <button onClick={sendMessage}>send</button>
    </div>
  )
}

export default App
