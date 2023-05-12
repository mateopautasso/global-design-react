import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./about-card.css";
import AboutImg from "../about-img/about-img";
import SectionTitle from "../section-title/section-title.jsx";
import BotonSecundario from "../boton-secundario/boton-secundario.jsx";
const data = require("./data.json");

function AboutCard() {
    
    const [Text, setText] = useState(data.designgraphic.text);

    const [activeButton, setActiveButton] = useState('designgraphic');

    function handleButtonClick(buttonId) {
        setActiveButton(buttonId);
    }

    const setCard = (buttonId) => {
        switch(buttonId) {
            case "designgraphic":
                setText(data.designgraphic.text);
                break;
            case "uxui":
                setText(data.uxui.text);
                break;
            case "community":
                setText(data.community.text);
                break;
            case "marketing":
                setText(data.marketing.text);
                break;
            default:
                console.log('error');
        }
        setActiveButton(buttonId);
    }

    return(
        <div className="about-card">
                <div className="about-card__left">
                    <AboutImg />
                </div>
                <div className="about-card__right">
                    <SectionTitle sub="ABOUT" title="How are we?"/>
                    <SwitchTransition >
                        <CSSTransition
                            classNames="fade"
                            key={Text}
                            addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
                        >
                            <p className="about-card__p">{Text}</p>
                        </CSSTransition>
                    </SwitchTransition>
                    <div className="about-card__btn-container">
                    <BotonSecundario
                        setCard={setCard}
                        text="Design Graphic"
                        id="designgraphic"
                        className={
                          activeButton === "designgraphic"
                            ? "boton-secundario boton-secundario--active"
                            : "boton-secundario"
                        }
                        handleButtonClick={handleButtonClick}
                    />
                    <BotonSecundario
                        setCard={setCard}
                        text="UX/UI"
                        id="uxui"
                        className={
                          activeButton === "uxui"
                            ? "boton-secundario boton-secundario--active"
                            : "boton-secundario"
                        }
                        handleButtonClick={handleButtonClick}
                    />
                    <BotonSecundario
                        setCard={setCard}
                        text="Community M."
                        id="community"
                        className={
                          activeButton === "community"
                            ? "boton-secundario boton-secundario--active"
                            : "boton-secundario"
                        }
                        handleButtonClick={handleButtonClick}
                    />
                    <BotonSecundario
                        setCard={setCard}
                        text="Marketing"
                        id="marketing"
                        className={
                          activeButton === "marketing"
                            ? "boton-secundario boton-secundario--active"
                            : "boton-secundario"
                        }
                        handleButtonClick={handleButtonClick}
                    />
                    </div>
                </div>
            </div>
    )
}

export default AboutCard;