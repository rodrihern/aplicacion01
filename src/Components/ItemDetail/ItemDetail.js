
import { useEffect, useState } from 'react';
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail( {prod, cartNum, setCartNum} ) {

    const [ seleccion, setSeleccion ] = useState("S")
    
    const seleccionar = () => {
        const seleccionado = document.querySelector('.selector').value
        setSeleccion(seleccionado)
    }
        
    

    return ( 
        <div className='detail-container'>
            
            <img src={prod.image} alt={prod.name} />
            
            <div className='detail-content'>
                <h2>{prod.name}</h2>
                <p>{prod.description}</p>

                
                
                <p className='precio detail-price'>${prod.price}</p>
                
                <div className='selector-talle'>
                    <p>Talle:</p>
                    <select className='selector' onChange={seleccionar}>
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                </div>

                
                {
                    seleccion === "S" ? <>
                        <ItemCount stock={prod.stockS} cartNum={cartNum} setCartNum={setCartNum} />
                        <small className='stock'>Stock: {prod.stockS}</small>
                    </> :
                    seleccion === "M" ? <>
                        <ItemCount stock={prod.stockM} cartNum={cartNum} setCartNum={setCartNum} />
                        <small className='stock'>Stock: {prod.stockM}</small>
                    </> :
                    seleccion === "L" && <>
                        <ItemCount stock={prod.stockL} cartNum={cartNum} setCartNum={setCartNum} />
                        <small className='stock'>Stock: {prod.stockL}</small>
                    </>
                    
                }

                


            </div>
        </div>
     );
}

export default ItemDetail;