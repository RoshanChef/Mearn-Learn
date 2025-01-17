import ProductItem from './ProductItem'

function Product (props) {
  return (
    <div className='product'>
      <ProductItem details={props.data[0]}></ProductItem>
      <ProductItem details={props.data[1]}></ProductItem>
      <ProductItem details={props.data[2]}></ProductItem>
      <ProductItem details={props.data[3]}></ProductItem>
    </div>
  )
}

export default Product
