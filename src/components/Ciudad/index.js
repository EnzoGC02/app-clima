import React from 'react';

const Ciudad = ({handleChange, children})=>{
  return (
    <select onChange={handleChange}>
      {children}
    </select>
  );
};
export default Ciudad;
