import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  // useState return an array with exactly two elemens and always two elements
  // the first element we get back will always be our current state.
  // the second element we get back will always be a functuon that allows us to update this state.
  // Such that React is aware of it and will renrender thsi component.
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 24 }
    ]
  });

  // You can use useState as many time as you want.
  // useState can even pass a String, Object or a Number, Array or a Bollean.
  const [ otherState, setOtherState ] = useState('some other value');

  console.log(personsState, otherState);

  // We can have functions inside functions
  const switchNameHandler = () => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Raiden';
    setPersonsState({
      persons: [
        { name: 'Raiden', age: 26 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 20 }
      ]
      // otherState: personsState.otherState // THIS: is not a good approach to manually include all old state data or untouched state.
    });
  };

  // this. keyword only exists in class based react components and we have no such class based react componenets.
  // personsState. keyword because we are using a functional component.
  return (
    <div className="App">
      <h1>Hi I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={ switchNameHandler }>Switch Name</button>
      <Person name={ personsState.persons[0].name } age={ personsState.persons[0].age }/>
      <Person name={ personsState.persons[1].name } age={ personsState.persons[1].age }>My Hobbies: Racing</Person>
      <Person name={ personsState.persons[2].name } age={ personsState.persons[2].age }/>
    </div>
  );
  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
}

export default app;
