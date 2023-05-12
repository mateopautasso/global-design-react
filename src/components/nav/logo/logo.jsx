import React from "react";
import Logopng from '../../../assets/logos/LOGO2.png'
import "./logo.css";

function Logo() {
    return (
        <figure className="header__logo">
            <img src={Logopng} alt="Logo de Global Design" />
        </figure>
    );
}

export default Logo;