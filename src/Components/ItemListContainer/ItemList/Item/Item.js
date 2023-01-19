import { Link } from 'react-router-dom';
import './Item.css'

function Item( {prod} ) {

    let name = prod.name



    return ( 
        <div className='producto'>
            <img src={prod.image} alt={prod.name} />
            <h4>{name}</h4>
            <p className='precio'>${prod.price}</p>
            <Link className='ver-mas' to={`/detalle/${prod.id}`} >Detalle</Link>
        </div>
     );
}

export default Item;