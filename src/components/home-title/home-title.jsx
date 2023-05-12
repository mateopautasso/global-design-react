import React from "react";
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrLinkedinOption } from 'react-icons/gr';
import { FaTiktok } from 'react-icons/fa';
import BotonPrimario from "../boton-primario/boton-primario.jsx";
import "./home-title.css";

function HomeTitle() {
    return(
        <div className="section-home__left home__left">
        <div className="home__redes" data-aos="fade-right" data-aos-duration="1000">
            <div className="home__line-top"></div>
            <div className="home__redes-container">
                <a href="/">
                    <AiOutlineInstagram className="redes-icon redes-icon--insta"/>
                </a>
                <a href="/">
                    <GrLinkedinOption className="redes-icon"/>
                </a>
                <a href="/">
                    <FaTiktok className="redes-icon redes-icon--tiktok"/>
                </a>
            </div>
            <div className="home__line-bottom"></div>
        </div>
        <div className="home__content" data-aos="fade-right" data-aos-duration="1000">
            <div>
                <p className="home__p">WELCOME TO</p>
            </div>
            <div>
                <h1 className="home__title h1-section">Un enfoque <span className="home__title home__title--blue h1-section">global </span></h1>
                <h1 className="home__title h1-section">para tu presencia digital.</h1>
            </div>
            <div>
                <BotonPrimario text="Lean More" color="azul"/>
            </div>
        </div>
    </div>
    )
}

export default HomeTitle;