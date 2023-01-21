import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import { pedirDatos } from '../../helpers/pedirDatos';
import Loader from '../Loader/Loader';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(false)

    
    

    useEffect(() => {
        setLoading(true)
        pedirDatos()
            .then((res) => {
                setProductos(res)   
            })
            .catch((err) => {
                console.log(err)
            })
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

                <ItemList productos={productos} />
                
                
            </div>
            
            
        </div>
    );
}