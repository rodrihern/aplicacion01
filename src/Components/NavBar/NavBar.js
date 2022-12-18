import './NavBar.css'
import companyLogo from './Fan store icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
 

export const NavBar = () => {
    return (
        <div id="navbar">

            <div className='content'>

            
            
                <div className='logo'>
                    <a href='#'>
                        <img height={80} src={ companyLogo } alt="Logo de la empresa" />
                    </a>
                </div>

                <a className='nav-link' href="#">Equipos</a>
                <a className='nav-link' href="#">Selecciones</a>
                <a className='nav-link' href="#">Retro</a>
                

                <div className='search-box'>
                    <input className='search-txt' type="text" placeholder='¿Qué camiseta estas buscando?'/>
                    <a className='search-btn' href='#'>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </a>

                    
                </div>

                <a className='cart' href="#">
                    <div className='cart-number'>4</div>
                    <FontAwesomeIcon className='fa-lg' icon={faCartShopping} />
                </a>

            </div>


            
        </div>
    );
}