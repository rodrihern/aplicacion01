import './ItemListContainer.css'

export const ItemListContainer = ( { greeting, children } ) => {
    return (
        <div id="item-container">
            <div className='item-content'>
                { children }
            </div>
            
            
        </div>
    );
}