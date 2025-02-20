import { useParams } from 'react-router-dom';

function Detailpage() {
    let { ele } = useParams();
    let value = JSON.parse(ele);
    console.log(value);
    


    return (
        <div>
            <h1>Detail Page for {value}</h1>
        </div>
    );
}

export default Detailpage;
