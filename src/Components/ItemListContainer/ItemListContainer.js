import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList';
import { pedirDatos } from '../../helpers/pedirDatos';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    /* const { busqueda } = useParams() */
    

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