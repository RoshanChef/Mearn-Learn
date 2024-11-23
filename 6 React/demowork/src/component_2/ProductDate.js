import './ProductDate.css'

function ProductDate(props) {
  let month = props.data.toLocaleString('en-US', { month: 'long' })
  let day = props.data.toLocaleString('en-US', { day: '2-digit' })
  let year = props.data.getFullYear()
  return (
    <div className='date'>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  )
}

export default ProductDate; 
