import React, { useState, useEffect } from "react";
import { TbSquareRoundedChevronsDownFilled } from "react-icons/tb";
import Lottie from "lottie-react";
import animationData from "../animation/tooth.json";
import infoUno from "../media/infoUno.jpg";
import thoot from "../media/thoot.jpg";
import tools from "../media/tools.jpg";
import studio from "../media/studio.jpg";
import infodue from "../media/infodue.jpg";
import { Reveal } from "../components";

const Infosection = () => {
  const [number, setNumber] = useState(1);
  const [image, setImage] = useState([infoUno, infodue, tools, studio, thoot]);

  // START LOGIC TO VARIABLE IMAGE
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % image.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [image]);
  // END LOGIC TO VARIABLE IMAGE

  // START LOGIC TO VARIABLE NUMBERS
  const animationContainer = {
    loop: true,
    autoplay: true,
    animationData: animationData,
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevNumber) => {
        const nextNumber = prevNumber + 1;
        return nextNumber <= 7 ? nextNumber : prevNumber;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);
  // END LOGIC TO VARIABLE NUMBERS

  return (
    <section>
      <div className="container-info">
        <TbSquareRoundedChevronsDownFilled className="icon" />
      </div>
      <div className="title-section">
        <h3 className="regular-font">
          Ayudamos a los pacientes a reactivar su sonrisa!
        </h3>
        <Reveal>
          <h2 className="fw-bold">
            Mejoramos La calidàd de tu vida <br /> atravèz de tu salud dental
          </h2>
        </Reveal>
      </div>
      <div className="info">
        <div className="info-left">
          <div className="inside-info">
            <div className="inside-left">
              <div>
                <p className="fw-bold">+{number}</p>
                <h2>años de experiencia</h2>
                <h5>
                  ...en campos <br /> rurales y ciudades
                </h5>
              </div>
            </div>
            <div className="inside-right">
              <img
                className="inside-right"
                src={image[currentImageIndex]}
                alt="Dynamic image"
              />
            </div>
          </div>
        </div>
        <div className="info-right">
          <div id="tooth-animation-container">
            <Lottie animationData={animationData} />
          </div>
          <p className="fw-bold">
            "Sonrisas saludables, felicidad contagiosa."
          </p>
          <p>
            "La clave para una sonrisa duradera es el cuidado preventivo. Mantén
            una rutina constante de higiene oral y no dudes en consultar con
            nosotros ante cualquier inquietud dental."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Infosection;
