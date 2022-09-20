import React from 'react';
import './Title.css';

const Title = (props) => {
  return <div className="title__container container">{props.children}</div>;
};
export default Title;
