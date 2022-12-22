import './ItemListContainer.css'

export const ItemListContainer = ( { greeting, children } ) => {
    return (
        <div id="item-container">
            { children }
            
        </div>
    );
}