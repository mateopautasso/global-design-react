
import React, { useEffect, useRef } from "react";
import "./slider-companies.css";
import img1 from "../../assets/images/insta-blue-vacio.png";
import img4 from "../../assets/images/linkedin-blue.png";
import img2 from "../../assets/images/insta-blue.png";
import img3 from "../../assets/images/tiktok-blue.png";


function SliderCompanies() {
    
    const sliderRef = useRef();
    
    useEffect(() => {
      let sliderTranslateActual = 0;
      const slider = sliderRef.current;

      const next = () => {
      let sliderFigureFirst = document.querySelectorAll('.companies-trust__figure')[0];
      sliderTranslateActual = parseInt(sliderTranslateActual) - 110;
      slider.style.transform = `translateX(${sliderTranslateActual}px)`;
      slider.style.transition = 'all 1.5s linear';
      setTimeout(()=>{
          slider.insertAdjacentElement('beforeend', sliderFigureFirst);
          sliderTranslateActual = parseInt(sliderTranslateActual) + 110;
          slider.style.transform = `translateX(${sliderTranslateActual}px)`;
          slider.style.transition = 'all 0s';
      },1500);
    }
    setInterval(next, 2500);
  }, []);

  return (
    <div className="section-about__companies-trust companies-trust">
      <div className="companies-trust-container" data-aos="fade-left" data-aos-duration="1000">
        <div className="companies-trust__title-container">
          <div></div>
          <div className="companies-trust__title">
            <p>Companies that trust us</p>
          </div>
          <div></div>
        </div>
        <div className="companies-trust__slider" ref={sliderRef}>
          <figure className="companies-trust__figure">
            <img src={img1} alt=""/>
          </figure>
          <figure className="companies-trust__figure">
            <img src={img2} alt=""/>
          </figure>
          <figure className="companies-trust__figure">
            <img src={img3} alt=""/>
          </figure>
          <figure className="companies-trust__figure">
            <img src={img4} alt=""/>
          </figure>
          <figure className="companies-trust__figure">
            <img src={img1} alt=""/>
          </figure>
          <figure className="companies-trust__figure">
            <img src={img2} alt=""/>
          </figure>
          <figure className="companies-trust__figure">
            <img src={img3} alt=""/>
          </figure>
          <figure className="companies-trust__figure">
            <img src={img4} alt=""/>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SliderCompanies;