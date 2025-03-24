import './app.css';
import Title from './components/Title';
import DateT from './components/DateT';
import Card from './components/Card';

export default function App() {
    let title = 'Karn';
    const res = [
        {
            title: "Nirma",
            day: "21",
            month: 'Aug',
            year: "2023"
        },

        {
            title: "Ujala",
            day: "22",
            month: 'Oct',
            year: "2024"
        },
        {
            title: "SirfExcel",
            day: "23",
            month: 'Nov',
            year: "2025"
        }
    ]

    function clickHandler() {
        console.log('clickHandler is called');
    }
    
    function Welcome() {
        return <h1>App Inner components</h1>
    }


    return (
        <Card>
            <Welcome />
            <h2 onClick={clickHandler} className='head2'>
                SuryaPutra {title}
            </h2>
            <Title title={res[0].title} >
                Title is here
            </Title>
            <DateT day={res[0].day} month={res[0].month} year={res[0].year}></DateT>
            <Title title={res[1].title}></Title>
            <DateT day={res[1].day} month={res[1].month} year={res[1].year}></DateT>
            <Title title={res[2].title}></Title>
            <DateT day={res[2].day} month={res[2].month} year={res[2].year}></DateT>
        </Card>
    )


}