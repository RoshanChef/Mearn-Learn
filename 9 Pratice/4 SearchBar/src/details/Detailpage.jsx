import { useParams } from 'react-router-dom';

function Detailpage() {
    let { ele } = useParams();
    let value = (ele);


    console.log(JSON.parse(value));


    return (
        <div>
            <h1>Detail Page for {(ele)}</h1>
        </div>
    );
}

export default Detailpage;
