
import { ItemCount } from '../ItemCount/ItemCount';
import './ItemDetail.css'

function ItemDetail( {prod, cartNum, setCartNum} ) {


    return ( 
        <div className='detail-container'>
            
            <img src={prod.image} alt={prod.name} />
            
            <div className='detail-content'>
                <h2>{prod.name}</h2>
                <p>{prod.description}</p>

                
                
                <p className='precio detail-price'>${prod.price}</p>
                
                <div className='selector-talle'>
                    <p>Talle:</p>
                    <select className='selector'>
                        <option>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>

                
                
                <ItemCount stock={prod.stock} cartNum={cartNum} setCartNum={setCartNum} />

                <small className='stock'>Stock: {prod.stock}</small>
            </div>
        </div>
     );
}

export default ItemDetail;