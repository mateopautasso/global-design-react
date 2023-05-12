import React, { useState } from "react";
import "./boton-secundario.css";

function BotonSecundario({ text, setCard, handleButtonClick, id, className }) {

    return (
        <button
          id={id}
          className={className}
          onClick={() => {
            setCard(id);
            handleButtonClick(id);
          }}
        >
          {text}
        </button>
      );
}

export default BotonSecundario;