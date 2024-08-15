import React, { Component } from "react";
import './styles.css' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render(){
        return(
            <div className="mt-5">
                <footer className="footer d-flex  container-md">
                    <FontAwesomeIcon icon={faReact} className="fs-5"/><p className="mx-3">Guilherme Otto. Todos os direitos reservados.</p>
                    <FontAwesomeIcon icon={faReact} className="fs-5"/>

                </footer>
            </div>
        )
    }
}

export default Footer