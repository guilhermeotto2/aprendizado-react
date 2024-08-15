import React, { Component } from 'react';
import BaseCard from '../baseCard';
import '../styles.css'

class Card4 extends Component {
    state = {
        titulo: "Componentes sem estado",
        descricao: `
        <br></br>
        São componentes mais simples, quase sempre usados apenas para renderizar alguma responsabilidade pequena na página
        Geralmente representados por arrow functions.
        <br></br>
        <b>Exemplo de componente sem estado</b>:

        <pre><code>
        const SemEstado = (props) => {
            return(
                {props.name}
            )
        
            function App() {
                return(
                    &lt;SemEstado name = "Gui"/&gt;
                )
            }
        }</code></pre>
        `
    }

    render(){
        return(
            <BaseCard titulo={this.state.titulo} descricao={<div dangerouslySetInnerHTML={{ __html: this.state.descricao}} />} />
        )
    }
}

export default Card4

