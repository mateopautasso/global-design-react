import React, { useRef, useEffect } from "react";
import Nav from "../../components/nav/nav";
import "./header.css";

function Header() {

  const headerRef = useRef(null)

    useEffect(() => {
      const headerElement = headerRef.current;
      window.addEventListener('scroll', ()=>{
        if(window.scrollY > 100) {
          headerElement.classList.remove('show-nav');
          headerElement.classList.add('oculte-nav');
        } else {
          headerElement.classList.add('show-nav');
          headerElement.classList.remove('oculte-nav');
        }
      })
      const showNav = ()=> {
          headerElement.classList.add('show-nav');
      }
      const oculteNav = ()=> {
          headerElement.classList.remove('show-nav');
      }

      headerElement.addEventListener('mouseover', showNav);
      headerElement.addEventListener('mouseout', oculteNav);
  
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const scrollPositionTotal = window.innerHeight;
        const calculoDeScroll = scrollPositionTotal;

        
        if (scrollPosition >= calculoDeScroll*2.20 && scrollPosition <= calculoDeScroll*4.2) {
          headerElement.classList.add('scrolled');
        } else {
          headerElement.classList.remove('scrolled');
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        headerElement.removeEventListener('mouseover', showNav);
        headerElement.removeEventListener('mouseout', oculteNav);
      };
    }, []);

    return(
        <header className="header" ref={headerRef} data-aos="fade-down" data-aos-duration="1000">
          <Nav />  
        </header>
    );
}

export default Header;