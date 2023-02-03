import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginContext } from '../../../Contexts/LoginContext';


export default function IniciarSesion() {

  const { googleLogin, user, logout } = useContext(LoginContext)


  return (
    <div className='sesion'>

      <button id='iniciar-sesion' onClick={user.isLogged ? logout : googleLogin}>
        {
          user.isLogged 
            ? 
            <>
              <FontAwesomeIcon icon={faRightFromBracket} /> Cerrrar Sesión 
            </>
            : 
            <>
              <FontAwesomeIcon icon={faUser} /> Iniciar Sesión
            </>
        }
      </button>
      {
        user.isLogged && <small> <FontAwesomeIcon icon={faUser} /> {user.email}</small>
      }
            
    </div>
)
}
