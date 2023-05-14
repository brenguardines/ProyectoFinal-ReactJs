import './ItemDetail.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount';
import { CarritoContext } from '../../context/CarritoContext';
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, descripcion }) => {

    const [cantidadAgregada, setCantidadAgregada] = useState(0);
    const { agregarProducto } = useContext(CarritoContext);
    const manejadorCantidad = (cantidad) => {
        setCantidadAgregada(cantidad);
        const item = { id, nombre, precio , descripcion};
        agregarProducto(item, cantidad);
    }
    return (
        <div className='contenedorItem'>
            <img src={img} alt={nombre} />
            <h2>Nombre: {nombre} </h2>
            <h3>Id: {id} </h3>
            <p>{descripcion}</p>
            <h3>Precio: ${precio} </h3>
            {
                cantidadAgregada > 0 ? (<Link to='/cart'> Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
            }
        </div>
    )
}

export default ItemDetail