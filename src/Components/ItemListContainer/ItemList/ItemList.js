
import { useParams } from "react-router-dom";
import { Error404 } from "../../Error404/Error404";
import Buscar from "./Buscar/Buscar";

import Item from "./Item/Item";
import './ItemList.css';


function ItemList( {productos, isLoading} ) {

    const { categoryId, busqueda} = useParams()

    if (!isLoading) {
        return ( 
            <div>
    
                <h2 className="titulo" >Nuestras camisetas</h2>
                <hr/>
    
                <div className="catalogo">
                    {
                        categoryId 
                            ? 
                            productos.filter((prod) => prod.categoria === categoryId).length > 0 ?
                            productos.map((prod) => prod.categoria === categoryId && <Item className="producto" key={prod.id} prod={prod} />) : <Error404 /> 
                            :
                            busqueda ? <Buscar busqueda={busqueda} productos={productos} /> : productos.map((prod) => <Item className="producto" key={prod.id} prod={prod} />)              
                    }
                    
                </div>
    
            </div>
         );
    }
    
}

export default ItemList;