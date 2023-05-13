import "./work-card-frase.css";
import { useState } from "react";

function CardFrase({ text, cargo, autor, logo, img}) {
        return (
            <article className="card-frase">
                <div data-aos="fade-right" data-aos-duration="1000">
                    <figure className="card-frase__figure">
                        <img src={img} alt="" />
                    </figure>
                </div>
                <div className="card-frase__contenido" data-aos="fade-left" data-aos-duration="1000">
                    <div className="card-frase__frase-container">
                        <p>{text}</p>
                    </div>
                    <div className="card-frase__autor-container">
                        <div>
                            <p className="card-frase__autor">{autor}</p>
                            <p className="card-frase__cargo">{cargo}</p>
                        </div>
                        <img src={logo} alt="" />
                    </div>
                </div>
            </article>
        )
}

export default CardFrase