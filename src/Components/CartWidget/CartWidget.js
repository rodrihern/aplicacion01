import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = ({ cartNum = 0 }) => {

    if (cartNum > 9) {
        const numerito = document.querySelector('.cart-number')
        numerito.classList.add("little-num")
    } 

    if (cartNum > 99) {
        const numerito = document.querySelector('.cart-number')
        numerito.classList.add("plus99")
    }

    return (
        <a className='cart hidden-content' href="#">
            <div className='cart-number'>{ cartNum > 99 ? "+99" : cartNum }</div>
            <FontAwesomeIcon className='fa-lg' icon={ faCartShopping } />
        </a>
    );
}
