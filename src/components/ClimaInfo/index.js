import React from 'react';
import {getDateFormated, getHourCurrent} from '../../__utils/functions';
import icons from '../Iconos';
import './ClimaInfo.css';

const ClimaInfo= (props)=>{
  return (
    <section className="weather">
      <div className="weather__container">
        <h2 className="weather__day">
          {getDateFormated(new Date())}
        </h2>
        <p className="weather__hours">{getHourCurrent(new Date())}</p>
        <div className="icon">
          <img
            alt="icon weather"
            src={icons(props.climaActual.weather[0].main)}
          />
        </div>
        <h3 className="weather__temperature">
          {parseInt(props.climaActual.main.temp)}°C
        </h3>
        <p className="weather__state">
          {props.climaActual.weather[0].description} | sensacion térmica:
          {parseInt(props.climaActual.main.feels_like)}°C
        </p>
      </div>
    </section>
  );
};
export default ClimaInfo;
