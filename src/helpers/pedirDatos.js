import MOCK_DATA from '../data/MOCK_DATA.json'

function pedirDatos() {
    return new Promise ( (resolve, reject) => {
        setTimeout( () => {
            resolve(MOCK_DATA)
        }, 2000)
    }

     );
}

export default pedirDatos;