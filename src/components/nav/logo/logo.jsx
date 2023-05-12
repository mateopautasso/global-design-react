import React from "react";
import Logopng from '../../../assets/logos/FAVICON.png'
import "./logo.css";

function Logo() {
    return (
        
        <a href="/" className="header__logo">
            <img src={Logopng} alt="Logo de Global Design" />
        </a>
    );
}

export default Logo;