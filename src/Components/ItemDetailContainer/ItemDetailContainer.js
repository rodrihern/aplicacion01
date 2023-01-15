import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import PedirItemPorId from '../../helpers/pedirDatos';
import ItemDetail from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

function ItemDetailContainer({ cartNum, setCartNum }) {
    
    const [item, setItem] = useState(null)
    const { itemId } = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        PedirItemPorId( Number(itemId) )
            .then((data) => {
                setItem(data)
            })
            .catch(() => {
                navigate("/error404")
            })
    }, [itemId, navigate])

    return (
        
        <div className='item-detail-container'>
            <div className='item-detail'>
                {
                    item && <ItemDetail prod={item} cartNum={cartNum} setCartNum={setCartNum}/>
                }
            </div>
            
        </div>
     );
}

export default ItemDetailContainer;