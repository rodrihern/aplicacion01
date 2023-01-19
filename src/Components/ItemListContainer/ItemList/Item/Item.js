import { useNavigate } from 'react-router-dom';
import './Item.css'

function Item( {prod} ) {

    let name = prod.name


    const navigate = useNavigate()

    const handleDetalle = () => {
        navigate(`/detalle/${prod.id}`)
    }

    return ( 
        <div className='producto'>
            <img src={prod.image} alt={prod.name} />
            <h4>{name}</h4>
            <p className='precio'>${prod.price}</p>
            <button className='ver-mas' onClick={handleDetalle}>Detalle</button>
        </div>
     );
}

export default Item;