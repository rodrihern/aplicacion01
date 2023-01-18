import { createContext, useState } from "react"


export const CartContext = createContext()

export const CartProvider = ({ children }) => {
    
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    const isAdded = (id) => {
        return cart.some((item) => item.id === id)
    }

    const emptyCart = () => {
        setCart( [] )
    }
    
    const removeItem = (id) => {
        setCart( cart.filter((item) => item.id !== id))
    }
    
    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + item.price * item.cantidad, 0)
    }
    
    const totalCantidad = () => {
        return cart.reduce((acc, item) => acc + item.cantidad, 0)
    }

    const sumarCantidad = (id) => {
        setCart( cart.map( (item) => item.id === id ? Object.defineProperty(item, 'cantidad', {value: item.cantidad + 1}) : item ) )    
    }

    const restarCantidad = (id) => {
        setCart( cart.map( (item) => item.id === id ? Object.defineProperty(item, 'cantidad', {value: item.cantidad - 1}) : item ) )    
    }


    return (
        <CartContext.Provider value={{
            cart,
            isAdded,
            emptyCart,
            removeItem,
            totalPrice,
            totalCantidad,
            addToCart,
            sumarCantidad,
            restarCantidad
        }}>
            { children }
        </CartContext.Provider>
            
        
    )
}
