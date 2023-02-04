import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../../Contexts/CartContext'
import CartItem from './CartItem/CartItem'
import SureDelete from './SureDelete/SureDelete'
import './CartList.css'
import { LoginContext } from '../../../Contexts/LoginContext'


export default function CartList() {

    const { googleLogin, user } = useContext(LoginContext)
    const { cart, totalPrice } = useContext(CartContext)
    const [dialogTrigger, setDialogTrigger] = useState(false)
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
                                cart.map(item => <CartItem key={item.id} item={item} />)
                            }

                            <h3 className='precio-final'>Precio Final: ${precioTotal}</h3>
                            <div className='cart-buttons'>
                                <button className='boton vaciar-carrito' onClick={() => setDialogTrigger(true)}>
                                    <FontAwesomeIcon icon={ faTrash } /> Vaciar carrito   
                                </button>
                                <button 
                                    className='boton comprar' 
                                    onClick={() => {
                                        !user.isLogged && googleLogin()
                                        navigate("/checkout")
                                    }}
                                >
                                    COMPRAR
                                </button>
                            </div>
                            
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
