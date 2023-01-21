import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../../Contexts/CartContext'
import CartItem from './CartItem/CartItem'
import SureDelete from './SureDelete/SureDelete'
import './CartList.css'


export default function CartList() {

    const { cart, totalPrice } = useContext(CartContext)
    const [dialogTrigger, setDialogTrigger] = useState(false)

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
                            cart.map(item => <CartItem key={item.id} item={item} />)
                        }

                        <h3 className='precio-final'>Precio Final: ${precioTotal}</h3>

                        <button className='boton vaciar-carrito' onClick={() => setDialogTrigger(true)}>
                            <FontAwesomeIcon icon={ faTrash } /> Vaciar carrito   
                        </button>
                    </>
                    
                    
                    :
                    <>
                        <div className='carrito-vacio'>
                            <h3>El carrito esta vacío</h3>
                        </div>
                        <Link className='boton seguir-comprando' to={"/productos"}>Seguir Comprando</Link>
                    </>
            }

            <SureDelete trigger={dialogTrigger} setTrigger={setDialogTrigger} />

        </div>
    </div>
  )
}
