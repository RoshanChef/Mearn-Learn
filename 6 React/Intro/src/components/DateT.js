import './date.css'
export default function DateT(props) {
    function click() {
        console.log('object is ', props);
    }
    return (
        <div onClick={click}>
            <ul>
                <li> {props.day}</li>
                <li> {props.month}</li>
                <li> {props.year}</li>
            </ul>
        </div>
    );
}