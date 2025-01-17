import './App.css';
import A from './components/A';

function App() {

  // lifting up  
  function parentFnx(obj) {
    console.log('Parent function get ', obj);
  }

  return (
    <div className='App'>
      App
      <A fnx={parentFnx}></A>
    </div>
  )
}
export default App
