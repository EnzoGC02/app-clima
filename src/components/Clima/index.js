import React from 'react';
import './Clima.css';
const Clima = (props) => {
  return (
    <section className="section__container container">
      {props.error && <h1>Ups!, hubo un error</h1>}
      {!props.isLoading && props.children}
    </section>
  );
};

export default Clima;
