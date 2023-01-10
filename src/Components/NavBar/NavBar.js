import './NavBar.css'
import companyLogo from './Fan store icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from '../CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';
 

export const NavBar = ({ cartNum }) => {

    const navigate = useNavigate()


    function desplegarMenu() {
        const navs = document.querySelectorAll('.navbar-items')
        
        navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));

        const navbar = document.querySelector('.navbar')

        navbar.classList.toggle('toggle-navSize'); 
        
    }

    function desplegarTexto() {
        const text = document.querySelector(".texto-search")

        text.classList.toggle("txt-desplegado")

        const texto = document.getElementById("target")
        texto.addEventListener("keydown", handleEnter)

    }

    function search() {
        
        

        const txt = document.getElementById("target")

        navigate(`productos/search/${txt.value}`)


    }

    function handleEnter(e) {
        if (e.key === "Enter") search()
    }

    

    

    return (
        <div className='navbar'>
            

            

            <div className='contenido'>

                <div className='logo'>
                    <Link to='/productos'>
                        <img height={80} src={ companyLogo } alt="Logo de la empresa" />
                    </Link>
                </div>
            
        

                <button className='btn-desplegar' onClick={desplegarMenu} >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className='navbar-items'>

                    
                    
                    <Link className='nav-link' to="productos/equipos">Equipos</Link>
                    <Link className='nav-link' to="productos/selecciones">Selecciones</Link>
                    <Link className='nav-link' to="productos/retro">Retro</Link>
                    
                    

                    <div className='search-box'>
                        <input  id='target' className='texto-search' type="text" onClick={desplegarTexto} placeholder='¿Qué camiseta estas buscando?'/>
                        <button className='boton-search' onClick={search}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>   
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