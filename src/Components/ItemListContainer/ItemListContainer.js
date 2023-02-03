import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import Loader from '../Loader/Loader';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/config';


export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    
    

    useEffect(() => {
        setLoading(true)
        
        //referencia
        const productosRef = collection(db, "productos")
        //peticion asincronica
        getDocs(productosRef)
            .then((res) => {
                setProductos( res.docs.map((doc) => {
                    return {
                        ...doc.data(),
                        id: doc.id

                    }
                }) )
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false)
            })

    }, [])

    return (
        <div className="item-container">

            {
                loading && <Loader />
            }

            <div className='item-content'>

                <ItemList productos={productos} isLoading={loading} />
                
                
            </div>
            
            
        </div>
    );
}