import React, { useState } from "react";
import ridottowhite from "../media/ridotto-white.png";
import { CgMenuRightAlt } from "react-icons/cg";
const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <nav className="navbar-container">
          <img className="logo" src={ridottowhite} alt="" />
          <div className="name-doctor">
            <div>
              <p className="name-doctor-contenuto">Dr. Hellen Craight</p>
              <p className="senior-doctor">Senior Doctor</p>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-show-items">
              <h4>Contactos</h4>
              <h4>Ubicaciòn</h4>
            </div>
            {/* <CgMenuRightAlt className="nav-icon-container nav-icon-show" /> */}
          </div>
        </nav>
      ) : (
        <nav className="navbar-container-toogler">
          <img className="logo" src={ridottowhite} alt="" />
          <div className="name-doctor">
            <div>
              <p className="name-doctor-contenuto">Dr. Hellen Craight</p>
              <p className="senior-doctor">Senior Doctor</p>
            </div>
          </div>

          <div className="nav-item">
            <div className="nav-show-items">
              <h4>Contactos</h4>
              <h4>Ubicaciòn</h4>
            </div>
            <CgMenuRightAlt className="nav-icon-container nav-icon-show" />
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
