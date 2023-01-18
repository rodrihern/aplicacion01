import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext'
import '../ItemListContainer/ItemListContainer.css'
import CartList from './CartList/CartList'


export const Cart = () => {

    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    

    return (
        <div className='item-container'>
            
            <div className='item-content'>

                <CartList />

            </div>
            
        </div>

        
    )
}