import React from 'react';

// This is a reusable Component
const person = (props) => {
  return <p>I'm { props.name } and I am { props.age } years old! </p>
};

export default person;
