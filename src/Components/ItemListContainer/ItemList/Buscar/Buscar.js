import Item from "../Item/Item";


function Buscar( { busqueda, productos } ) {
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

export default Buscar;