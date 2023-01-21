import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import companyLogo from '../NavBar/Fan store icon.png'
import React from 'react'
import './Loader.css'

function Loader() {
    return (
        <div className='loader'>
            <FontAwesomeIcon className='fa-spin fa-regular cargando' icon={ faSpinner } />
            <img className='loading-logo' height={60} src={ companyLogo } alt="logo" />
        </div>
    )
}

export default Loader