import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import './HeaderLocation.css';

const HeaderLocation = (props) =>{
  return (
    <div className="header__location">
      <FontAwesomeIcon icon={['fas', 'home']} />
      {props.climaActual && (
        <p className="header__location-name">
          {`${props.climaActual.name}, ${props.climaActual.sys.country}`}
        </p>
      )}
    </div>
  );
};
export default HeaderLocation;
