import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import './Error404.css'

export const Error404 = () => {

    return (
        
        <div class="mainbox">
            <div class="err">4</div>
            <i class="far fa-question-circle fa-spin"></i>
            <FontAwesomeIcon className="far fa-spin" icon={faQuestionCircle} />
            <div class="err2">4</div>
            <div class="msg">Parece que esta pagina ya no existe, fue movida, o jamas existió.
                <p className="msg-p">Vayamos al <Link className="err-link" to="/productos">inicio</Link> y probemos desde ahí.</p>
            </div>
        </div>
        
    )

}