import './ItemCount.css'
import { useState } from 'react'



export const ItemCount = ({ initial = 1, stock = Infinity, setCartNum, cartNum }) => {

    const [counter, setCounter] = useState(initial)

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
        setCounter( initial )
        setCartNum( cartNum + counter )    
    }

    return(
        <div className="item-count">

            <div className="contador" > 
                    <button className="operador" onClick={handleRestar}>-</button>
                    <div >{ counter }</div>  
                    <button className="operador" onClick={handleSumar}>+</button>
                    
            </div>

            <div className="add-btn">
                <button className='añadir-al-carrito' onClick={addToCart}>Añadir al carrito</button>
            </div>
        </div>
    )
}
