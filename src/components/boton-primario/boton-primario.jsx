import React from "react";
import "./boton-primario.css"

function BotonPrimario({ text, color }) {
    return(
        <button className={`boton-primario boton-primario--${color}`}>
            {text}
            <div className="arrow-wrapper">
                <div className="arrow"></div>
            </div>
        </button>
    );
};

export default BotonPrimario;