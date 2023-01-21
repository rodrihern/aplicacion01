import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import { PedirItemPorId } from '../../helpers/pedirDatos';
import ItemDetail from './ItemDetail/ItemDetail';
import '../ItemListContainer/ItemListContainer.css';
import Loader from '../Loader/Loader';

function ItemDetailContainer({ cartNum, setCartNum }) {
    
    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        setLoading(true)
        PedirItemPorId( Number(itemId) )
            .then((data) => {
                setItem(data)
            })
            .catch(() => {
                navigate("/error404")
            })
            .finally(() => {
                setLoading(false)
            })
    }, [itemId, navigate])

    return (

        
        
        <div className='item-container'>

            {
                loading && <Loader />
            }

            <div className='item-content'>
                {
                    item && <ItemDetail prod={item} cartNum={cartNum} setCartNum={setCartNum}/>
                }
            </div>
            
        </div>
     );
}

export default ItemDetailContainer;