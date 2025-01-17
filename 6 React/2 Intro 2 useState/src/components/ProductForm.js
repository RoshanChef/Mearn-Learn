import { useState } from 'react';
import './ProductForm.css'
function ProductForm(props) {

    const [title, setTitle] = useState('');
    const [date, setDate] = useState('');


    function titleChangeHandler(e) {
        setTitle(e.target.value);

    }
    function dateChangeHandler(e) {
        setDate(e.target.value);
        // console.log('Title ', title);
        // console.log('Date ', date);
    }
    function submitHandler(e) {
        e.preventDefault();
        let obj = {
            title: title,
            date: date
        }
        // console.log(obj);
        setDate(''); 
        setTitle(''); 
        props.fnx(obj);
    }
    return (
        <form className='form' onSubmit={submitHandler}>
            <div>
                <label>Title</label>
                <input type="text" onChange={titleChangeHandler} value={title}></input>
            </div>
            <div>
                <label>Date</label>
                <input type="date" min='2023-01-01' max='2025-02-02' value={date} onChange={dateChangeHandler} />
            </div>
            <div>
                <button type='submit'>Add to Card</button>
            </div>
        </form>
    )
}

export default ProductForm
