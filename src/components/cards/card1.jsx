import React, { Component } from 'react';
import BaseCard from '../baseCard';

class Card1 extends Component {
    state = {
        titulo: "Iniciar projeto React",
        descricao: `
        
            <br/>

            <p>
                <b>1</b>. Crie uma pasta no seu computador, e abra ela no vscode. <br/>

                <b>2</b>. Abra um novo terminal dentro da pasta e digite <code>"npm create vite@latest"</code>. <br/>

                <b>3</b>. Defina o Project name. <br/>

                <b>4</b>. Escolha a tecnologia (React). <br/>

                <b>5</b>. Escolha o variente (Javascript). <br/>

                <b>6</b>. Agora abre a pasta dentro do vscode que o vite criou. <br/>

                <b>7</b>. Ainda não temos a pasta "node modules", ou seja, o vite ainda não instalou as dependências. <br/>

                <b>7.5</b>. Instale as dependências, dentro do terminal, digite <code>"npm i"</code>. <br/>

                <b>8</b>. Rode o projeto com <code>"npm run dev"</code>. <br/>

                <b>9</b>. Exclua os arquivos que não vão ser utilizados, como estes: <br/>
                <code>
                    .svg,
                    index.css,
                    app.css,
                    app.jsxm
                </code> <br/>

                <b>10</b>. Crie a sua estrutura de pastas.
            </p>
    `
    };

    render() {
        return (
            <BaseCard titulo={this.state.titulo} descricao={<div dangerouslySetInnerHTML={{ __html: this.state.descricao}} />} />
        );
    }
}

export default Card1;
