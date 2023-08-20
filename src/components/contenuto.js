import React from "react";
import { Reveal } from "../components";

const Contenuto = () => {
  const phoneNumber = +393497086615;
  const whatsappURL = `https://wa.me/${phoneNumber}`;

  return (
    <>
      <main>
        <div className="container">
          <div className="container-img">
            <div className="title">
              <p className="title-small">Cura todos los dias con</p>
              <Reveal>
                <h1 className="esdent-small">Esdent</h1>
              </Reveal>
              <h2 className="subtitle-small">
                Consultorio <span>Dental</span>
              </h2>
              <div className="orari">
                <Reveal>
                  Horarios: <br />
                  lunes-viernes: 8-12 / 13-18 <br />
                  Sabados y Domingos: 8-12
                </Reveal>
              </div>

              <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
                <button className="welcome-button">
                  Emergencias <br /> Whatsapp
                </button>
              </a>
            </div>

            <div className="welcome-img">
              {/* this div contain a first welcome image */}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contenuto;
