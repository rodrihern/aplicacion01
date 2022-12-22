import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
    return (
        <a className='cart hidden-content' href="#">
            <div className='cart-number'>4</div>
            <FontAwesomeIcon className='fa-lg' icon={ faCartShopping } />
        </a>
    );
}