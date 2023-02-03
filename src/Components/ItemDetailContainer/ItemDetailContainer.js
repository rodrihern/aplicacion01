import { useEffect, useState } from 'react';
import {  useNavigate, useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail/ItemDetail';
import '../ItemListContainer/ItemListContainer.css';
import Loader from '../Loader/Loader';
import { Error404 } from '../Error404/Error404';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

function ItemDetailContainer({ cartNum, setCartNum }) {
    
    const [item, setItem] = useState(false)
    const [loading, setLoading] = useState(false)
    const { itemId } = useParams()
    const navigate = useNavigate()
    

    useEffect(() => {
        setLoading(true)
        //referencia
        const docRef = doc(db, "productos", itemId)
        //peticion
        getDoc(docRef)
            .then((res) => {
                setItem( { ...res.data(), id: res.id } )
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false)
            })
    }, [itemId, navigate])

    return (

        
        
        <div className='item-container'>

            

            <div className='item-content'>
                {
                    loading 
                        ? 
                        <Loader /> 
                        :
                        item ? <ItemDetail prod={item} cartNum={cartNum} setCartNum={setCartNum} /> : <Error404 />
                }
            </div>
            
        </div>
     );
}

export default ItemDetailContainer;