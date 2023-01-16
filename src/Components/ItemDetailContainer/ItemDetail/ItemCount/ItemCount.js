import './ItemCount.css'



export const ItemCount = ({ stock = Infinity, cantidad, setCantidad, handleAgregar}) => {


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


    return(
        <div className="item-count">
        
                
            <div className="contador" > 
                    <button className="operador" onClick={handleRestar}>-</button>
                    <div >{ cantidad }</div>  
                    <button className="operador" onClick={handleSumar}>+</button>
                    
            </div>
            
            <div className="add-btn">
                <button className='añadir-al-carrito' onClick={handleAgregar}>Añadir al carrito</button>
            </div>
            
            
        </div>
    )
}
