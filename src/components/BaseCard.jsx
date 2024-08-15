import React from 'react';

const BaseCard = ({ titulo, descricao }) => {
    return (
        <header className="mt-5 rounded d-flex container-md">
            <div className="p-5">
                <h2>{titulo}</h2>
                <p>{descricao}</p>
            </div>
        </header>
    );
};

export default BaseCard;
