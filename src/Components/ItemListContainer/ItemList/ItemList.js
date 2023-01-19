
import { useNavigate, useParams } from "react-router-dom";

import Item from "./Item/Item";
import './ItemList.css';


function ItemList( {productos} ) {

    const { categoryId, busqueda} = useParams()
    const navigate = useNavigate()
    
    

    
    const buscar = () => {
        if (productos.length > 0) {
            return (
                <> 
                    {   
                        productos.filter((prod) => prod.name.toLowerCase().includes(busqueda.toLowerCase()) || prod.description.toLowerCase().includes(busqueda.toLowerCase())).length > 0 
                            ? 
                            productos.filter((prod) => prod.name.toLowerCase().includes(busqueda.toLowerCase()) || prod.description.toLowerCase().includes(busqueda.toLowerCase()))
                            .map((prod) => <Item className="producto" key={prod.id} prod={prod} />) 
                            :
                            <h4 className="no-results">No se han encontrado resultados para '{busqueda}'</h4>
                    }
                </>
            )
        }    
    }

    return ( 
        <div>

            <h2 className="titulo" >Nuestras camisetas</h2>
            <hr/>

            <div className="catalogo">
                {
                    categoryId 
                        ? 
                        productos.filter((prod) => prod.categoria === categoryId).length > 0 ?
                        productos.map((prod) => prod.categoria === categoryId && <Item className="producto" key={prod.id} prod={prod} />) :
                        navigate("/error404") 
                        :
                        busqueda ? buscar() : productos.map((prod) => <Item className="producto" key={prod.id} prod={prod} />)              
                }
                
            </div>

        </div>
     );
}

export default ItemList;