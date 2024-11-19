import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/card';
function App() {
  const response = [
    {
      name: 'SurfExcel',
      day: '22',
      month: 'Oct',
      year: '2001'
    },
    {
      name: 'Tide',
      day: '30',
      month: 'july',
      year: '2010'
    },
    {
      name: 'Whisper',
      day: '28',
      month: 'Aug',
      year: '2012'
    }
  ]
  return (
    <Card>
      <div>
        <Item name={response[0].name}></Item>
        <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}></ItemDate>
        <Item name={response[1].name}></Item>
        <ItemDate day={response[1].day} month={response[1].month} year={response[1].year}></ItemDate>
        <Item name={response[2].name}></Item>
        <ItemDate day={response[2].day} month={response[2].month} year={response[2].year} ></ItemDate>
        <div className="App">
          hello roshan
        </div>
      </div>
    </Card>
  );
}

export default App;