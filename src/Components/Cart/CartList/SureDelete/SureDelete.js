import { React, useContext } from 'react'
import { CartContext } from '../../../../Contexts/CartContext'
import './SureDelete.css'

function SureDelete( { trigger, setTrigger } ) {

    const { emptyCart } = useContext(CartContext)

    
    const handleNo = () => {
        setTrigger(false)
    }

    const handleSi = () => {
        emptyCart()
        setTrigger(false)
    }

    if (trigger) {
        return (
            <div className='sureDelete'>
                <div className='sureDelete-content'>
                    <h3 className='pregunta'>¿Estás seguro de que quieres vaciar el carrito?</h3>
                    <div className='botones'>
                        <button className='sureDelete-btn si' onClick={handleSi} >SI</button>
                        <button className='sureDelete-btn no' onClick={handleNo} >NO</button>
                    </div>
                    
                </div>
                
            </div>
          )
    }
    
}

export default SureDelete