import React from "react";
import "./Map.css";
import { Circle, MapContainer, Popup, TileLayer } from "react-leaflet";
import numeral from "numeral";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    rgb: "rgb(204, 16, 52)",
    half_op: "rgba(204, 16, 52, 0.5)",
    multiplier: 200,
  },
  recovered: {
    hex: "#7dd71d",
    rgb: "rgb(125, 215, 29)",
    half_op: "rgba(125, 215, 29, 0.5)",
    multiplier: 400,
  },
  deaths: {
    hex: "#fb4443",
    rgb: "rgb(251, 68, 67)",
    half_op: "rgba(251, 68, 67, 0.5)",
    multiplier: 600,
  },
};

function Map({ countries, casesType, center, zoom }) {
  return (
    <div className="map">
      <MapContainer center={center} zoom={zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {countries?.length > 0 &&
          countries.map((country, index) => (
            <Circle
              center={[country.countryInfo.lat, country.countryInfo.long]}
              fillOpacity={0.4}
              color={casesTypeColors[casesType].hex}
              fillColor={casesTypeColors[casesType].hex}
              radius={
                Math.sqrt(country[casesType]) *
                casesTypeColors[casesType].multiplier
              }
            >
              <Popup>
                <div className="info-container">
                  <div
                    className="info-flag"
                    style={{
                      backgroundImage: `url(${country.countryInfo.flag})`,
                    }}
                  ></div>
                  <div className="info-name">{country.country}</div>
                  <div className="info-confirmed">
                    Cases: {numeral(country.cases).format("0,0")}
                  </div>
                  <div className="info-recovered">
                    Recovered: {numeral(country.recovered).format("0,0")}
                  </div>
                  <div className="info-deaths">
                    Deaths: {numeral(country.deaths).format("0,0")}
                  </div>
                </div>
              </Popup>
            </Circle>
          ))}
      </MapContainer>
    </div>
  );
}

export default Map;
