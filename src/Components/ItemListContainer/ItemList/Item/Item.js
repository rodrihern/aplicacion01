import { Link, useNavigate } from 'react-router-dom';
import './Item.css'

function Item( {prod} ) {

    const navigate = useNavigate()

    return ( 
        <div className='producto' onClick={() => {navigate(`/detalle/${prod.id}`)}}>
            <img src={prod.image} alt={prod.name} />
            <h4>{prod.name}</h4>
            <p className='precio'>${prod.price}</p>
            <Link className='ver-mas' to={`/detalle/${prod.id}`} >Detalle</Link>
        </div>
     );
}

export default Item;