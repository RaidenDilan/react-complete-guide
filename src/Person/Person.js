import React from 'react';

// This is a Stateless Component because it has no internal state management
// It is good practice to use as many of this Stateless Component then StateFull Component
// Stateless Components are also called Presentational Components because they present something.

// This is a reusable Component
const person = (props) => {
  return (
    <div>
      <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old! </p>
      <p>{ props.children }</p>
    </div>
  )
};

export default person;
