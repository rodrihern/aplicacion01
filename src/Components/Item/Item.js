import './Item.css'

function Item( {prod} ) {
    return ( 
        <div className='producto'>
            <img src={prod.image} alt={prod.name} />
            <h4>{prod.name}</h4>
            {/* <p>{prod.description}</p> */}
            <p className='precio'>${prod.price}</p>
            <button className='ver-mas'>Detalle</button>
        </div>
     );
}

export default Item;