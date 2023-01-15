import './ItemCount.css'
import { useNavigate } from 'react-router-dom'



export const ItemCount = ({ initial=1, stock = Infinity, setCartNum, cartNum, counter, setCounter, isAdded, setIsAdded}) => {

    
    
    const navigate = useNavigate()

    counter > stock && setCounter(stock)

    const handleSumar = () => {
        if (counter < stock) {
            setCounter( counter + 1 )
        }
    }

    const handleRestar = () => {
        if (counter > 1) {
            setCounter( counter - 1 )
        }
    }

    const addToCart = () => {
        setIsAdded( true )
        setCounter( initial )
        setCartNum( cartNum + counter ) 
        
    }

    return(
        <div className="item-count">
            {
                isAdded ? 
                <>
                    <div className='add-btn'>
                        <button className='finalizar-compra' onClick={() => navigate("/cart")}>Finalizar Compra</button>
                    </div>
                    
                    <div className='add-btn'>
                        <button className='añadir-al-carrito seguir-comprando' onClick={() => navigate(-1)} >Seguir comprando</button>
                    </div>
                    
                </>
                :
                <>
                    <div className="contador" > 
                            <button className="operador" onClick={handleRestar}>-</button>
                            <div >{ counter }</div>  
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
