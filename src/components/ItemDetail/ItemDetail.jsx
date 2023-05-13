import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const { agregarProducto } = useContext(CarritoContext);
    const manejadorCantidad = (cantidad) => {
        setCantidadAgregada(cantidad);
        const item = { id, nombre, precio };
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <img src={img} alt={nombre} />
            <h2>Nombre: {nombre} </h2>
            <h3>Id: {id} </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>
            <h3>Precio: ${precio} </h3>
            {
                cantidadAgregada > 0 ? (<Link to='/cart'> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail