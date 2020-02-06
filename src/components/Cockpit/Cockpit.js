import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request
    let timer = setTimeout(() => {
      alert('Saved data to cloud');
    }, 1000);
    return (() => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    });
  }, []); // You can pass more then one argument here.

  /* You can use 'useEffect()'' as many times */
  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return (() => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    });
  });

  const assignedClasses = [];

  let btnClass = '';

  if (props.showPersons) btnClass = classes.Red;
  if (props.personsLength <= 2) assignedClasses.push(classes.red) // equivalent to const assignedClasses = ['red'];
  if (props.personsLength <= 1) assignedClasses.push(classes.bold) // equivalent to const assignedClasses = ['red', 'bold'];

  return (
    <div className={ classes.Cockpit }>
      <h1>{ props.title }</h1>
      <p className={ assignedClasses.join(' ') }>This is really working!</p>
      <button
        className={ btnClass }
        onClick={ props.clicked }
        >
        Toggle Persons
        </button>
    </div>
  );
};

export default React.memo(cockpit); // memoization
