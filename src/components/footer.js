import React from "react";
import { GiPoliceCar } from "react-icons/gi";
import { RiHospitalLine } from "react-icons/ri";
import { Reveal } from "../components";

const Footer = () => {
  return (
    <footer className="only-for-position-relative">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            {/* this div is container of logo image */}
          </div>
          <p className="p-text-to-left info-footer">
            Pagina creada a titulo demostrativo y no para fines lucrativos.{" "}
            <br /> Todos los Derechos son Reservados a{" "}
            <a href="https://preview.themeforest.net/item/dentisto-dentist-medical-elementor-template-kit/full_screen_preview/35271731?_ga=2.179828772.1614550797.1690381742-356057470.1680894727">
              themeforest
            </a>{" "}
          </p>
        </div>
        <Reveal>
          <div className="footer-right">
            <div className="footer-grid-right">
              <div className="col-sx">
                <h3 className="footer-title">Informaciones Esdent</h3>
                <p className="p-text-to-left">Horarios de atenciòn</p>
                <ul className="info-footer">
                  <li>lunes - viernes: 8-12 / 13-18</li>
                  <li>Sabados y domingos: 8-12</li>
                </ul>
                <p className="info-footer p-text-to-left">
                  Telefono: <a href="+593 09 843 184">+593 09 843 184</a>
                </p>
              </div>
              <div className="col-dx">
                <h3 className="footer-title ">Contactos utiles</h3>
                <ul className="info-footer">
                  <li>
                    <RiHospitalLine />
                    <p>Subcentro Pablo VI: 911</p>
                  </li>
                  <li>
                    <RiHospitalLine />
                    <p>Subcentro Huamboya: 911</p>
                  </li>
                  <li>
                    <GiPoliceCar />
                    <p>Policia Huamboya: +123-423</p>
                  </li>
                  <li>
                    <GiPoliceCar />
                    <p>Policia Pablo VI: +421-543</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
      <div className="footer-copyright info-footer">
        <p>Copyright ©2021 DENTISTO.COM All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
