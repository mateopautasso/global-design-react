import React, { useState } from "react";
import { FaChevronDown } from 'react-icons/fa';
import './btn-idioma.css'

function BtnChangeIdioma() {

    const [menuActivo, setmenuActivo] = useState(false);
    const [idiomaActivo, setidiomaActivo] = useState('Es');

    const desplegarMenu = ()=>{
        setmenuActivo(!menuActivo)
        console.log(menuActivo);
    };

    const cambioIdioma = (e)=>{
        setidiomaActivo(e.target.textContent);
    }

    return(
        <div className="cambio-idioma">
            <p className="cambio-idioma__idioma">{idiomaActivo}</p>
            <FaChevronDown onClick={desplegarMenu} className={menuActivo ? 'cambio-idioma__arrow chevron-down-despliegue lang-change__menu-Active' : 'cambio-idioma__arrow chevron-down-rotate'} alt="" />

            <div className={menuActivo ? "cambio-idioma__menu cambio-idioma__menu-Active" : "cambio-idioma__menu"}>
                <p className="cambio-idioma__idioma"
                onClick={cambioIdioma}>
                    {idiomaActivo === 'Es' ? 'En' : 'Es'}
                </p>
                <div className={menuActivo ? "cambio-idioma__line cambio-idioma__line-Active" : "cambio-idioma__line"}></div>
            </div>
        </div>
    );
}

export default BtnChangeIdioma;