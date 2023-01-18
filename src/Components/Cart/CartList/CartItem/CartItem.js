import React from 'react'
import './CartItem.css'
import CartItemCount from './CartItemCount/CartItemCount'

export default function CartItem( {item} ) {
  return (
    <div className='cart-item'>

      <div className='cart-item-content'>

        <div className='foto'>
          <img width={150} src={item.image} /> 
        </div>

        <div className='info'>

          <p className='nombre'>{item.name}</p>
          <p className='talle'>Talle: {item.talle}</p>
          <p className='cantidad'>Cantidad: {item.cantidad}</p>          
          <p className='subtotal'>Subtotal: <span className='precio-subtotal'>${item.price * item.cantidad}</span></p>

        </div> 

      </div>

      <div className='cart-count'>
        <CartItemCount item={item}/> 
      </div>

    </div>
  )
}
