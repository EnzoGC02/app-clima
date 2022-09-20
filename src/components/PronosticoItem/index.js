import React from 'react';
import icons from '../Iconos';

import './PronosticoItem.css';

import {getDayStringDate} from '../../__utils/functions';

const PronosticoItem = (props) => {
  const {data} = props;
  return (
    <div className="forecast__card">
      <h1 className="forecast__day">
        {getDayStringDate(new Date(data.dt_txt))}
      </h1>
      <div className="icon-card">
        <img src={icons(data.weather[0].main)} />
      </div>
      <h2 className="forecast__temperature">{parseInt(data.main.temp_max)}°</h2>
    </div>
  );
};

export default PronosticoItem;
