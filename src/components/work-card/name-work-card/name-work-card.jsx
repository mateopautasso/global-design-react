import "./name-work-card.css";

function NameWorkCard(props) {
    return(
        <div className="work-card__name">
            {props.children}
        </div>
    )
}
export default NameWorkCard