import { useState } from 'react'
import './NewProductForm.css'


// useState => hook => utility fnx
// const[var_update_value,setter] = useState(initalize_value); 

function NewProductForm() {
  const [newTitle, setTitle] = useState('');
  const [newDate, setDate] = useState('');

  function title_changer(event) {
    setTitle(event.target.value);
  }

  function date_changer(event) {
    setDate(event.target.value);
  }

  function submit_handler(event) {
    event.preventDefault();

    let productData = {
      titie: newTitle,
      date: newDate,
    }

    console.log(productData);
    setTitle('');
    setDate('');

  }


  return (
    <form className='form' onSubmit={submit_handler}>
      <div className='btnText'>
        <label>Title</label>
        <input type='text' value={newTitle} onChange={title_changer}></input>
      </div>
      <div className='btnDate'>
        <label>Date</label>
        <input type='date' value={newDate} onChange={date_changer}></input>
      </div>
      <div>
        <button type='submit'>Add Product</button>
      </div>
    </form>
  )
}

export default NewProductForm
