import React, { useContext } from 'react'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './CartItem.css'
import CartItemCount from './CartItemCount/CartItemCount'
import { CartContext } from '../../../../Contexts/CartContext'

export default function CartItem( {item} ) {

  const { removeItem } = useContext(CartContext)
  
  return (
    <div className='cart-item'>

      <div className='left'>

        <div className='foto'>
          <img width={150} src={item.image} /> 
        </div>

        <div className='info'>

          <p className='nombre'>{item.name}</p>
          <p className='talle'>Talle: {item.talle}</p> 
          <CartItemCount item={item}/> 
          

        </div> 

      </div>

      <div className='right'>
        <div className="remove">
            <button className='remove-btn' onClick={() => removeItem(item.id)}>
                <FontAwesomeIcon icon={ faTrashAlt } />
            </button>
        </div>
      <p className='subtotal'>Subtotal: <span className='precio-subtotal'>${item.price * item.cantidad}</span></p>
        
        
      </div>

    </div>
  )
}
