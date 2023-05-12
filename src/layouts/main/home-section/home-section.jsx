import React from "react";
import "./home-section.css";
import HomeTitle from "../../../components/home-title/home-title";
import HomeImg from "../../../components/home-img/home-img";
import SliderCompanies from "../../../components/slider-companies/slider-companies";


function HomeSection() {
    const showHomeImg = window.innerWidth >= 950;
    return(
        <section className="home-section">
            <HomeTitle />
            {showHomeImg && <HomeImg />}
            <SliderCompanies />
        </section>
    )
}

export default HomeSection;