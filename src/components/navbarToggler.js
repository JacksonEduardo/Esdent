import React, { useRef } from "react";
import ridottowhite from "../media/ridotto-white.png";
import { BsWhatsapp, BsFacebook } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";
const NavbarToggler = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className="nav-container-toogle">
      <img className="logo" src={ridottowhite} alt="" />
      <div className="name-doctor">
        <div>
          <p className="name-doctor-contenuto">Dra. Tania Escandòn</p>
          <p className="senior-doctor">Odonotòloga</p>
        </div>
      </div>
      <nav className="nav-toggle-inside" ref={navRef}>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
        <div className="nav-container-info">
          <p>Dra. Tania Escandòn</p>
          <p>
            lunes a viernes: <br /> 8-12 / 13-18
          </p>
          <p>
            Sabados y domingos: <br /> 8-12
          </p>
          <div className="nav-container-icons">
            <BsWhatsapp className="nav-icons" />
            <BsFacebook className="nav-icons" />
          </div>
        </div>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavbarToggler;
