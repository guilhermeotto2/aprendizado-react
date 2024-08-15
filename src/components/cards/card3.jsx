import React, { Component } from 'react';
import BaseCard from '../baseCard';
import '../styles.css'

class Card3 extends Component {
    state = {
        titulo: "Componentes com estado",
        descricao: `
        <br/>
        
        Um componente de estado é uma classe JavaScript que pode aceitar a entradas de props e retorna elementos React, descrevendo como a interface do usuário deve ser renderizada com base nessas entradas. <br></br>

        <b>Exemplo de componente com estado</b>:

        <pre><code>
        class Exemplo extends Component {
            constructor(props) {
                super(props);
                this.state = {
                    nome: 'Guilherme'
                }
            }
        
            render(){
                return(
                    &lt;h1&gt;{this.state.nome}&lt;/h1&gt;
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

export default Card3
