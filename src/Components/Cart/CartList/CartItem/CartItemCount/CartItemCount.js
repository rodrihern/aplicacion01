import React, { useContext, useState } from 'react'
import { CartContext } from '../../../../../Contexts/CartContext'
import './CartItemCount.css'




export default function CartItemCount( { item } ) {

    
    const { removeItem, sumarCantidad, restarCantidad } = useContext(CartContext)

    const stock = item.talle === "S" ? item.stockS : item.talle === "M" ? item.stockM : item.talle === "L" && item.stockL
    



    return (
        <div className='cart-item-count'>
            <div className="counter" > 
                    <button className="oprator" onClick={() => item.cantidad > 1 && restarCantidad(item.id)}>-</button>
                    <div >{ item.cantidad }</div>  
                    <button className="oprator" onClick={() => item.cantidad < stock && sumarCantidad(item.id)}>+</button>
                    
            </div>
            
            <div className="remove">
                <button className='remove-btn' onClick={() => removeItem(item.id)}>Eliminar</button>
            </div>
                
        </div>
    )
}
