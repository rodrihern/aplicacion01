import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './Error404.css'

export const Error404 = () => {

    return (
        
        <div className="mainbox">
            <div className="err404">
                <div className="err">4</div>
                <FontAwesomeIcon className="far fa-spin" icon={faQuestionCircle} />
                <div className="err2">4</div>
            </div>
            
            <div className="msg">Parece que esta pagina ya no existe, fue movida, o jamas existió.
                <p className="msg-p">Vayamos al <Link className="err-link" to="/productos">inicio</Link> y probemos desde ahí.</p>
            </div>
        </div>
        
    )

}