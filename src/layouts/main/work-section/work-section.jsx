import "./work-section.css";
import SectionTitle from "../../../components/section-title/section-title";
import Circulo from "../../../components/circulo/circulo";
import SubWorkCard from "../../../components/work-card/sub-work-card/sub-work-card.jsx";
import TitleWorkCard from "../../../components/work-card/title-work-card/title-work-card.jsx"
import NameWorkCard from "../../../components/work-card/name-work-card/name-work-card";
import CardFrase from "../../../components/work-card-frase/work-card-frase";
import logoCardFrase from "../../../assets/images/logo-amazon.png"
import imgCardFrase from "../../../assets/images/jeffbezos.jpg"
import img1 from "../../../assets/images/work1.jpg"
import img2 from "../../../assets/images/work2.jpg"
import img3 from "../../../assets/images/work3.jpg"
import img4 from "../../../assets/images/work4.jpg"

function WorkSection() {
    return(
        <section className="work-section">
            <SectionTitle sub="WORK" title="Latest Work"/>
            <Circulo top="-190px" left="-250px"/>
            <article className="work-section__cards">
                <div className="work-section__cards--row1">
                    <figure className="work-section__card-container">
                        <img src={img1} alt="" />
                        <NameWorkCard>
                            <SubWorkCard text="Design"/>
                            <TitleWorkCard text="SOFA"/>
                        </NameWorkCard>
                    </figure>
                    <figure className="work-section__card-container">
                        <img src={img2} alt="" />
                        <NameWorkCard>
                            <SubWorkCard text="Web Designer"/>
                            <TitleWorkCard text="KeyBoard"/>
                        </NameWorkCard>
                    </figure>
                </div>
                <div className="work-section__cards--row2">
                    <figure className="work-section__card-container">
                        <img src={img3} alt="" />
                        <NameWorkCard>
                            <SubWorkCard text="Marketing"/>
                            <TitleWorkCard text="Work Media"/>
                        </NameWorkCard>
                    </figure>
                    <figure className="work-section__card-container">
                        <img src={img4} alt="" />
                        <NameWorkCard>
                            <SubWorkCard text="Community M."/>
                            <TitleWorkCard text="DDDone"/>
                        </NameWorkCard>
                    </figure>
                </div>
                <CardFrase 
                    text='"Tu marca es lo que otras personas dicen de ti cuando no estás en la habitación."'
                    autor="Jeff Bezos"
                    cargo="Amazon Founder"
                    logo={logoCardFrase}
                    img={imgCardFrase}
                />
                <svg className="work-section__wave" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2d2e46" fill-opacity="1" d="M0,128L16,112C32,96,64,64,96,53.3C128,43,160,53,192,80C224,107,256,149,288,176C320,203,352,213,384,218.7C416,224,448,224,480,202.7C512,181,544,139,576,138.7C608,139,640,181,672,208C704,235,736,245,768,229.3C800,213,832,171,864,133.3C896,96,928,64,960,64C992,64,1024,96,1056,128C1088,160,1120,192,1152,197.3C1184,203,1216,181,1248,160C1280,139,1312,117,1344,122.7C1376,128,1408,160,1424,176L1440,192L1440,0L1424,0C1408,0,1376,0,1344,0C1312,0,1280,0,1248,0C1216,0,1184,0,1152,0C1120,0,1088,0,1056,0C1024,0,992,0,960,0C928,0,896,0,864,0C832,0,800,0,768,0C736,0,704,0,672,0C640,0,608,0,576,0C544,0,512,0,480,0C448,0,416,0,384,0C352,0,320,0,288,0C256,0,224,0,192,0C160,0,128,0,96,0C64,0,32,0,16,0L0,0Z"></path></svg>
            </article>

        </section>
    )
}

export default WorkSection;