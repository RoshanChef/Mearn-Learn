import './ProductItem.css'
import ProductDate from './ProductDate'
import React, { useState } from 'react'

function ProductItem (props) {

  const [title, setTitle] = useState(props.details.title); 
  function clickHandle () {
    setTitle('Roshan'); 
    console.log('hello roshan'); 
  }
  return (
    <div className='ProductItem'>
      <ProductDate data={props.details.date}> </ProductDate>
      <h2 className='title'>{title}</h2>
      <button onClick={clickHandle}>Add Event</button>
    </div>
  )
}

export default ProductItem;
