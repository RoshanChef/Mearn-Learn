import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';

function App() {
  const res = [
    {
      name: "Nirma",
      day: "21",
      month: 'Aug',
      year: "2023"
    },

    {
      name: "Ujala",
      day: "22",
      month: 'Oct',
      year: "2024"
    },
    {
      name: "SirfExcel",
      day: "23",
      month: 'Nov',
      year: "2025"
    }

  ]
  return (
    <Card>
      <Item name={res[0].name}>Welcome to coding</Item>
      <ItemDate day={res[0].day} month={res[0].month} year={res[0].year}  ></ItemDate>
      <Item name={res[1].name}></Item>
      <ItemDate day={res[1].day} month={res[1].month} year={res[1].year}  ></ItemDate>
      <Item name={res[2].name}></Item>
      <ItemDate day={res[2].day} month={res[2].month} year={res[2].year}  ></ItemDate>
      <div className="app">
        hello Roshan
      </div>
    </Card>
  );
}

export default App;