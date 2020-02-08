import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
  const toggleBtnRef = useRef(null); // useRef hook used in a functional Components
  // toggleBtnRef.current.click(); // can't call thus toggleBtnRef here because the button is undefined

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request
    // let timer = setTimeout(() => {
    //   alert('Saved data to cloud');
    // }, 1000);

    // We toggleBtnRef here because useEffect run after every render cycle, therefore our button will be defined.
    toggleBtnRef.current.click();

    return (() => {
      // clearTimeout(timer);
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
        ref={ toggleBtnRef }
        className={ btnClass }
        onClick={ props.clicked }
        >
        Toggle Persons
        </button>
    </div>
  );
};

export default React.memo(cockpit); // memoization
