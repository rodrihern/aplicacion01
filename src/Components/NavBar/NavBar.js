import './NavBar.css'
import companyLogo from './Fan store icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from '../CartWidget/CartWidget';
 

export const NavBar = () => {

    function desplegarMenu() {
        const navs = document.querySelectorAll('.navbar-items')
        
        navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));

        const navbar = document.querySelector('.navbar')

        navbar.classList.toggle('toggle-navSize'); 
    }
      
      /* document.querySelector('.Navbar__Link-toggle').addEventListener('click', desplegarMenu); */

    return (
        <div className='navbar'>
            

            

            <div className='content'>

                <div className='logo'>
                    <a href='#'>
                        <img height={80} src={ companyLogo } alt="Logo de la empresa" />
                    </a>
                </div>
            
        

                <button className='btn-desplegar' onClick={desplegarMenu} >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <nav className='navbar-items'>

                    
                    
                    <a className='nav-link hidden-content' href="#">Equipos</a>
                    <a className='nav-link hidden-content' href="#">Selecciones</a>
                    <a className='nav-link hidden-content' href="#">Retro</a>
                    
                    

                    <div className='search-box hidden-content'>
                        <input className='search-txt' type="text" placeholder='¿Qué camiseta estas buscando?'/>
                        <a className='search-btn' href='#'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a>   
                    </div>
                    
                    
                    <button id='iniciar-sesion' className='hidden-content'>
                        <FontAwesomeIcon icon={faUser} /> Iniciar Sesión
                    </button>
                    

                    <CartWidget />

                </nav>

                

            </div>


            
        </div>
    );
}