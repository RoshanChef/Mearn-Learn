import './ItemDate.css'

function ItemDate(properties) {
    const day = properties.day;
    const month = properties.month;
    const year = properties.year;

    return (
        <div className='date'>
            <span>{day}</span>
            <span>{month}</span>
            <span>{year}</span>
        </div>
    );
}
export default ItemDate; 