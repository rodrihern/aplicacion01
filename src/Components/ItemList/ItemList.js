import { useParams } from "react-router-dom";
import Item from "../Item/Item";
import './ItemList.css';


function ItemList( {productos} ) {

    const { categoryId, busqueda} = useParams()

    return ( 
        <div>

            <h2 className="titulo" >Nuestras camisetas</h2>
            <hr/>

            <div className="catalogo">
                {
                    categoryId ? 
                        productos.map((prod) => prod.categoria === categoryId && <Item className="producto" key={prod.id} prod={prod} />) :
                        busqueda ?
                            productos.filter((prod) => prod.name.toLowerCase().includes(busqueda.toLowerCase()) || prod.description.toLowerCase().includes(busqueda.toLowerCase()))
                            .map((prod) => <Item className="producto" key={prod.id} prod={prod} />) :
                            productos.map((prod) => <Item className="producto" key={prod.id} prod={prod} />) 
                }
                
            </div>

        </div>
     );
}

export default ItemList;