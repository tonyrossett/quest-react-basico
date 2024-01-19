import React from "react";
import "./button.css";

const Show = (label) => {
    alert(`A label deste botão é: ${label}`);
}

const Button = ({ label }) => {
    return (
        <button onClick={ () => Show(label) }>
            { label }
        </button>
    );
};

Button.defaultProps = {
    label: 'Funcionou!'
}

export default Button;