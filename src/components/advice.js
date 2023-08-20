import React from "react";
import Lottie from "lottie-react";
import { Reveal } from "../components";
import calendar from "../animation/calendar.json";
import personalData from "../animation/personal.json";
import dentalCare from "../animation/dentalCare.json";
import dentalDiet from "../animation/dentalDiet.json";

const Advice = () => {
  const animationContainer = {
    loop: true,
    autoplay: true,
    calendar: calendar,
    personalData: personalData,
    dentalCare: dentalCare,
    dentalDiet: dentalDiet,
  };

  return (
    <>
      <Reveal>
        <h2 className="advice-title">Consejos utiles...</h2>
      </Reveal>
      <div className="container-grid ">
        <div className="grid background-per-vedere">
          <div className="grid-el">
            <div className="advice-info">
              <h2 className="number-advice">1</h2>
              <div>
                <Lottie
                  className="animation-advice"
                  animationData={dentalDiet}
                />
              </div>
              <h2>Alimentaciòn</h2>
              <p>
                Reduce el consumo de bevidas azucaradas y sigue una sana
                alimentaciòn
              </p>
            </div>
          </div>
        </div>

        <div className="grid background-per-vedere">
          <div className="grid-el">
            <div className="advice-info">
              <h2 className="number-advice">2</h2>
              <div>
                <Lottie
                  className="animation-advice"
                  animationData={personalData}
                />
              </div>
              <h2>Personalizaciòn</h2>
              <p>Sigue un metodo de cura adapto a tus exigencias</p>
            </div>
          </div>
        </div>

        <div className="grid background-per-vedere">
          <div className="grid-el">
            <div className="advice-info">
              <h2 className="number-advice">3</h2>
              <div>
                <Lottie
                  className="animation-advice"
                  animationData={dentalCare}
                />
              </div>
              <h2>Cura</h2>
              <p>Mantèn limpia tu dentadura despues de los pastos</p>
            </div>
          </div>
        </div>

        <div className="grid">
          <div className="grid-el">
            <div className="advice-info">
              <h2 className="number-advice">4</h2>
              <div>
                <Lottie className="animation-advice" animationData={calendar} />
              </div>

              <h2>Contròl</h2>
              <p>Visita almenos una vez al año tu odontologo de confianza</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Advice;
