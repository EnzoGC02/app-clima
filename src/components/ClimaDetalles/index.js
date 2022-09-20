import React from 'react';
import {getKMforHour, getMeterToKM} from '../../__utils/functions';

const ClimaDetalles = (props)=>{
  return (
    <section className="weather-info">
      <div className="weather-info__container">
        <div className="details">
          <h2>Viento</h2>
          <p>{parseInt(getKMforHour(props.climaActual.wind.speed))} km/h</p>
        </div>
        <div className="details">
          <h2>Humedad</h2>
          <p>{props.climaActual.main.humidity}%</p>
        </div>
        <div className="details">
          <h2>Visibilidad</h2>
          <p>{getMeterToKM(props.climaActual.visibility)}km/h</p>
        </div>
        <div className="details">
          <h2>Presion</h2> <p>{props.climaActual.main.pressure} mbar</p>
        </div>
      </div>
    </section>
  );
};
export default ClimaDetalles;

