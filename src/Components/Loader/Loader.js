import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import './Loader.css'

function Loader() {
    return (
        <div className='loader'>
            <FontAwesomeIcon className='fa-spin fa-regular cargando' icon={ faSpinner } />
        </div>
    )
}

export default Loader