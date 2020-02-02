import React from 'react';

const person = () => {
  // We can execute one line expressions, short simple expressions, like calculations or function calls here.
  return <p>I'm a Person and I'm { Math.floor(Math.random() * 30) } years old! </p>
};

export default person;
