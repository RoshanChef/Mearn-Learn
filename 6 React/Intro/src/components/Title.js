import './title.css'
export default function Title(props) {
    return (
        <div>
            <p> {props.title} </p>
            {props.children}
        </div>
    );
}