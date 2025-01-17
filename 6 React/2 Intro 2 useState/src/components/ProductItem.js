import ProductDate from './ProductDate'
import React, { useState } from 'react'

function ProductItem(props) {
  const [title, setTitle] = useState(props.details.title);
  function clickHandler() {
    setTitle('Karma is the kign of all the people');
    console.log('Click handler');
  }

  return (
    <div className='ProductItem'>
      <ProductDate data={props.details.date}> </ProductDate>
      <h2 className='title'>{title}</h2>
      <button className='btn' onClick={clickHandler}>Add Event</button>
    </div>
  )
}

export default ProductItem;
