import './ItemDate.css';

function ItemDate(pros) {
    return (
        <div className='box'>
            <span>{pros.day}</span>
            <span>{pros.month}</span>
            <span>{pros.year}</span>
        </div>
    )
}

export default ItemDate; 