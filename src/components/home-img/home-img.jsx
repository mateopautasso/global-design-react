import React from "react";
import "./home-img.css";
import computerImg from "../../assets/images/computerCompres.png"

function HomeImg() {
    return(
        <div className="home__right" data-aos="fade-left" data-aos-duration="1000">
            <figure className="home__figure">
                <img className="home__img" src={computerImg} alt="" />
            </figure>
        </div>
    )
}

export default HomeImg;