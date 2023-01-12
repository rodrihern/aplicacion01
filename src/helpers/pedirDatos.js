import MOCK_DATA from '../data/MOCK_DATA.json'

export function pedirDatos() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(MOCK_DATA)
        }, 2000)
    }

     );
}

export function PedirItemPorId(id) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const item = MOCK_DATA.find((el) => el.id === id)

            if (item) {
                resolve(item)
            } else {
                reject ({
                    error: 'No se encontró el producto'
                })
            }
        }, 500 )
    } );
}

export default PedirItemPorId;