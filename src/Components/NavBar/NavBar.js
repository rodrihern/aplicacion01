import './NavBar.css'
import companyLogo from './Fan store icon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { CartWidget } from './CartWidget/CartWidget';
import { Link, useNavigate } from 'react-router-dom';
import IniciarSesion from './IniciarSesion/IniciarSesion';



export const NavBar = ({ cartNum }) => {

    const navigate = useNavigate()



    function desplegarMenu() {
        const navs = document.querySelectorAll('.navbar-items')
        navs.forEach(nav => nav.classList.toggle('navbar-toggleShow'));
        const navbar = document.querySelector('.navbar')
        navbar.classList.toggle('toggle-navSize');   
    }

    function ocultarMenu() {
        const navs = document.querySelectorAll('.navbar-items')        
        navs.forEach(nav => nav.classList.remove('navbar-toggleShow'));
        const navbar = document.querySelector('.navbar')
        navbar.classList.remove('toggle-navSize');  
    }

    function handleKey(e) {
        if (e.key === "Enter") {
            search();
            ocultarMenu();
        }
    }

    function desplegarTexto() {
        const text = document.querySelector(".texto-search")
        text.classList.add("txt-desplegado")
    }

    function search() {
        const txt = document.getElementById("target")
        navigate(`productos/search/${txt.value}`)
        console.log("buscando")
    }

    return (
        <div className='navbar'>
            

            

            <div className='contenido'>

                <div className='logo'>
                    <Link onClick={ocultarMenu} to='/productos'>
                        <img height={80} src={ companyLogo } alt="Logo de la empresa" />
                    </Link>
                </div>
            
        

                <button className='btn-desplegar' onClick={desplegarMenu} >
                    <FontAwesomeIcon icon={faBars} />
                </button>

                <div className='navbar-items'>

                    
                    
                    <Link onClick={ocultarMenu} className='nav-link' to={'/productos/equipos'}>Equipos</Link>
                    <Link onClick={ocultarMenu} className='nav-link' to="/productos/selecciones">Selecciones</Link>
                    <Link onClick={ocultarMenu} className='nav-link' to="/productos/retro">Retro</Link>
                    
                    

                    <div className='search-box'>
                        <input  
                            id='target' 
                            className='texto-search' 
                            type="text" 
                            onKeyDown={handleKey} 
                            onBlur={() => {
                                const texto = document.getElementById("target")
                                texto.classList.remove("txt-desplegado")
                            }} 
                            onFocus={desplegarTexto} 
                            placeholder='¿Qué camiseta estas buscando?'
                        />
                        <button className='boton-search' onClick={() => {search(); ocultarMenu();}}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>   
                    </div>
                    
                    
                    <IniciarSesion />
                    

                    <CartWidget cartNum={cartNum} ocultarMenu={ocultarMenu}/>

                </div>

                

            </div>


            
        </div>
    );
}