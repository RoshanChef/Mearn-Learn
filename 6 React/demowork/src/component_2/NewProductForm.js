import './NewProductForm.css'

function NewProductForm () {
  return (
    <form className='form'>
      <div className='btnText'>
        <label>Title</label>
        <input type='text'></input>
      </div>
      <div className='btnDate'>
        <label>Date</label>
        <input type='date'></input>
      </div>
      <div>
        <button type='submit'>Add Product</button>
      </div>
    </form>
  )
}

export default NewProductForm
