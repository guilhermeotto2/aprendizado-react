import React, { Component } from "react";
import './styles.css' ;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";

class Nav extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(

        <nav className="navbar navbar-expand-lg  px-5 container-md custom-navbar gap-4 rounded" >
            <FontAwesomeIcon icon={faReact} className="fs-3"/>
            <a className="navbar-brand m-0" href="#">Aprendizado Gui</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon rounded"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" href="https://pt-br.react.dev" target="_blank">React</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://getbootstrap.com" target="_blank">Bootstrap</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="https://discord.gg/MUPcfDCR" target="_blank">Servidor Discord</a>
                    </li>
                    
                </ul>
            </div>

        </nav>
        )
    }
}

export default Nav