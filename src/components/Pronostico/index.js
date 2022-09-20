import React from 'react';
const Pronostico = (props) => {
  return (
    <div className="section__container container">
      {props.error && <h1>Ups!, hubo un error</h1>}
      {!props.isLoading && props.children}
    </div>
  );
};

export default Pronostico;
