
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemCount } from './ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail( {prod, cartNum, setCartNum} ) {

    const [ talle, setTalle ] = useState(prod.stockS > 0 ? "S" : prod.stockM > 0 ? "M" : prod.stockL > 0 && "L")
    const [ counter, setCounter ] = useState(1)
    const [ isAdded, setIsAdded ] = useState(false)
    const navigate = useNavigate()
    
    const seleccionar = () => {
        const seleccionado = document.querySelector('.selector').value
        setTalle(seleccionado)
    }

    if (isAdded) {
        console.log( {
            id: prod.id,
            Talle: talle,
            Cantidad: counter
        } )
    }
    

    return ( 
        <div className='detail-container'>
            
            <img src={prod.image} alt={prod.name} />
            
            <div className='detail-content'>
                <h2>{prod.name}</h2>
                <p>{prod.description}</p>

                
                
                <p className='precio detail-price'>${prod.price}</p>

                

                {
                    prod.stockS < 1 && prod.stockM < 1 && prod.stockL < 1 ? 
                    <>
                        
                            <p className='noStock'>Sin stock</p>
                            <button className='volver' onClick={() => navigate(-1)}>Volver</button>
                        
                    </>
                    :
                    <>

                        <div className='selector-talle'>
                            <p>Talle:</p>
                            <select className='selector' onChange={seleccionar} >
                                <option disabled={prod.stockS < 1 && true} value="S">S</option>
                                <option disabled={prod.stockM < 1 && true} value="M">M </option>
                                <option disabled={prod.stockL < 1 && true} value="L">L</option>
                            </select>
                        </div>

                        <ItemCount 
                            stock={talle === "S" ? prod.stockS : talle === "M" ? prod.stockM : talle === "L" && prod.stockL} 
                            cartNum={cartNum} 
                            setCartNum={setCartNum} 
                            counter={counter} 
                            setCounter={setCounter}
                            isAdded={isAdded}
                            setIsAdded={setIsAdded}
                        />
                        <small className='stock'>Stock: {talle === "S" ? prod.stockS : talle === "M" ? prod.stockM : talle === "L" && prod.stockL}</small>

                    </>
                }
                
                
                


            </div>
        </div>
     );
}

export default ItemDetail;