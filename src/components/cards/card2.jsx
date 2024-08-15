import React, { Component } from 'react';
import BaseCard from '../baseCard';
import '../styles.css'

class Card2 extends Component {
    state = {
        titulo: "Componentes",
        descricao: `
        <br></br>
        <b>Componentes</b>: São a base fundamental do desenvolvimento de interfaces no React e podem ser classificados em dois tipos (Também são conhecidos por (<b>StateLess e StateFull</b>). <br> </br>
        `
    }

    render(){
        return(
            <BaseCard titulo={this.state.titulo} descricao={<div dangerouslySetInnerHTML={{ __html: this.state.descricao}} />} />
        )
    }
}

export default Card2
