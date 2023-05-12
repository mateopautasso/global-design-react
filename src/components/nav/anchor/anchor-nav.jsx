import React from "react";
import "./anchor-nav.css"

function AnchorNav({ text, href }) {
    return (
        <a className="header__a" href={href}>{text}</a>
    );
}

export default AnchorNav;