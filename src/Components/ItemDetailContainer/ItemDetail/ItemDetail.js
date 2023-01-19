
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../../Contexts/CartContext';
import { ItemCount } from './ItemCount/ItemCount';
import './ItemDetail.css'


function ItemDetail( {prod, initial=1} ) {

    const [ talle, setTalle ] = useState(prod.stockS > 0 ? "S" : prod.stockM > 0 ? "M" : prod.stockL > 0 && "L")
    const [ cantidad, setCantidad ] = useState(initial)
    const navigate = useNavigate()

    const { addToCart, isAdded } = useContext(CartContext)
    
    const seleccionar = () => {
        const seleccionado = document.querySelector('.selector').value
        setTalle(seleccionado)
    }

    const handleAgregar = () => {
        const item =  {
            ...prod,
            talle,
            cantidad
        }

        addToCart(item)

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
                    !isAdded(prod.id) ?
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
                                cantidad={cantidad} 
                                setCantidad={setCantidad}
                                handleAgregar={handleAgregar}
                            />
                            <small className='stock'>Stock: {talle === "S" ? prod.stockS : talle === "M" ? prod.stockM : talle === "L" && prod.stockL}</small>

                        </>
                        :
                        <>
                            <div className='item-count'>
                                <div className='add-btn'>
                                    <button className='finalizar-compra' onClick={() => navigate("/cart")}>Finalizar compra</button>
                                </div>
                                
                                <div className='add-btn'>
                                    <button className='añadir-al-carrito seguir-comprando' onClick={() => navigate(-1)} >Seguir comprando</button>
                                </div>
                            </div>
                            
                            
                        </>
                }
                
                
                


            </div>
        </div>
     );
}

export default ItemDetail;