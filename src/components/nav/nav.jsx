import React, { useState } from "react";
import "./nav.css";
import Logo from "./logo/logo";
import AnchorNav from "./anchor/anchor-nav";
import BtnChangeIdioma from "./btn-idioma/btn-idioma";


function Nav() {

    const [navMobile, setnavMobile] = useState(true);

    const observerMedia = window.matchMedia("(max-width: 1023px)");
    window.addEventListener('load', ()=>{
        setnavMobile(observerMedia.matches)
    })
    observerMedia.addEventListener('change', ()=>{
        setnavMobile(observerMedia.matches)
    })


    if(navMobile) {
        return(
            <nav className="header__nav">
                <div className="header__nav--left">
                    <Logo />
                </div>
                <div className="header__nav--right">
                    <BtnChangeIdioma />
                </div>
            </nav>
        )
    } else {
        return(
            <nav className="header__nav">
                <div className="header__nav--left">
                    <Logo />
                </div>
                <div className="header__nav--mid">
                    <AnchorNav href="#" text="Home"/>
                    <AnchorNav href="#" text="About"/>
                    <AnchorNav href="#" text="Work"/>
                    <AnchorNav href="#" text="Team"/>
                    <AnchorNav href="#" text="Services"/>
                </div>
                <div className="header__nav--right">
                    <BtnChangeIdioma />
                </div>
            </nav>
        )
    }
}

export default Nav;