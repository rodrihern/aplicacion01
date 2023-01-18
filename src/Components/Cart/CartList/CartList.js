import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../../Contexts/CartContext'
import CartItem from './CartItem/CartItem'
import './CartList.css'


export default function CartList() {

    const { cart, emptyCart, totalPrice } = useContext(CartContext)
    const navigate = useNavigate()

    const precioTotal = totalPrice()



  return (
    <div>
        <h2>Carrito de compras</h2>
        <hr />

        <div className='carrito'>
                

            {
                cart.length > 0
                    ?
                    <>
                        {
                            cart.map(item => <CartItem item={item} />)
                        }

                        <h3 className='precio-final'>Precio Final: ${precioTotal}</h3>

                        <button className='boton vaciar-carrito' onClick={emptyCart}>
                            <FontAwesomeIcon icon={ faTrash } /> Vaciar carrito   
                        </button>
                    </>
                    
                    
                    :
                    <>
                        <div className='carrito-vacio'>
                            <h3>El carrito esta vacío</h3>
                        </div>
                        <button className='boton seguir-comprando' onClick={() => navigate("/productos")}>Seguir Comprando</button>
                    </>
            }

        </div>
    </div>
  )
}
