import './Item.css'

function Item( {prod} ) {

    let name = prod.name


    if (window.innerWidth < 670) {
        name = name.length < 20 ? name : name.slice(0, 11) + "..."
    }

    console.log(window.innerWidth)
    


    return ( 
        <div className='producto'>
            <img src={prod.image} alt={prod.name} />
            <h4>{name}</h4>
            {/* <p>{prod.description}</p> */}
            <p className='precio'>${prod.price}</p>
            <button className='ver-mas'>Detalle</button>
        </div>
     );
}

export default Item;