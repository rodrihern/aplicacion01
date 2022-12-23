import './CartWidget.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = ({ cartNum = 0 }) => {

    return (
        <a className='cart hidden-content' href="#">
            <div className='cart-number'>{ cartNum > 9 ? "+9" : cartNum }</div>
            <FontAwesomeIcon className='fa-lg' icon={ faCartShopping } />
        </a>
    );
}