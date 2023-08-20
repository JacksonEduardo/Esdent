import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

const Mappavera = () => {
  const markers = [
    {
      geocode: [-1.942456, -77.990881],
      popup: "Esdent",
    },
    {
      geocode: [-1.943502, -77.990393],
      popup: "Parque Central Tres Fundadores",
    },
    {
      geocode: [-1.942821, -77.990425],
      popup: "Municipio Huamboya",
    },
  ];
  const customIcon = new Icon({
    // due metodi per prendere le immagini come icone
    // PRIMO metodo
    // iconUrl: process.env.PUBLIC_URL + "/images/location.png",
    // SECONDO metodo
    iconUrl: require("../media/pin.png"),
    iconSize: [40, 40], // icon size
  });
  return (
    <MapContainer
      className="mappavera-index"
      center={[-1.942954, -77.990437]}
      zoom={15}
    >
      {/* possiamo avere diverse mappe, si possono prendere dal sito
        https://leaflet-extras.github.io/leaflet-providers/preview/ */}

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.jpg"
      /> */}
      {/* il clouster group serve per raggruppare qual'ora ci fossero più punti di interessa
e se guardiamo da lontano ci raggruppera in una sola icona */}
      <MarkerClusterGroup>
        {markers.map((el, index) => (
          <Marker key={index} position={el.geocode} icon={customIcon}>
            <Popup>{el.popup}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
};

export default Mappavera;
