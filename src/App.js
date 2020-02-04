import React, { Component } from 'react';
import classes from './App.css';
// import styled from 'styled-components'
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'adsfd', name: 'Max', age: 26 },
      { id: 'fdfds', name: 'Manu', age: 29 },
      { id: 'ghdgd', name: 'Stephanie', age: 24 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.persons[0].name = 'Raiden';
    this.setState({
      persons: [
        { name: newName, age: 26 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 20 }
      ],
      otherValue: 'Some other value',
      showPersons: false
    })
  };

  nameChangedHandler = (event, id) => {
    // const person = this.state.persons.find();
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // ALTERNATIVE
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  deletePersonsHandler = (personIndex) => {
    // const persons = this.state.persons.splice(); // THIS: Mutates our Array
    const persons = [...this.state.persons] // THIS: Does not mutate our Array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    let persons = null;
    const btnClass = [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map((person, index) => {
            return <Person
              click= { () => this.deletePersonsHandler(index) }
              name={ person.name }
              age={ person.age }
              key={ person.id }
              changed={ (event) => this.nameChangedHandler(event, person.id) }
              />
          }) }
        </div>
      );

      btnClass.push(classes.Red);
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) assignedClasses.push(classes.red) // equivalent to const assignedClasses = ['red'];
    if (this.state.persons.length <= 1) assignedClasses.push(classes.bold) // equivalent to const assignedClasses = ['red', 'bold'];

    return (
      <div className={ classes.App }>
        <h1>Hi I'm a React App</h1>
          <p className={ assignedClasses.join(' ') }>This is really working!</p>
          <button
            className={ btnClass.join(' ') }
            onClick={ this.togglePersonsHandler }
            >
            Toggle Persons
            </button>
        { persons }
      </div>
    );
  }
}

export default App;
