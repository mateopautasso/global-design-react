import React from "react";
import "./section-title.css";

function SectionTitle({sub, title}) {
    return (
        <div className="section-title">
            <p className="section-title__sub">{sub}</p>
            <h2 className="section-title__title">{title}</h2>
        </div>
    )
}

export default SectionTitle;