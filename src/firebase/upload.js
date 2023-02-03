import { db } from './config.js'
import MOCK from '../data/MOCK_DATA.json' assert {type: "json"}
import { addDoc, collection } from 'firebase/firestore'

MOCK.forEach(item => delete item.id)

const productosRef = collection(db, "productos")

MOCK.forEach(item => {
    addDoc(productosRef, item)
})

/**
 * si quiero hacer algun cambio en los datos, tengo que agregar a package.json esto:
 * ,
  "type": "module"

  y correr el upload en la terminal --> node src/firebase/upload.js
 */