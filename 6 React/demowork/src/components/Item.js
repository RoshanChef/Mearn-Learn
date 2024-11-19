import './Item.css'

function Item(Properties) {
    // const item_con = "Gulabo";
    return (
        <div className='item_con'>{Properties.name}</div>
    );
}

export default Item;