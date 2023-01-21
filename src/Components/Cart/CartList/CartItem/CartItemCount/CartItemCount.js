
import React, { useContext } from 'react'
import { CartContext } from '../../../../../Contexts/CartContext'
import './CartItemCount.css'




export default function CartItemCount( { item } ) {

    
    const { sumarCantidad, restarCantidad } = useContext(CartContext)

    const stock = item.talle === "S" ? item.stockS : item.talle === "M" ? item.stockM : item.talle === "L" && item.stockL
    



    return (
        <div className='cart-item-count'>
            <div className='cantidad'>
                <p>Cantidad: </p> 
                <div className="counter" >
                        
                    <button 
                        className={`operator ${item.cantidad > 1 ? '' : 'disabled'}`} 
                        onClick={() => item.cantidad > 1 && restarCantidad(item.id)}
                    >-</button>
                    <div >{ item.cantidad }</div>  
                    <button 
                        className={`operator ${item.cantidad < stock ? '' : 'disabled'}`} 
                        onClick={() => item.cantidad < stock && sumarCantidad(item.id)}
                    >+</button>
                        
                </div>
            </div>
            
            
            
                
        </div>
    )
}
