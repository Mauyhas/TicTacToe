import React from 'react';

export default function Square(props) {
    console.log(props);
    return (
      <button className={props.value.classname} onClick={props.onClick}>
        {props.value.value}
      </button>
    );
  }