import React from "react";
import "./home-section.css";
import HomeTitle from "../../../components/home-title/home-title";
import HomeImg from "../../../components/home-img/home-img";
import SliderCompanies from "../../../components/slider-companies/slider-companies";
import imgFondo from "../../../assets/images/FONDO.png"


function HomeSection() {
    const showHomeImg = window.innerWidth >= 1000;
    return(
        <section className="home-section">
            <HomeTitle />
            {showHomeImg && <HomeImg />}
            {showHomeImg && <img src={imgFondo} className="home-section__img-fondo" alt="" />}
            <SliderCompanies />
        </section>
    )
}

export default HomeSection;