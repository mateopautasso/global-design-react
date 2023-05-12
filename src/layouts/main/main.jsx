import React from "react";
import HomeSection from "./home-section/home-section";
import AboutSection from "./about-section/about-section";
import WorkSection from "./work-section/work-section.jsx";

function Main() {
    return(
        <main>
            <HomeSection />
            <AboutSection />
            <WorkSection />
        </main>
    )
}

export default Main;