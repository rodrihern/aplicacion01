import './NavBar.css'
import companyLogo from './Fan store icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from '../CartWidget/CartWidget';
 

export const NavBar = ({ cartNum }) => {


    function desplegarMenu() {
        const navs = document.querySelectorAll('.navbar-items')
        
        navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));

        const navbar = document.querySelector('.navbar')

        navbar.classList.toggle('toggle-navSize'); 
        
    }

    function desplegarTexto() {
        const text = document.querySelector(".texto-search")

        text.classList.toggle("txt-desplegado")

    }

    return (
        <div className='navbar'>
            

            

            <div className='contenido'>

                <div className='logo'>
                    <a href='#'>
                        <img height={80} src={ companyLogo } alt="Logo de la empresa" />
                    </a>
                </div>
            
        

                <button className='btn-desplegar' onClick={desplegarMenu} >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className='navbar-items'>

                    
                    
                    <a className='nav-link' href="#">Equipos</a>
                    <a className='nav-link' href="#">Selecciones</a>
                    <a className='nav-link' href="#">Retro</a>
                    
                    

                    <div className='search-box'>
                        <input className='texto-search' type="text" onClick={desplegarTexto} placeholder='¿Qué camiseta estas buscando?'/>
                        <a className='boton-search' href='#'>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </a>   
                    </div>
                    
                    
                    <button id='iniciar-sesion'>
                        <FontAwesomeIcon icon={faUser} /> Iniciar Sesión
                    </button>
                    

                    <CartWidget cartNum={cartNum}/>

                </div>

                

            </div>


            
        </div>
    );
}