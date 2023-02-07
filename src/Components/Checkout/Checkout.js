import { faFaceSmileBeam } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { addDoc, collection, query, where, writeBatch, documentId, getDocs } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../../Contexts/CartContext'
import { LoginContext } from '../../Contexts/LoginContext'
import { db } from '../../firebase/config'
import '../ItemListContainer/ItemListContainer.css'
import Loader from '../Loader/Loader'
import './Checkout.css'

function Checkout() {

    const { cart, totalPrice, emptyCart, removeItem } = useContext(CartContext)
    const { user } = useContext(LoginContext)
    const navigate = useNavigate()
    const [orderId, setOrderId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [isValid, setIsValid] = useState({
        nombre: true,
        direccion: true,
        telefono: true
    })
    

    
    


    const [values, setValues] = useState({
        nombre: '',
        email: user.email,
        telefono: '',
        direccion: ''
    })

    useEffect(() => {
        setValues ((prev) => {
            return {
                ...prev,
                "email": user.email
            }
        })
    },[user])



    useEffect(() => {
        setIsValid({
            nombre: true,
            direccion: true,
            telefono: true
        })
    }, [values])


    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()

        

        const orden = {
            cliente: values,
            items: cart,
            total: totalPrice()
        }


        

        const ordenesRef = collection(db, 'ordenes')
        const productosRef = collection(db, 'productos')
        const batch = writeBatch(db)
        const itemsRef = query( productosRef, where( documentId(), 'in', cart.map((item) => item.id) ) )

        const productos = await getDocs(itemsRef)

        const outOfStock = []

        productos.docs.forEach((doc) => {
            const item = cart.find((item) => item.id === doc.id)

            const stock = item.talle === 'S' ? doc.data().stockS : item.talle === 'M' ? doc.data().stockM : doc.data().stockL

            if (stock >= item.cantidad) {
                if (item.talle === 'S') {
                    batch.update(doc.ref, {stockS: stock - item.cantidad})
                } 
                else if (item.talle === 'M') {
                    batch.update(doc.ref, {stockM: stock - item.cantidad})
                } 
                else if (item.talle === 'L') {
                    batch.update(doc.ref, {stockL: stock - item.cantidad})
                }
            }
            else {
                outOfStock.push(item)
            }
        })
        
        if (outOfStock.length === 0) {

            const numberValidatorRegex = new RegExp('^\+?[0-9]?[0-9]? ?[0-9]? ?[0-9]{10}$')
            const nameValidatorRegex = new RegExp('^[a-zA-Z]{2,}$')
            const dirValidatorRegex = new RegExp('^[a-zA-Z]{2,} [0-9]{1,}$')
            

            if (!nameValidatorRegex.test(values.nombre)) {
                setIsValid({
                    ...isValid,
                    "nombre": false
                })
                setLoading(false)

            }
            else if (!numberValidatorRegex.test(values.telefono)) {
                setIsValid({
                    ...isValid,
                    "telefono": false
                })
                setLoading(false)

            }
            else if (!dirValidatorRegex.test(values.direccion)) {
                setIsValid({
                    ...isValid,
                    "direccion": false
                })
                setLoading(false)

            }
            else {

                batch.commit()
                    .then(() => {
                        setLoading(true)
                        addDoc(ordenesRef, orden)
                            .then((doc) => {
                                setOrderId(doc.id)
                                emptyCart()
                                setLoading(false)
                                
                            })
                            .catch((err) => {
                                console.log(err)
                                setLoading(false)
                            })

                    })

            }
            


            
        }
        else {
            
            outOfStock.forEach((prod) => {
                alert(`No hay más stock de ${prod.name}`)
                removeItem(prod.id)
            })
            navigate("/cart")
            setLoading(false)
            /*
            !!!!!!!!!!!!!!!
            Mostrar que productos son los que ya no tienen stock
            !!!!!!!!!!!!!!!

            */
        }

        

    }
    

    

    if (!user.isLogged) {
        return (
            <div className='item-container'>
                <div className='item-content'>

                    <h2>Inicia Sesión para continuar</h2>
                    
                </div>
            </div>
        )
    }

    

    

    if (orderId) {
        return (
            <div className='item-container'>
                <div className='item-content'>

                    

                    <div className='exito'>

                        <h2>{values.nombre}, Su pedido ha sido realizado con exito!</h2>
                        <p className='order-code'>Codigo de orden: {orderId}</p>
                        <h2 className='naranja'>Gracias por su compra <FontAwesomeIcon icon={ faFaceSmileBeam } /> </h2>
                        <Link className='naranja' to="/productos">Volver al inicio</Link> 


                    </div>
                    

                    
                </div>
            </div>
        )
    }   

    if (loading) {
        return (
            <div className='item-container'>
                <div className='item-content'>

                    <Loader />
                    
                </div>
            </div>
        )
    }




    if (cart.length < 1) {
        navigate("/")
    }

    return (
        <div className='item-container'>
            <div className='item-content'>

                

                <h2>Ultimo Paso</h2>
                <hr/>

                
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        className='form-input'
                        onChange={handleInputChange}
                        type='text'
                        name='nombre'
                        value={values.nombre}
                        placeholder='Ingrese su nombre'
                    />
                    {
                        !isValid.nombre && <p className='invalido'>Nombre inválido</p>
                    }
                    <input
                        className='form-input' 
                        onChange={handleInputChange}
                        type='text'
                        name='telefono'
                        value={values.telefono}
                        placeholder='Ingrese su numero de teléfono'
                    />
                    {
                        !isValid.telefono && <p className='invalido'>Teléfono inválido, debe ser "+## # ##########" o "##########"</p>
                    }
                    <input
                        className='form-input' 
                        onChange={handleInputChange}
                        type='text'
                        name='direccion'
                        value={values.direccion}
                        placeholder='Ingrese su dirección'
                    />
                    {
                        !isValid.direccion && <p className='invalido'>Dirección inválida, debe contener al menos la calle y la altura ej: "micalle 123"</p>
                    }
                    <button className='submit-btn boton comprar'>Hacer Pedido</button>
                </form>
                 
            </div>
        </div>
    )
}

export default Checkout