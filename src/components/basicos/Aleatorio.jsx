import React from "react";

export default (props) => {
    const aleat = parseInt(Math.random() * (props.max - props.min)) + props.min;
    return  (
        <h2>Número aleatório entre { props.min } e { props.max } é: {aleat}!</h2>
    )
}