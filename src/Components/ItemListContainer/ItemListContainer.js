import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from './ItemList/ItemList';
import { pedirDatos } from '../../helpers/pedirDatos';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    
    

    useEffect(() => {
        pedirDatos()
            .then((res) => {
                    setProductos(res)   
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    return (
        <div id="item-container">
            <div className='item-content'>

                <ItemList productos={productos} />
                
                
            </div>
            
            
        </div>
    );
}