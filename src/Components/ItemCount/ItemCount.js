import './ItemCount.css'

export const ItemCount = ({ initial = 1, stock = Infinity, producto}) => {

    let counter = 5

    const onAdd = () => {

    }

    const onSubstract = () => {
        
    }

    return(
        <div className="item-count">

            <div className="contador" > 
                    <button className="operador" onClick={onSubstract}>-</button>
                    <p>{ counter }</p>  
                    <button className="operador" onClick={onAdd}>+</button>
                    
            </div>

            <div className="add-btn">
                <button className='añadir-al-carrito'>Añadir al carrito</button>
            </div>
        </div>
    )
}