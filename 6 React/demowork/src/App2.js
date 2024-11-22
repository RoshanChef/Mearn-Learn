import './App2.css'
import Product from './component_2/Product'
import NewProduct from './component_2/NewProduct'

function App2 () {
  const stores = [
    {
      id: 's1',
      date: new Date(2023, 28, 23), // Example date, can be modified
      title: 'Airial',
      amount: 10 // Example amount, can be modified
    },
    {
      id: 's2',
      date: new Date(2023, 8, 24),
      title: 'Nirma',
      amount: 20
    },
    {
      id: 's3',
      date: new Date(2023, 3, 25),
      title: 'Surf Excel',
      amount: 15
    },
    {
      id: 's4',
      date: new Date(2023, 6, 26),
      title: 'Tide',
      amount: 25
    }
  ]
  return (
    <div className='App'>
      <NewProduct/>
      <Product data={stores}></Product>
    </div>
  )
}

export default App2
