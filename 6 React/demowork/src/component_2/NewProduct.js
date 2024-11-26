import './NewProductForm.css'
import NewProductForm from './NewProductForm'

function NewProduct(props) {
  function save_product(obj_pass) {

    console.log('I am inside the new Product');

    // calling parent functions 
    console.log('event Info ... ', obj_pass);
    obj_pass.titie = 'Krishna';
    props.print(obj_pass);
  }
  return (
    <div className='newProduct'>
      <NewProductForm saveProduct={save_product} />
    </div>
  )
}
export default NewProduct