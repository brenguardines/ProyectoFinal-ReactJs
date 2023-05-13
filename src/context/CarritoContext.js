import { useState, createContext } from "react";

export const CarritoContext = createContext({ carrito: [] });

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    const agregarProducto = (item, cantidad) => {
       if(productoEnCarrito(item.id)){
        setCarrito(carrito.map((prod) => {
            return{... prod, cantidad: prod.cantidad + cantidad}
        }))
       }else{
        setCarrito(prev => [...prev, { item, cantidad }]);
       }
    }

    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.item.id !== id);
        setCarrito(carritoActualizado);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    const productoEnCarrito = (id) => {
        return carrito.some(prod => prod.id === id);
    }

    return (
        <CarritoContext.Provider value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito }}>
            {children}
        </CarritoContext.Provider>
    )
}