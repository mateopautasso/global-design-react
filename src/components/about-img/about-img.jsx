import "./about-img.css";

function AboutImg({ source }) {
    return(
        <figure className="about-card__figure">
            <img className="about-card__img" src={source} alt="" />
        </figure>
    )
}

export default AboutImg;