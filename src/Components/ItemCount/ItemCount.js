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
                { producto && <p className="producto"> { producto } </p>}
                <div className='barrita' >
                    <button className="operador" onClick={onAdd}>+</button>
                    <p>{ counter }</p>
                    <button className="operador" onClick={onSubstract}>-</button>
                </div>
            </div>

            <div className="add-btn">
                <button>Añadir al carrito</button>
            </div>
        </div>
    )
}