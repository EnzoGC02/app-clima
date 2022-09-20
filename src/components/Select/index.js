import React from 'react';

const Select = (props) => {
  return (
    <select defaultValue={'DEFAULT'} onChange={props.onChange}>
      {props.children}
    </select>
  );
};
export default Select;
