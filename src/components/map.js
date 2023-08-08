// the css of this file is with css file of map.js
import React from "react";
import Mappavera from "./mappavera";
import { Reveal } from "../components";

const Map = () => {
  return (
    <section className="map-container">
      <div className="map-left">
        <div className="map-title-left">
          <Reveal>
            <h2>Nuestra ubicaciòn</h2>
          </Reveal>
          <p className="map-info-sentence">
            se encuentra en el centro de Huamboya donde ademas podras encontrar
            un establecimiento che presta varios servicios, entre estos
          </p>
          <ul>
            <li>
              <h6>Consultorio odontologico</h6>
            </li>
            <li>
              <h6>Farmacia</h6>
            </li>
            <li>
              <h6>Laboratorio analisis</h6>
            </li>
          </ul>
        </div>
        <div className="map-square-grid">
          <Reveal>
            <div className="square square-one">
              <h5>Pablo Sexto</h5>
              <div>
                <p>3km</p>
                <p>5min</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="square square-two">
              <h5>Octava</h5>
              <div>
                <p>8km</p>
                <p>15min</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="square square-three">
              <h5>Macas</h5>
              <div>
                <p>45km</p>
                <p>50min</p>
              </div>
            </div>
          </Reveal>
          <Reveal>
            <div className="square square-four">
              <h5>Sucua</h5>
              <div>
                <p>55km</p>
                <p>1h</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
      <div className="map-right">
        <Mappavera />
      </div>
    </section>
  );
};

export default Map;
