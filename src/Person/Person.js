import React from 'react';
import classes from './Person.css';

/* For React version 2.x or higher rename Person.css to Person.module.css
 * Then you don't need to run npm run eject to use CSS Modules
 * Then Import like this ---> import classes from './Person.module.css';
 */

// This is a Stateless Component because it has no internal state management
// It is good practice to use as many of this Stateless Component then StateFull Component
// Stateless Components are also called Presentational Components because they present something.

// This is a reusable Component
const person = (props) => {
  return (
    <div className={ classes.Person }>
      <p onClick={ props.click }>I'm { props.name } and I am { props.age } years old! </p>
      <p>{ props.children }</p>
      <input
        type="text"
        onChange={ props.changed }
        value={ props.name }
        />
    </div>
  )
};

export default person;
