import Item from "../Item/Item";
import './ItemList.css';


function ItemList( {productos} ) {
    return ( 
        <div>

            <h2>Nuestro Catálogo</h2>
            <hr/>

            <div className="catalogo">
                {productos.map((prod) => <Item className="producto" key={prod.id} prod={prod} />)}
            </div>

        </div>
     );
}

export default ItemList;