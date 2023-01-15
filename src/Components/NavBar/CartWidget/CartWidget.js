import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

export const CartWidget = ({ cartNum = 0, ocultarMenu }) => {

    if (cartNum > 9) {
        const numerito = document.querySelector('.cart-number')
        numerito.classList.add("little-num")
    } 

    if (cartNum > 99) {
        const numerito = document.querySelector('.cart-number')
        numerito.classList.add("plus99")
    }

    return (
        <Link onClick={ocultarMenu} className='cart hidden-content' to="/cart">
            <div className='cart-number'>{ cartNum > 99 ? "99+" : cartNum }</div>
            <FontAwesomeIcon className='fa-lg' icon={ faCartShopping } />
        </Link>
    );
}
