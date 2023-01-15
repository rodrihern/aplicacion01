import './ItemCount.css'
import { useNavigate } from 'react-router-dom'



export const ItemCount = ({ initial=1, stock = Infinity, setCartNum, cartNum, cantidad, setCantidad, isAdded, setIsAdded}) => {

    
    
    const navigate = useNavigate()

    cantidad > stock && setCantidad(stock)

    const handleSumar = () => {
        if (cantidad < stock) {
            setCantidad( cantidad + 1 )
        }
    }

    const handleRestar = () => {
        if (cantidad > 1) {
            setCantidad( cantidad - 1 )
        }
    }

    const addToCart = () => {
        setIsAdded( true )
        setCantidad( initial )
        setCartNum( cartNum + cantidad ) 
        
    }

    return(
        <div className="item-count">
            {
                isAdded 
                    ? 
                    <>
                        <div className='add-btn'>
                            <button className='finalizar-compra' onClick={() => navigate("/cart")}>Finalizar compra</button>
                        </div>
                        
                        <div className='add-btn'>
                            <button className='añadir-al-carrito seguir-comprando' onClick={() => navigate(-1)} >Seguir comprando</button>
                        </div>
                        
                    </>
                    :
                    <>
                        <div className="contador" > 
                                <button className="operador" onClick={handleRestar}>-</button>
                                <div >{ cantidad }</div>  
                                <button className="operador" onClick={handleSumar}>+</button>
                                
                        </div>

                        <div className="add-btn">
                            <button className='añadir-al-carrito' onClick={addToCart}>Añadir al carrito</button>
                        </div>
                    </>
            }
            
            
        </div>
    )
}
