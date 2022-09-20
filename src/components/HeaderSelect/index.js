import React from 'react';
import './HeaderSelect.css';
const HeaderSelect = (props)=>{
  return (
    <div className='select__container'>
      <h3>Cambiar de ubicación:</h3>
      <div className='select'>
        {props.children}
      </div>
    </div>
  );
};
export default HeaderSelect;

