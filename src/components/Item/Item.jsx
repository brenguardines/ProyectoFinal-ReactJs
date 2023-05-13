import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className='cardProducto'>
      <img className='imgProducto' src={img} alt={nombre} />
      <p className='nombreProducto'> {nombre} </p>
      <p>Id: {id} </p>
      <p>${precio} </p>
      <Link to={`/item/${id}`}> Info </Link>
    </div>
  )
}

export default Item