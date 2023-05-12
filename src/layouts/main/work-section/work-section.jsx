import "./work-section.css";
import SectionTitle from "../../../components/section-title/section-title";
import Circulo from "../../../components/circulo/circulo";
import SubWorkCard from "../../../components/work-card/sub-work-card/sub-work-card.jsx";
import TitleWorkCard from "../../../components/work-card/title-work-card/title-work-card.jsx"
import NameWorkCard from "../../../components/work-card/name-work-card/name-work-card";
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
            </article>

        </section>
    )
}

export default WorkSection;